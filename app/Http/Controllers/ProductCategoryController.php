<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class ProductCategoryController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('search');
        $searchBy = $request->input('searchBy');


        $productCategory = ProductCategory::orderBy('id', 'desc');

        if ($query) {
            $productCategory->where($searchBy, 'like', '%' . $query . '%');
        }
        $productCategory = $productCategory->paginate(10);

        // Append the filter values to the pagination links
        $filterValues = [];
        if ($query) {
            $filterValues['search'] = $query;
        }
        if ($searchBy) {
            $filterValues['searchBy'] = $searchBy;
        }
        $productCategory->appends($filterValues);

        return Inertia::render('Product Category/Index',  [
            'data' => $productCategory,
            'search' => $query,
            'searchBy' => $searchBy
        ]);
    }

    public function store(Request $request)
    {
        // Validate the incoming data

        // dd($request);
        $validatedData = $request->validate([
            'category_name' => 'required|unique:product_categories,category_name|string|max:255',
        ]);

        // Store the validated data in the apartments table
        $productCategory = ProductCategory::create($validatedData);

        return redirect('/product-category')->with('success', 'Data Kategori Produk Baru Berhasil Di Buat!');
    }

    public function edit(ProductCategory $productCategory, Request $request)
    {
        return Inertia::render("Product Category/Edit", [
            "productCategoryData" => $productCategory->find($request->id)
        ]);
    }

    public function update(Request $request, $id)
    {
        // Find the apartment by its ID
        $productCategory = ProductCategory::findOrFail($id);

        // Validate the incoming data
        $validatedData = $request->validate([
            'category_name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('product_categories')->ignore($productCategory->id),
            ],
        ]);

        $productCategory->update($validatedData);

        return redirect('/product-category')->with('success', 'Data Kategori Produk Berhasil Di Update!!');
    }
}
