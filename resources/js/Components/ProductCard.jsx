import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "@inertiajs/react";

export default function ProductCard({
    name,
    price,
    isDiscount,
    image,
    id = 1,
}) {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(price);

    return (
        <Link
            href={route("product.view", {
                id,
            })}
            method="get"
            data={{
                id: undefined,
            }}
            as="button"
        >
            <Card className="w-48 tablet:h-80 h-96 mx-2 transform  shadow-none duration-100 hover:border-primary hover:border-2 transition-all">
                <CardHeader shadow={false} floated={false} className="h-96">
                    <img
                        src={image}
                        alt="card-image"
                        className="h-full w-full object-contain"
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex flex-col justify-between">
                        <Typography
                            color="blue-gray"
                            className="font-medium text-left tablet:text-sm"
                        >
                            {name}
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="font-medium tablet:text-sm text-left"
                        >
                            {formattedPrice}
                        </Typography>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                        ripple={false}
                        variant="outlined"
                        fullWidth={true}
                        className="text-primary border-primary shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100  "
                    >
                        + Keranjang
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
