import { Typography, Textarea } from "@material-tailwind/react";
import React from "react";
import InputError from "./InputError";

export default function CustomeTextArea({
    title,
    label,
    className,
    id,
    type,
    value,
    onChange,
    error,
    message,
}) {
    return (
        <div className="flex flex-col gap-3 w-full mt-4">
            <Typography className="-mb-2" variant="h6">
                {title}
            </Typography>
            <Textarea
                label={label}
                // size="lg"
                className={className}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                required
                error={error}
            />
            {error && <InputError message={message} className="" />}
        </div>
    );
}
