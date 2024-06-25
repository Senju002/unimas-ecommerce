<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserProfileController extends Controller
{
    public function edit(User $customer, Request $request)
    {
        $id = Auth::user()->id;

        return Inertia::render("User Profile/Edit", [
            "customerData" => $customer->find($id)
        ]);
    }

    public function update(Request $request)
    {
        // Find the apartment by its ID
        $id = Auth::user()->id;
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

        return redirect('/')->with('success', 'Data User Berhasil Di Update!!');
    }
}
