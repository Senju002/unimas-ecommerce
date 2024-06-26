import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function ProductCard({ name, price, isDiscount, image }) {
    return (
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
                        className="font-medium tablet:text-sm"
                    >
                        Rp {price}
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
    );
}
