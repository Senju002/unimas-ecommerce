import { useState } from "react";
import { Typography, Drawer, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Sidebar from "@/Components/Sidebar";

export default function Authenticated({ auth, children }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col tablet:flex-col">
            <div className="fixed top-0 left-0 w-full z-10 bg-secondary shadow-[0_1px_100px_#c3b0f7]">
                <div className=" flexs flex-row items-center px-4 flex justify-between">
                    <div className="flex justify-between items-center py-2 ">
                        <IconButton
                            variant="text"
                            size="lg"
                            onClick={openDrawer}
                            className="block text-white"
                        >
                            {isDrawerOpen ? (
                                <XMarkIcon className="h-8 w-8 stroke-2" />
                            ) : (
                                <Bars3Icon className="h-8 w-8 stroke-2" />
                            )}
                        </IconButton>
                        <Drawer
                            open={isDrawerOpen}
                            onClose={closeDrawer}
                            className="bg-opacity-0"
                        >
                            <Sidebar user={auth.user.name} classname="" />
                        </Drawer>
                    </div>

                    <Typography className="text-textColor  font-extrabold">
                        Gloria Swalayan | Halaman Admin
                    </Typography>
                    <div className="h-8 w-8 "></div>
                </div>
            </div>
            <main
                className={`pt-8 ${
                    isDrawerOpen
                        ? "filter transition blur-sm duration-100"
                        : "transition duration-1000"
                }`}
            >
                {children}
            </main>
        </div>
    );
}
