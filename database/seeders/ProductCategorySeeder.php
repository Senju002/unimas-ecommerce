<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;



class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            'Electronics', 'Books', 'Furniture', 'Clothing', 'Toys',
            'Sports', 'Health', 'Beauty', 'Grocery', 'Automotive',
            'Jewelry', 'Garden', 'Office Supplies', 'Music', 'Movies',
            'Video Games', 'Baby', 'Pets', 'Tools', 'Home Improvement'
        ];
        foreach ($categories as $category) {
            ProductCategory::create([
                'category_name' => $category,
            ]);
        }
    }
}
