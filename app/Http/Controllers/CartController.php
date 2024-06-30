<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{

    public function index()
    {
        /** @var \App\Models\User $user **/
        $user = Auth::user();
        $cartItems = $user->cart()->with('product')->get();
        $cartItems->transform(function ($cartItem) {
            $cartItem->product->image_url = asset($cartItem->product->image);
            return $cartItem;
        });

        return Inertia::render('Cart/Index', [
            'cartItems' => $cartItems,
        ]);
    }

    public function add(Request $request)
    {
        $user = Auth::user();

        // dd($request);

        $existingCartItem = Cart::where('user_id', $user->id)
            ->where('product_id', $request->product_id)
            ->first();

        if ($existingCartItem) {
            // Update quantity if the item already exists in the cart
            $existingCartItem->update([
                'quantity' => $existingCartItem->quantity + ($request->quantity ?? 1),
            ]);
        } else {
            // Create a new cart item if it doesn't exist
            Cart::create([
                'user_id' => $user->id,
                'product_id' => $request->product_id,
                'quantity' => $request->quantity ?? 1,
            ]);
        }

        return redirect()->back()->with('success', 'Product Berhasil Ditambahkan ke Dalam Keranjang');
    }

    public function update(Cart $cart, Request $request)
    {
        // dd($cart);
        $cart->update([
            'quantity' => $request->quantity,
        ]);

        return redirect()->back()->with('success', 'Cart item updated successfully.');
    }

    public function remove(Cart $cart)
    {
        // dd($cart);
        $cart->delete();

        return redirect()->back()->with('success', 'Item removed from cart successfully.');
    }
}
