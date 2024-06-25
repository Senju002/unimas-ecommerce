<?php

namespace Database\Seeders;

use App\Models\ContactUs;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactUsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ContactUs::create([
            'address' => 'jln. Gatot Subroto, no.114',
            'phone' => '061-4564448',
            'fax' => '061-4564448',
            'contact_person' => 'Wahyudi Salim (Director)',
            'mobile' => '6281396698899',
            'email' => 'gloriaswalayan@gmail.com',
        ]);
    }
}
