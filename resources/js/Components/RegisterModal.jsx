import React, { useState, useEffect } from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
} from "@material-tailwind/react";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";

export default function RegisterModal({ setOpenRegister, openRegister }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Dialog
            size="xs"
            open={openRegister}
            handler={() => setOpenRegister((cur) => !cur)}
            className="bg-transparent shadow-none"
        >
            <form onSubmit={submit}>
                <Card className="mx-auto w-full max-w-[24rem] bg-white">
                    <CardBody className="flex flex-col gap-4 text-text_color">
                        <Typography
                            variant="h4"
                            className="text-primary font-extrabold text-center"
                        >
                            Daftar
                        </Typography>
                        <Typography
                            className=" font-normal "
                            variant="paragraph"
                        >
                            Masukan Nama, Email dan Password Anda untuk
                            Mendaftar.
                        </Typography>
                        <Typography className="-mb-2 " variant="h6">
                            Nama
                        </Typography>
                        <Input
                            label="Nama"
                            size="lg"
                            className="text-text_color"
                            id="name"
                            type="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                        <Typography className="-mb-2 " variant="h6">
                            Email
                        </Typography>
                        <Input
                            label="Email"
                            size="lg"
                            className="text-text_color"
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="" />
                        <Typography className="-mb-2 mt-2 " variant="h6">
                            Password
                        </Typography>
                        <Input
                            label="Password"
                            size="lg"
                            className="text-text_color"
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <InputError message={errors.password} className="" />
                        <Typography className="-mb-2 mt-2 " variant="h6">
                            Konfirmasi Password
                        </Typography>
                        <Input
                            label="Confirm Password"
                            size="lg"
                            className="text-text_color"
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className=""
                        />
                    </CardBody>

                    <CardFooter className="pt-0">
                        <Button
                            fullWidth
                            className="border border-secondaryColor bg-primary hover:bg-secondaryColor "
                            type="submit"
                            disabled={processing}
                            loading={processing}
                        >
                            Sign Up
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </Dialog>
    );
}
