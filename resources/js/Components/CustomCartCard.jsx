import { Button, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

export default function CustomCartCard({
    imageUrl,
    productName,
    stockQty,
    price,
    productToBuyQty,
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
        if (counter < maxQuantity) {
            setCounter(counter + 1);
        }
    };

    const decrementCounter = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
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

                    <div className="flex items-center justify-between space-x-2 border-2 border-primary rounded-lg w-36 mobile:w-32">
                        <Button
                            onClick={decrementCounter}
                            className="bg-white  text-primary text-xl  font-bold py-2 px-4 rounded-r shadow-none hover:shadow-none"
                        >
                            -
                        </Button>
                        <span className="text-lg font-semibold">{counter}</span>
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
    );
}
