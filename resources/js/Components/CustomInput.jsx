import { Input, Typography } from "@material-tailwind/react";
import React from "react";
import InputError from "./InputError";

export default function CustomInput({
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
        <div className="flex flex-col gap-3 w-full">
            <Typography className="-mb-2" variant="h6">
                {title}
            </Typography>
            <Input
                label={label}
                size="lg"
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
