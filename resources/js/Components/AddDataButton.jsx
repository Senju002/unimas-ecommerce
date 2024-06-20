import { Link } from "@inertiajs/react";
import { Button } from "@material-tailwind/react";
import React from "react";

export default function AddDataButton({ link, title }) {
    return (
        <div className="w-full mt-8 tablet:mt-2">
            <Link href={route(link)}>
                <Button
                    variant="outlined"
                    ripple={true}
                    className=" dark:bg-background bg-transparent text-secondary dark:text-gray-200 font-bold py-3 px-4 rounded mb-4 w-54 w-full tablet:w-full border-secondary dark:border-transparent tablet:mb-[1em]  "
                >
                    {title}
                </Button>
            </Link>
        </div>
    );
}
