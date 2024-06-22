<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

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

    public function store(Request $request)
    {
        // Validate the incoming data

        // dd($request);
        $validatedData = $request->validate([
            'name' => 'required|string|max:100',
            'phone_number' => 'required|string|regex:/^[0-9]{10,15}$/',
            'email' => 'required|email|max:255|unique:users,email',
            'gender' => 'required|in:Pria,Wanita',
            'date_of_birth' => 'required|date',
            'address' => 'required|string|max:255',
            'province' => 'required|string|max:255',
            'urban_village' => 'required|string|max:255',
            'sub_district' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'zipcode' => 'required|string|max:10',
        ]);


        $validatedData['email_verified_at'] = Carbon::today();
        $validatedData['role'] = 'USER';
        $validatedData['password'] = Hash::make('Password123');

        // Store the validated data in the apartments table
        $customer = User::create($validatedData);

        return redirect('/customer')->with('success', 'Data Customer Baru Berhasil Di Buat!');
    }

    public function edit(User $customer, Request $request)
    {
        return Inertia::render("Customer/Edit", [
            "customerData" => $customer->find($request->id)
        ]);
    }

    public function update(Request $request, $id)
    {
        // Find the apartment by its ID
        $customer = User::findOrFail($id);

        // Validate the incoming data
        $validatedData = $request->validate([
            'name' => 'required|string|max:100',
            'phone_number' => 'required|string|regex:/^[0-9]{10,15}$/',
            'email' => [
                'required',
                'email',
                'max:255',
                Rule::unique('users')->ignore($customer->id), // Use the Rule facade to ignore the current user's ID
            ],
            'gender' => 'required|in:Pria,Wanita',
            'date_of_birth' => 'required|date',
            'address' => 'required|string|max:255',
            'province' => 'required|string|max:255',
            'urban_village' => 'required|string|max:255',
            'sub_district' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'zipcode' => 'required|string|max:10',
        ]);

        $customer->update($validatedData);

        return redirect('/customer')->with('success', 'Data Customer Berhasil Di Update!!');
    }
}
