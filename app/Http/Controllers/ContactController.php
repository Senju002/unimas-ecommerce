<?php

namespace App\Http\Controllers;

use App\Models\ContactUs;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function edit(ContactUs $contactUs, Request $request)
    {
        return Inertia::render("Contact Us/Edit", [
            "contactUsData" => $contactUs->find($request->id)
        ]);
    }

    public function update(Request $request, $id)
    {
        // Validate the request data
        $request->validate([
            'address' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20|regex:/^061[\d-]+$/',
            'fax' => 'nullable|string|max:20|regex:/^061[\d-]+$/',
            'contact_person' => 'required|string|max:255',
            'mobile' => 'required|string|regex:/^62\d+$/',
            'email' => 'required|email|max:255',
        ], [
            'mobile.regex' => 'The mobile number must start with 62 and contain only digits.',
            'phone.regex' => 'The phone number must start with 061 and can only contain numbers and "-" sign.',
            'fax.regex' => 'The fax number must start with 061 and can only contain numbers and "-" sign.'
        ]);

        // Find the contact record
        $contact = ContactUs::findOrFail($id);

        // Update the contact record with validated data
        $contact->update($request->all());

        // Redirect back with success message
        return redirect()->back()->with('success', 'Data Hubungi Kami Berhasil DI Update');
    }
}
