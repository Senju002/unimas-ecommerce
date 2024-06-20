<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Super Admin',
            'role' => 'ADMIN',
            'email' => 'superadmin@gmail.com',
            'password' => Hash::make('Password123'),
            'email_verified_at' => now()
        ]);

        User::create([
            'name' => 'User',
            'role' => 'USER',
            'email' => 'User@gmail.com',
            'password' => Hash::make('Password123'),
            'email_verified_at' => now()
        ]);
        $faker = Faker::create();


        for ($i = 0; $i < 20; $i++) {
            User::create([
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'role' => 'USER',
                'password' => Hash::make('password'), // Or use bcrypt('password')
                'phone_number' => $faker->phoneNumber,
                'gender' => $faker->randomElement(['Pria', 'Wanita']),
                'date_of_birth' => $faker->date,
                'address' => $faker->address,
                'province' => $faker->state,
                'urban_village' => $faker->citySuffix,
                'sub_district' => $faker->streetName,
                'city' => $faker->city,
                'zipcode' => $faker->postcode,
                'email_verified_at' => now(),
            ]);
        }
    }
}
