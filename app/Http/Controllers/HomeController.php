<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {

        $weeklyProduct = Product::inRandomOrder()->take(10)->get();
        $bestProduct = Product::inRandomOrder()->take(10)->get();
        $recentProduct = Product::orderBy('id', 'desc')->take(10)->get();
        $randomProduct = Product::inRandomOrder()->take(10)->get();

        return Inertia::render("Welcome", [
            "weeklyProduct" => $weeklyProduct,
            'bestProduct' => $bestProduct,
            "recentProduct" => $recentProduct,
            "randomProduct" => $randomProduct,
        ]);
    }
}
