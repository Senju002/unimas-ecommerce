import { Button } from "@material-tailwind/react";
import React from "react";

export default function SearchButton() {
    return (
        <Button
            variant="filled"
            ripple={true}
            className=" bg-secondary font-bold py-3 px-4 rounded mb-4 w-full tablet:mt-5 mt-8 "
            type="submit"
            Search
        >
            Cari
        </Button>
    );
}
