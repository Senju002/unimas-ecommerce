import React, { useEffect } from "react";
import Guest from "@/Layouts/Guest";
import { Typography } from "@material-tailwind/react";

import "react-multi-carousel/lib/styles.css";
import CustomCarousel from "@/Components/CustomCarousel";
import ProductCard from "@/Components/ProductCard";
import ProductCarousel from "@/Components/ProductCarousel";
import Footer from "@/Components/Footer";
import { usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Welcome(props) {
    const { flash, weeklyProduct, bestProduct, recentProduct, randomProduct } =
        usePage().props;
    useEffect(() => {
        if (flash.message) {
            toast.success(flash.message);
        }
    }, [flash.message]);

    return (
        <Guest auth={props.auth.user} title={"Home"}>
            {/* <HomeBanner /> */}
            <div className="py-0 tablet:py-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden  sm:rounded-lg">
                        <CustomCarousel />

                        {/* Promosi Minggu ini */}

                        <div className="bg-white mt-8 rounded-2xl shadow-xl h-[29rem] tablet:h-[25rem]">
                            <div className="w-full flex flex-row  justify-between items-center">
                                <Typography className="text-primary font-extrabold text-xl mobile:text-base px-6 py-4">
                                    Promosi Minggu Ini
                                </Typography>
                                <Typography className="text-primary font-extrabold text-lg px-6 py-4 cursor-pointer hover:text-primary/65 transition-all duration-300 mobile:text-base">
                                    Lihat Semua
                                </Typography>
                            </div>
                            <ProductCarousel>
                                {weeklyProduct.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        image={product.image}
                                        name={product.product_name}
                                        price={parseFloat(
                                            product.price
                                        ).toFixed(2)} // Ensure price is formatted as needed
                                    />
                                ))}
                            </ProductCarousel>
                        </div>

                        {/* Produk Terlaris */}

                        <div className="bg-white mt-8 rounded-2xl shadow-xl h-[29rem] tablet:h-[25rem]">
                            <div className="w-full flex flex-row  justify-between items-center">
                                <Typography className="text-primary font-extrabold text-xl mobile:text-base px-6 py-4">
                                    Produk Terlaris
                                </Typography>
                                <Typography className="text-primary font-extrabold text-lg px-6 py-4 cursor-pointer hover:text-primary/65 transition-all duration-300 mobile:text-base">
                                    Lihat Semua
                                </Typography>
                            </div>
                            <ProductCarousel>
                                {bestProduct.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        image={product.image}
                                        name={product.product_name}
                                        price={parseFloat(
                                            product.price
                                        ).toFixed(2)} // Ensure price is formatted as needed
                                    />
                                ))}
                            </ProductCarousel>
                        </div>

                        {/* Produk Terbaru */}

                        <div className="bg-white mt-8 rounded-2xl shadow-xl h-[29rem] tablet:h-[25rem]">
                            <div className="w-full flex flex-row  justify-between items-center">
                                <Typography className="text-primary font-extrabold text-xl mobile:text-base px-6 py-4">
                                    Produk Terbaru
                                </Typography>
                                <Typography className="text-primary font-extrabold text-lg px-6 py-4 cursor-pointer hover:text-primary/65 transition-all duration-300 mobile:text-base">
                                    Lihat Semua
                                </Typography>
                            </div>
                            <ProductCarousel>
                                {recentProduct.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        image={product.image}
                                        name={product.product_name}
                                        price={parseFloat(
                                            product.price
                                        ).toFixed(2)} // Ensure price is formatted as needed
                                    />
                                ))}
                            </ProductCarousel>
                        </div>

                        {/* Produk Rekomendasi */}

                        <div className="bg-white mt-8 rounded-2xl shadow-xl h-[29rem] tablet:h-[25rem]">
                            <div className="w-full flex flex-row  justify-between items-center">
                                <Typography className="text-primary font-extrabold text-xl mobile:text-base px-6 py-4">
                                    Produk Rekomendasi
                                </Typography>
                                <Typography className="text-primary font-extrabold text-lg px-6 py-4 cursor-pointer hover:text-primary/65 transition-all duration-300 mobile:text-base">
                                    Lihat Semua
                                </Typography>
                            </div>
                            <ProductCarousel>
                                {randomProduct.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        image={product.image}
                                        name={product.product_name}
                                        price={parseFloat(
                                            product.price
                                        ).toFixed(2)} // Ensure price is formatted as needed
                                    />
                                ))}
                            </ProductCarousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
            <ToastContainer />
        </Guest>
    );
}
