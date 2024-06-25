<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductCategory;
use Inertia\Inertia;
use Illuminate\Http\Request;

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
            $imagePath = $request->file('image')->store('products', 'public');
            $validatedData['image'] = $imagePath;
        }

        dd($request);
        // Create the product
        Product::create($validatedData);

        // Redirect or return a response
        return redirect()->route('products.index')->with('success', 'Produk Baru Berhasil Dibuat.');
    }
}
