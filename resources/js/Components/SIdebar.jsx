import { useState } from "react";
import { Link } from "@inertiajs/react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    PowerIcon,
    BuildingOffice2Icon,
    ChevronRightIcon,
    ChevronDownIcon,
    CreditCardIcon,
    DocumentTextIcon,
    HomeIcon,
} from "@heroicons/react/24/outline";
import ApplicationLogo from "./ApplicationLogo";
import {
    BuildingStorefrontIcon,
    GlobeAmericasIcon,
    ShoppingBagIcon,
    UsersIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar({ user, classname }) {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card
            className={`h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-secondary ${classname}`}
        >
            <div className="mb-2 flex items-center flex-col text-textColor gap-4 p-4">
                <Link href={route("dashboard")}>
                    <ApplicationLogo className="bg-white p-3 rounded-xl shadow-[0_1px_30px_#E8E3E7] w-36" />
                </Link>
                <Typography>Selamat Sore, {user}</Typography>
            </div>
            <List>
                <Link href={route("dashboard")}>
                    <ListItem className="hover:text-secondary text-textColor ">
                        <ListItemPrefix>
                            <HomeIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                </Link>
                <Accordion
                    open={open === 3}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 3 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem
                        className="p-0 hover:text-secondary "
                        selected={open === 3}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(3)}
                            className="border-b-0 p-3 group text-textColor group-hover:text-secondary"
                        >
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5 group-hover:text-secondary" />
                            </ListItemPrefix>
                            <Typography className="mr-auto font-normal text-textColor group-hover:text-secondary">
                                Sales Data
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1 ">
                        <List className="p-0 text-textColor ">
                            <Link href={route("dashboard")}>
                                <ListItem className="hover:text-secondary ">
                                    <ListItemPrefix>
                                        <ChevronRightIcon
                                            strokeWidth={3}
                                            className="h-3 w-5"
                                        />
                                    </ListItemPrefix>
                                    Data Produk Pending
                                </ListItem>
                            </Link>
                            <Link href={route("dashboard")}>
                                <ListItem className="hover:text-secondary ">
                                    <ListItemPrefix>
                                        <ChevronRightIcon
                                            strokeWidth={3}
                                            className="h-3 w-5"
                                        />
                                    </ListItemPrefix>
                                    Data Produk Ongoing
                                </ListItem>
                            </Link>
                            <Link href={route("dashboard")}>
                                <ListItem className="hover:text-secondary ">
                                    <ListItemPrefix>
                                        <ChevronRightIcon
                                            strokeWidth={3}
                                            className="h-3 w-5"
                                        />
                                    </ListItemPrefix>
                                    Data Produk Success
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionBody>
                </Accordion>

                <Link href={route("customer.index")}>
                    <ListItem className="hover:text-secondary text-textColor ">
                        <ListItemPrefix>
                            <UsersIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Customer Data
                    </ListItem>
                </Link>

                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 2 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem
                        className="p-0 hover:text-secondary "
                        selected={open === 2}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className="border-b-0 p-3 group text-textColor group-hover:text-secondary"
                        >
                            <ListItemPrefix>
                                <BuildingStorefrontIcon className="h-5 w-5 group-hover:text-secondary" />
                            </ListItemPrefix>
                            <Typography className="mr-auto font-normal text-textColor group-hover:text-secondary">
                                Product Data
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1 ">
                        <List className="p-0 text-textColor ">
                            <Link href={route("dashboard")}>
                                <ListItem className="hover:text-secondary ">
                                    <ListItemPrefix>
                                        <ChevronRightIcon
                                            strokeWidth={3}
                                            className="h-3 w-5"
                                        />
                                    </ListItemPrefix>
                                    Data Produk
                                </ListItem>
                            </Link>
                            <Link href={route("productCategory.index")}>
                                <ListItem className="hover:text-secondary ">
                                    <ListItemPrefix>
                                        <ChevronRightIcon
                                            strokeWidth={3}
                                            className="h-3 w-5"
                                        />
                                    </ListItemPrefix>
                                    Data Kategori Produk
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionBody>
                </Accordion>

                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 1 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem
                        className="p-0 hover:text-secondary "
                        selected={open === 1}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="border-b-0 p-3 group text-textColor group-hover:text-secondary"
                        >
                            <ListItemPrefix>
                                <GlobeAmericasIcon className="h-5 w-5 group-hover:text-secondary" />
                            </ListItemPrefix>
                            <Typography className="mr-auto font-normal text-textColor group-hover:text-secondary">
                                Website Data
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1 ">
                        <List className="p-0 text-textColor ">
                            <Link href={route("dashboard")}>
                                <ListItem className="hover:text-secondary ">
                                    <ListItemPrefix>
                                        <ChevronRightIcon
                                            strokeWidth={3}
                                            className="h-3 w-5"
                                        />
                                    </ListItemPrefix>
                                    Data Banner
                                </ListItem>
                            </Link>

                            <Link href={route("dashboard")}>
                                <ListItem className="hover:text-secondary ">
                                    <ListItemPrefix>
                                        <ChevronRightIcon
                                            strokeWidth={3}
                                            className="h-3 w-5"
                                        />
                                    </ListItemPrefix>
                                    Data Hubungi Kami
                                </ListItem>
                            </Link>
                            <Link href={route("dashboard")}>
                                <ListItem className="hover:text-secondary ">
                                    <ListItemPrefix>
                                        <ChevronRightIcon
                                            strokeWidth={3}
                                            className="h-3 w-5"
                                        />
                                    </ListItemPrefix>
                                    Data Tentang Kami
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionBody>
                </Accordion>

                <hr className="my-2 border-blue-gray-50" />

                <Link href={route("profile.edit")}>
                    <ListItem className="hover:text-secondary text-textColor ">
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                </Link>
                <Link href={route("logout")} method="post" as="button">
                    <ListItem className="hover:text-secondary text-textColor">
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </Link>
            </List>
        </Card>
    );
}
