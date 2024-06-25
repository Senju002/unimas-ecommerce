<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;


class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 20; $i++) {
            DB::table('products')->insert([
                'product_name' => $faker->word(),
                'description' => $faker->paragraph,
                'price' => 12000,
                'quantity' => $faker->numberBetween(1, 100),
                'category_id' => $faker->numberBetween(1, 10), // Make sure this category exists or adjust accordingly
                'weight' => $faker->randomFloat(2, 0.1, 10),
                'image' => $faker->imageUrl(),
                // 'image' => 'https://assets.klikindomaret.com/products/10008819/10008819_thumb.jpg?Version.20.01.1.01',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
