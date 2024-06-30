import CustomCartCard from "@/Components/CustomCartCard";
import Footer from "@/Components/Footer";
import Guest from "@/Layouts/Guest";
import { usePage } from "@inertiajs/react";
import { Button, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

export default function Index(props) {
    const { cartItems } = usePage().props;

    return (
        <Guest auth={props.auth.user} title={"Keranjang"}>
            {/* <HomeBanner /> */}
            <div className="py-0 tablet:py-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden  sm:rounded-lg">
                        {cartItems.length === 0 ? (
                            <Typography className="text-center mt-8 text-4xl mb-8 text-primary font-extrabold">
                                Tidak Ada Barang di Keranjang
                            </Typography>
                        ) : (
                            cartItems.map((cart) => (
                                <CustomCartCard
                                    key={cart.id}
                                    imageUrl={cart.product.image_url}
                                    price={cart.product.price}
                                    productName={cart.product.product_name}
                                    stockQty={cart.product.quantity}
                                    productToBuyQty={cart.quantity}
                                    cartId={cart.id}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </Guest>
    );
}
