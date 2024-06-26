import Footer from "@/Components/Footer";
import ProductCard from "@/Components/ProductCard";
import ProductCarousel from "@/Components/ProductCarousel";
import Guest from "@/Layouts/Guest";
import { Link, usePage } from "@inertiajs/react";
import { Button, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

export default function View(props) {
    const { productData, recentProduct } = usePage().props;
    const [counter, setCounter] = useState(1);
    const maxQuantity = productData.quantity;
    const incrementCounter = () => {
        if (counter < maxQuantity) {
            setCounter(counter + 1);
        }
    };

    const decrementCounter = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    const TotalformattedPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(productData.price * counter);

    const formattedPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(productData.price);

    return (
        <Guest auth={props.auth.user} title={productData.product_name}>
            {/* <HomeBanner /> */}
            <div className="py-0 tablet:py-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden  sm:rounded-lg">
                        <div className="bg-white mt-8 rounded-2xl shadow-xl h-full">
                            <div className="mx-8 py-8  flex flex-row tablet:flex-col gap-8 justify-center items-center">
                                <img
                                    src={productData.image_url}
                                    alt={productData.product_name}
                                    className="object-cover w-80 h-full  rounded-lg  "
                                />
                                <div className="flex flex-col w-96 h-80 max-w-96 overflow-x-auto max-h-80 scrollbar  ">
                                    {" "}
                                    <Typography className="text-4xl font-bold">
                                        {productData.product_name}
                                    </Typography>
                                    <Typography className="text-3xl font-bold mt-2">
                                        {formattedPrice}
                                    </Typography>
                                    <Typography className="text-lg font-regular mt-8 text-justify">
                                        {productData.description}
                                    </Typography>
                                </div>

                                <div className="flex flex-col max-w-96 max-h-80 w-96 h-80   ">
                                    <div className="flex flex-row items-center justify-between mx-4">
                                        <div className="flex items-center justify-between space-x-2 border-2 border-primary rounded-lg w-48">
                                            <Button
                                                onClick={decrementCounter}
                                                className="bg-white  text-primary text-xl  font-bold py-2 px-4 rounded-r shadow-none hover:shadow-none"
                                            >
                                                -
                                            </Button>
                                            <span className="text-lg font-semibold">
                                                {counter}
                                            </span>
                                            <Button
                                                onClick={incrementCounter}
                                                className="bg-white  text-primary text-xl  font-bold py-2 px-4 rounded-r shadow-none hover:shadow-none"
                                            >
                                                +
                                            </Button>
                                        </div>
                                        <Typography className="text-lg font-semibold text-justify">
                                            Total Stock :{" "}
                                            <span className="text-primary font-extrabold">
                                                {productData.quantity}
                                            </span>
                                        </Typography>
                                    </div>
                                    <div className="flex flex-row items-center justify-between mx-4 mt-8">
                                        Subtotal
                                        <Typography className="text-2xl font-semibold text-justify">
                                            {TotalformattedPrice}
                                        </Typography>
                                    </div>
                                    <Link href="#" className="mt-24">
                                        <Button
                                            variant="outlined"
                                            ripple={true}
                                            className="bg-transparent text-white bg-primary font-bold py-3 px-4 rounded-lg mb-4 w-54 w-full tablet:w-full border-primary tablet:mb-[1em]  "
                                        >
                                            KERANJANG
                                        </Button>
                                    </Link>
                                    <Link href="#" className="">
                                        <Button
                                            variant="outlined"
                                            ripple={true}
                                            className="bg-transparent text-primary bg-white font-bold py-3 px-4 rounded-lg mb-4 w-54 w-full tablet:w-full border-primary tablet:mb-[1em]  "
                                        >
                                            Beli Langsung
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white mt-8 rounded-2xl shadow-xl h-[29rem] tablet:h-[25rem]">
                            <div className="w-full flex flex-row  justify-between items-center">
                                <Typography className="text-primary font-extrabold text-xl mobile:text-base px-6 py-4">
                                    Produk Lainnya
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
                                        image={product.image_url}
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
            <Footer />
        </Guest>
    );
}
