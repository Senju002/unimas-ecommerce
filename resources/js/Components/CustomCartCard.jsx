import {
    Button,
    IconButton,
    Tooltip,
    Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { router } from "@inertiajs/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CustomCartCard({
    imageUrl,
    productName,
    stockQty,
    price,
    productToBuyQty,
    cartId = 1,
}) {
    function formatPrice(price) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(price);
    }

    const [counter, setCounter] = useState(productToBuyQty);
    const maxQuantity = stockQty;
    const incrementCounter = () => {
        setCounter((prevCounter) => {
            const newCounter =
                prevCounter < maxQuantity ? prevCounter + 1 : prevCounter;
            // console.log(cartId + ":" + newCounter);
            router.post(`/cart/${cartId}/update`, {
                quantity: newCounter,
            });
            return newCounter;
        });
    };

    const decrementCounter = () => {
        setCounter((prevCounter) => {
            const newCounter = prevCounter > 1 ? prevCounter - 1 : prevCounter;
            // console.log(cartId + ":" + newCounter);
            router.post(`/cart/${cartId}/update`, {
                quantity: newCounter,
            });
            return newCounter;
        });
    };

    const handleDelete = (id) => {
        toast.info(
            <div className="p-4 text-center">
                <p>
                    Apakah Anda ingin Menghapus Produk Ini dari Keranjang Anda?{" "}
                </p>
                <div className="mt-4 flex justify-end">
                    <button
                        className="px-4 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-700"
                        onClick={() => deleteData(id)}
                    >
                        Yes
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                        onClick={() => toast.dismiss()}
                    >
                        No
                    </button>
                </div>
            </div>,
            {
                icon: false,
                closeOnClick: false,
                draggable: false,
                closeButton: false,
                autoClose: false,
                hideProgressBar: true,
                // position: toast.POSITION.TOP_CENTER,
                position: "top-center",
            }
        );
    };

    const deleteData = (id) => {
        // Send the delete request here
        // ...
        router.post(`/cart/${cartId}/remove`, { id });
        toast.dismiss();
    };

    return (
        <div className="bg-white mt-2 rounded-2xl shadow-xl h-full">
            <div className="flex flex-row gap-2 justify-between mx-4 py-4">
                <div className="flex flex-row gap-4">
                    <img
                        src={imageUrl}
                        alt={productName}
                        className="object-cover w-32 h-full mobile:w-24  rounded-lg  "
                    />
                    <div className="flex flex-col ">
                        <Typography className="text-primary font-extrabold">
                            Stok : {stockQty}
                        </Typography>
                        <Typography className="font-extrabold text-xl">
                            {productName}
                        </Typography>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <Typography className="font-extrabold text-xl text-right">
                        {formatPrice(price)}
                    </Typography>

                    <div className="flex flex-row items-center gap-10">
                        <IconButton
                            variant="outlined"
                            color="red"
                            onClick={() => handleDelete(cartId)}
                        >
                            <TrashIcon className="h-4 w-4" />
                        </IconButton>
                        <div className="flex items-center justify-between space-x-2 border-2 border-primary rounded-lg w-36 mobile:w-32">
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
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
