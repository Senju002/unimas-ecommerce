import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "@inertiajs/react";

export default function SearchProductCard({
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
    const truncateName = (str, num) => {
        return str.length > num ? str.slice(0, num) + "..." : str;
    };

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
            <Card className="w-48 mobile:w-40  mobile:h-72 h-96 mx-2 transform  shadow-none duration-100 hover:border-primary hover:border-2 transition-all">
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
                            className="font-medium text-left tablet:text-sm mobile:text-xs text"
                        >
                            <span className="hidden mobile:inline">
                                {truncateName(name, 8)}
                            </span>
                            <span className="mobile:hidden">
                                {" "}
                                {truncateName(name, 14.5)}
                            </span>
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="font-medium tablet:text-sm text-left mobile:text-xs"
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
                        className="text-primary border-primary shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mobile:hidden  "
                    >
                        + Keranjang
                    </Button>
                    <div className="w-full bg-white rounded-md mobile:inline-block hidden border-primary border-2">
                        <IconButton
                            size="sm"
                            className="w-full bg-white shadow-none"
                        >
                            <i className="fas fa-cart-plus text-primary" />
                        </IconButton>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
