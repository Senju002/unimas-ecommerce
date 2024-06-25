<?php

namespace App\Http\Controllers;

use App\Models\Product;
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
}
