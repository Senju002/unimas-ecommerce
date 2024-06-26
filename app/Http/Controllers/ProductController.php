<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductCategory;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\File;



class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('search');
        $searchBy = $request->input('searchBy');


        $products = Product::with('category')->orderBy('id', 'desc');

        if ($query) {
            $products->where($searchBy, 'like', '%' . $query . '%');
        }
        $products = $products->paginate(10);

        // Append the filter values to the pagination links
        $filterValues = [];
        if ($query) {
            $filterValues['search'] = $query;
        }
        if ($searchBy) {
            $filterValues['searchBy'] = $searchBy;
        }
        $products->appends($filterValues);

        return Inertia::render('Product/Index',  [
            'data' => $products,
            'search' => $query,
            'searchBy' => $searchBy
        ]);
    }

    public function add()
    {
        $productCategoryList = ProductCategory::pluck('category_name', 'id')->map(function ($Name, $Id) {
            return ['label' => $Name, 'value' => $Id];
        })->prepend(['label' => 'Pilih Kategori Produk', 'value' => ''])->values()->toArray();
        return Inertia::render('Product/Store',  [
            'productCategoryList' => $productCategoryList,
        ]);
    }

    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'product_name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:0',
            'category_id' => 'required|exists:product_categories,id',
            'weight' => 'required|numeric|min:0',
            'image' => 'required|image|max:5120', // max 5MB
        ]);

        // Handle the file upload if an image is provided
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageFileName = time() . '_' . $image->getClientOriginalName();
            $resizedImage = Image::make($image)
                ->fit(1080, 1080, function ($constraint) {
                    $constraint->upsize();
                })
                ->encode('jpg', 100); // Adjust the image quality as needed

            // Determine the full storage path
            $storagePath = public_path('products');

            // Ensure the directory exists; create it if necessary
            if (!File::isDirectory($storagePath)) {
                File::makeDirectory($storagePath, 0777, true, true);
            }

            // Save the resized image to the public directory
            $imagePath = $storagePath . '/' . $imageFileName;
            $resizedImage->save($imagePath);

            // Update the validatedData with the public path
            $validatedData['image'] = 'products/' . $imageFileName;
        }

        // dd($validatedData);
        // Create the product
        Product::create($validatedData);

        // Redirect or return a response
        return redirect()->route('product.index')->with('success', 'Data Produk Baru Berhasil Dibuat.');
    }

    public function edit(Product $productData, Request $request)
    {
        $productCategoryList = ProductCategory::pluck('category_name', 'id')->map(function ($Name, $Id) {
            return ['label' => $Name, 'value' => $Id];
        })->prepend(['label' => 'Pilih Kategori Produk', 'value' => ''])->values()->toArray();

        $product = $productData->find($request->id);
        $image = $product->image;

        // Convert image path to URL using asset() function
        $imageUrl = asset($image);

        return Inertia::render('Product/Edit',  [
            'productCategoryList' => $productCategoryList,
            'productData' => array_merge($product->toArray(), ['image_url' => $imageUrl]),
        ]);
    }

    public function update(Request $request, $id)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'product_name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:0',
            'category_id' => 'required|exists:product_categories,id',
            'weight' => 'required|numeric|min:0',
            'image' => $request->hasFile('image') ? 'nullable|image|max:5120' : 'nullable', // Conditional validation for image

        ]);

        // dd($validatedData);

        // Find the product by ID
        $product = Product::findOrFail($id);

        // Handle the file upload if an image is provided
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageFileName = time() . '_' . $image->getClientOriginalName();
            $resizedImage = Image::make($image)
                ->fit(1080, 1080, function ($constraint) {
                    $constraint->upsize();
                })
                ->encode('jpg', 100); // Adjust the image quality as needed

            // Determine the full storage path
            $storagePath = public_path('products');

            // Ensure the directory exists; create it if necessary
            if (!File::isDirectory($storagePath)) {
                File::makeDirectory($storagePath, 0777, true, true);
            }

            // Save the resized image to the public directory
            $imagePath = $storagePath . '/' . $imageFileName;
            $resizedImage->save($imagePath);

            // Delete old image if exists
            if ($product->image && Storage::disk('public')->exists($product->image)) {
                Storage::disk('public')->delete($product->image);
            }

            // Update the product with new image path
            $validatedData['image'] = 'products/' . $imageFileName;
        }

        // Update the product with validated data
        $product->update($validatedData);

        // Redirect or return a response
        return redirect()->route('product.index')->with('success', 'Data Produk Berhasil Di Edit.');
    }
    public function view($id)
    {
        $productData = Product::findOrFail($id); // Assuming ID is primary key and exists
        $image = $productData->image;
        $imageUrl = asset($image);

        $recentProduct = Product::orderBy('id', 'desc')->take(10)->get()->map(function ($product) {
            $product->image_url = asset($product->image);
            return $product;
        });



        return Inertia::render('Product/View', [
            'productData' => array_merge($productData->toArray(), ['image_url' => $imageUrl]),
            "recentProduct" => $recentProduct,
        ]);
    }
}
