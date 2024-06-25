import React from "react";
import { Link } from "@inertiajs/react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
} from "@material-tailwind/react";
// import {
//     HiOutlineUserCircle,
//     HiLogout,
//     HiOutlineDesktopComputer,
// } from "react-icons/hi";

export default function UserIcon({ photoProfile }) {
    return (
        <Menu>
            <MenuHandler>
                <Avatar
                    variant="circular"
                    alt="tania andrew"
                    className="cursor-pointer mr-2 border-secondaryColor hover:opacity-50 transition-all duration-300 h-10 w-10"
                    src={
                        photoProfile
                            ? photoProfile
                            : "https://static.vecteezy.com/system/resources/previews/008/506/404/original/contact-person-red-icon-free-png.png"
                    }
                    withBorder={true}
                />
            </MenuHandler>
            <MenuList className="bg-white text-text_color border-none font-bold">
                <Link href={route("userProfile.edit")} method="get">
                    <MenuItem className="flex items-center gap-2 hover:bg-secondaryColor hover:text-primary">
                        {/* <HiOutlineUserCircle
                            size={25}
                            className="-ml-[0.5rem]"
                        /> */}

                        <Typography variant="small" className="font-medium">
                            Profile Saya
                        </Typography>
                    </MenuItem>
                </Link>

                <hr className="my-2 border-secondaryColor" />
                <Link href={route("logout")} method="post" as="button">
                    <MenuItem className="flex items-center gap-2 hover:bg-secondaryColor hover:text-primary w-48">
                        {/* <HiLogout size={25} className="-ml-[0.5rem]" /> */}

                        <Typography variant="small" className="font-medium">
                            Keluar
                        </Typography>
                    </MenuItem>
                </Link>
            </MenuList>
        </Menu>
    );
}
