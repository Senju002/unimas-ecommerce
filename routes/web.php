<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::fallback(function () {
    return Inertia::render('NotFoundPage');
});

Route::get('/', function () {
    return Inertia::render('Welcome', []);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role:ADMIN'])->name('dashboard');


Route::middleware(['auth', 'verified', 'role:ADMIN'])->group(function () {
    // !Customer
    Route::get('/customer', [CustomerController::class, "index"])->name('customer.index');
    Route::get('/customer/add', function () {
        return Inertia::render('Customer/Store');
    })->name('customer.add');
    Route::post('/customer/store', [CustomerController::class, 'store'])->name('customer.store');
    Route::get('/customer/{id}/edit', [CustomerController::class, 'edit'])->name('customer.edit');
    Route::post('/customer/{id}/update', [CustomerController::class, 'update'])->name('customer.update');
    Route::post('/customer/delete', [CustomerController::class, 'destroy'])->name('customer.delete');


    // !Product Category
    Route::get('/product-category', [ProductCategoryController::class, "index"])->name('productCategory.index');
    Route::get('/product-category/add', function () {
        return Inertia::render('Product Category/Store');
    })->name('product-category.add');
    Route::post('/product-category/store', [ProductCategoryController::class, 'store'])->name('productCategory.store');
    Route::get('/product-category/{id}/edit', [ProductCategoryController::class, 'edit'])->name('productCategory.edit');
    Route::post('/product-category/{id}/update', [ProductCategoryController::class, 'update'])->name('productCategory.update');
    Route::post('/product-category/delete', [ProductCategoryController::class, 'destroy'])->name('productCategory.delete');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
