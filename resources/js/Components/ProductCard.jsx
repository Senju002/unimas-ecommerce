import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Spinner,
} from "@material-tailwind/react";
import { Link, router } from "@inertiajs/react";
import LoginModal from "./LoginModal";

export default function ProductCard({
    name,
    price,
    isDiscount,
    image,
    id = 1,
    user,
}) {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(price);

    const [loading, setLoading] = useState(false); // Add loading state

    const handleClick = (e) => {
        e.preventDefault(); // Prevent the default link behavior
        setLoading(true); // Start loading
        if (user) {
            setTimeout(() => {
                router.post(route("cart.add"), {
                    user_id: user.id,
                    product_id: id,
                    quantity: 1,
                });

                setLoading(false);
            }, 2000);
        } else {
            handleOpen();
            setLoading(false);
        }
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
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
                            alt={name}
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
                            onClick={handleClick}
                            prevent
                            disabled={loading}
                            loading={loading}
                        >
                            {loading ? "Keranjang" : "+ Keranjang"}
                        </Button>
                    </CardFooter>
                </Card>
            </Link>
            <LoginModal handleOpen={handleOpen} open={open} />
        </>
    );
}
