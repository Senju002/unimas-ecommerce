<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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
    }
}
