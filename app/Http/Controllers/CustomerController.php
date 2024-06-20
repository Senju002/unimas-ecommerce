<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('search');
        $searchBy = $request->input('searchBy');


        $customer = User::where('role', 'USER')
            ->orderBy('id', 'desc')
            ->select('*');

        if ($query) {
            $customer->where($searchBy, 'like', '%' . $query . '%');
        }
        $customer = $customer->paginate(10);

        // Append the filter values to the pagination links
        $filterValues = [];
        if ($query) {
            $filterValues['search'] = $query;
        }
        if ($searchBy) {
            $filterValues['searchBy'] = $searchBy;
        }
        $customer->appends($filterValues);

        return Inertia::render('Customer/Index',  [
            'data' => $customer,
            'search' => $query,
            'searchBy' => $searchBy
        ]);
    }
}
