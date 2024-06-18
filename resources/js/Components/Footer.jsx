import React from "react";
import { Typography } from "@material-tailwind/react";
import ApplicationLogo from "./ApplicationLogo";

export default function Footer() {
    return (
        <footer className="w-full bg-white p-8 mt-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                <ApplicationLogo className="h-12 w-10 mr-4 " />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-primary focus:text-primary"
                        >
                            Our Product
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-primary focus:text-primary"
                        >
                            Contact Us
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-primary focus:text-primary"
                        >
                            About Us
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-primary" />
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; 2024 PT. UNIMAS INTI JAYA
            </Typography>
        </footer>
    );
}
