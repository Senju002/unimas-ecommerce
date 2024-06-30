<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserProfileController;
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
    })->name('productCategory.add');
    Route::post('/product-category/store', [ProductCategoryController::class, 'store'])->name('productCategory.store');
    Route::get('/product-category/{id}/edit', [ProductCategoryController::class, 'edit'])->name('productCategory.edit');
    Route::post('/product-category/{id}/update', [ProductCategoryController::class, 'update'])->name('productCategory.update');
    Route::post('/product-category/delete', [ProductCategoryController::class, 'destroy'])->name('productCategory.delete');

    // !Product
    Route::get('/product', [ProductController::class, "index"])->name('product.index');
    Route::get('/product/add', [ProductController::class, 'add'])->name('product.add');
    Route::post('/product/store', [ProductController::class, 'store'])->name('product.store');
    Route::get('/product/{id}/edit', [ProductController::class, 'edit'])->name('product.edit');
    Route::post('/product/{id}/update', [ProductController::class, 'update'])->name('product.update');
    Route::post('/product/delete', [ProductController::class, 'destroy'])->name('product.delete');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // !Contact Us
    Route::get('/contact-us/{id}/edit', [ContactController::class, 'edit'])->name('contact.edit');
    Route::post('/contact-us/{id}/update', [ContactController::class, 'update'])->name('contact.update');
});


// ? GUEST ACCOUNT
// !Contact Us
Route::get('/contact-us', [ContactController::class, "index"])->name('contact.index');

// ! Not Found 
Route::fallback(function () {
    return Inertia::render('NotFoundPage');
});

// ! HomePage
Route::get('/', [HomeController::class, "index"])->name('home.index');
Route::get('/product/{id}/view', [ProductController::class, 'view'])->name('product.view');
Route::get('/product/search', [ProductController::class, "search"])->name('product.search');



Route::middleware('auth', 'role:USER')->group(function () {
    // !User Profile
    Route::get('/user-profile', [UserProfileController::class, 'edit'])->name('userProfile.edit');
    Route::patch('/user-profile', [UserProfileController::class, 'update'])->name('userProfile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // !Cart Logic
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart/add', [CartController::class, 'add'])->name('cart.add');
    Route::post('/cart/{cart}/update', [CartController::class, 'update'])->name('cart.update');
    Route::post('/cart/remove/{cart}', [CartController::class, 'remove'])->name('cart.remove');
});

require __DIR__ . '/auth.php';
