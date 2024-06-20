import { Typography } from "@material-tailwind/react";
import React from "react";

export default function PageHeader({ title, description }) {
    return (
        <div className="mb-8 flex items-center justify-between gap-8 border-b-2 border-secondary mx-2 mt-8">
            <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                    <Typography variant="h5" className="text-secondary">
                        {title}
                    </Typography>
                    <Typography className="mt-1 font-normal text-secondary">
                        {description}
                    </Typography>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row "></div>
            </div>
        </div>
    );
}
