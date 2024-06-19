import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, Head } from "@inertiajs/react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
    Input,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LoginModal from "@/Components/LoginModal";
import UserIcon from "@/Components/UserIcon";

export default function Guest({ children, auth, title }) {
    const [openNav, setOpenNav] = React.useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal hover:text-primary transition-all duration-300 hover:font-extrabold"
            >
                <a href="#" className="flex items-center">
                    Hubungi Kami
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal hover:text-primary transition-all duration-300 hover:font-extrabold"
            >
                <a href="#" className="flex items-center">
                    Tentang Kami
                </a>
            </Typography>
        </ul>
    );

    return (
        <>
            <Head title={title} />

            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 ">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <div className="flex flex-row items-center justify-center ">
                        <ApplicationLogo className="h-12 w-24 mr-4 " />
                    </div>

                    <div className="relative flex flex-1 gap-2 md:w-max mobile:hidden mx-4">
                        <Input
                            type="search"
                            placeholder="Cari Produk..."
                            className=" !border-primary pl-9 placeholder:text-blue-gray-300 focus:!border-primary w-full"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />
                        <div className="!absolute left-3 top-[13px]">
                            <MagnifyingGlassIcon className="h-4 w-4 text-primary" />
                        </div>
                        <Button
                            size="sm"
                            // color="white"
                            className="!absolute right-1 top-1 rounded bg-primary"
                        >
                            Search
                        </Button>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        {auth ? (
                            <>
                                <Link href={route("login")}>
                                    <IconButton size="lg" variant="text">
                                        <i
                                            className="fa-solid fa-cart-shopping fa-bounce fa-2xl "
                                            style={{ color: "#ec3237" }}
                                        ></i>
                                    </IconButton>
                                </Link>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    {/* <Button
                                        variant="text"
                                        size="sm"
                                        className="hidden lg:inline-block"
                                    >
                                        Keluar
                                    </Button> */}
                                    <UserIcon
                                        photoProfile={auth.photo_profile}
                                    />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="filled"
                                    size="sm"
                                    className="hidden lg:inline-block bg-primary"
                                    onClick={handleOpen}
                                >
                                    Masuk
                                </Button>
                            </>
                        )}
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    {auth ? (
                        <Link href={route("logout")} method="post">
                            <Button
                                variant="outlined"
                                size="sm"
                                fullWidth
                                className="mb-2"
                            >
                                <span>Keluar</span>
                            </Button>
                        </Link>
                    ) : (
                        <>
                            <Button
                                variant="filled"
                                size="sm"
                                fullWidth
                                className="mb-2 bg-primary"
                                onClick={handleOpen}
                            >
                                <span>Masuk</span>
                            </Button>
                        </>
                    )}
                </Collapse>
            </Navbar>
            {/* <div className="mx-auto max-w-screen-md py-12">{children}</div> */}
            <div className=" py-0 bg-bgColor h-full">{children}</div>
            <LoginModal handleOpen={handleOpen} open={open} />
        </>
    );
}
