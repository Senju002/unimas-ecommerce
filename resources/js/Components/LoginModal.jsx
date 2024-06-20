// resources/js/components/Auth/LoginModal.jsx

import React, { useState } from "react";
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
import RegisterModal from "./RegisterModal";

export default function LoginModal({ open, handleOpen }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const [openRegister, setOpenRegister] = useState(false);
    // const handleOpenRegister = () => openRegister((cur) => !cur);
    const handleOpenRegister = (e) => {
        e.preventDefault();
        setOpenRegister((cur) => !cur);
    };

    const storeLogin = (e) => {
        e.preventDefault();

        post(route("login"), {
            onSuccess: () => {
                handleOpen();
                // You can perform additional actions after successful login if needed
            },
        });
    };

    return (
        <>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <form>
                    <Card className="mx-auto w-full max-w-[24rem] bg-white">
                        <CardBody className="flex flex-col gap-4 text-text_color">
                            <Typography
                                variant="h4"
                                className="text-primary font-extrabold text-center"
                            >
                                Masuk
                            </Typography>
                            <Typography
                                className="font-normal"
                                variant="paragraph"
                            >
                                Masukkan Email dan Password Kamu !
                            </Typography>
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
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                                error={errors.email}
                            />
                            <Typography className="-mb-2 mt-2 " variant="h6">
                                Password
                            </Typography>
                            <Input
                                label="Password"
                                size="lg"
                                className="text-text_color"
                                type="password"
                                id="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                error={errors.password}
                            />
                            <InputError message={errors.email} className="" />
                        </CardBody>

                        <CardFooter className="pt-0">
                            <Button
                                fullWidth
                                className="border border-secondaryColor bg-primary hover:bg-secondaryColor "
                                type="submit"
                                disabled={processing}
                                onClick={storeLogin}
                            >
                                Sign In
                            </Button>
                            <Typography
                                variant="small"
                                className="mt-4 flex justify-center text-text_color"
                            >
                                Belum punya akun?
                                <Typography
                                    as="button"
                                    // href="/register"
                                    variant="small"
                                    className="ml-1 font-bold text-secondary"
                                    onClick={handleOpenRegister}
                                >
                                    Daftar
                                </Typography>
                            </Typography>
                        </CardFooter>
                    </Card>
                </form>
            </Dialog>
            <RegisterModal
                openRegister={openRegister}
                setOpenRegister={setOpenRegister}
            />
        </>
    );
}
