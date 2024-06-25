import Guest from "@/Layouts/Guest";
import { usePage } from "@inertiajs/react";
import React from "react";
import ContactImage from "@/../../resources/images/contact.png";
import Footer from "@/Components/Footer";

export default function Index(props) {
    const { contactUsData } = usePage().props;

    const { address, phone, fax, contact_person, mobile, email } =
        contactUsData;
    return (
        <Guest auth={props.auth.user} title={"Home"}>
            {/* <HomeBanner /> */}
            <div className="py-0 tablet:py-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden  sm:rounded-lg ">
                        <div className="h-full flex flex-row items-start mt-20 justify-around bg-gray-100 mobile:mx-4">
                            <div className="w-full tablet:hidden ">
                                <img
                                    src={ContactImage}
                                    alt="404 Error"
                                    className="w-full h-full mb-8"
                                />
                            </div>

                            <div className="w-full ">
                                <h1 className="text-5xl font-bold text-primary mb-8 tablet:text-3xl text-center">
                                    Hubungi Kami
                                </h1>
                                <p className="text-xl text-gray-600 mb-4 tablet:text-lg text-justify">
                                    Silahkan Hubungi Kami Lebih Lanjut Sesuai
                                    Dengan Informasi Di Bawah Ini.
                                </p>
                                <div className="grid grid-cols-1 gap-2">
                                    {/* Contact Information Grid */}
                                    <div className="flex items-center">
                                        <p className="text-lg font-semibold text-gray-700 mr-4 w-32">
                                            Narahubung
                                        </p>
                                        <p className="text-lg text-gray-600">
                                            : {contact_person}
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-lg font-semibold text-gray-700 mr-4 w-32">
                                            Mobile (WA)
                                        </p>
                                        <p className="text-lg text-gray-600">
                                            : {mobile}
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-lg font-semibold text-gray-700 mr-4 w-32">
                                            Email
                                        </p>
                                        <p className="text-lg text-gray-600">
                                            : {email}
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-lg font-semibold text-gray-700 mr-4 w-32">
                                            Nomor Telepon
                                        </p>
                                        <p className="text-lg text-gray-600">
                                            : {phone}
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-lg font-semibold text-gray-700 mr-4 w-32">
                                            Fax
                                        </p>
                                        <p className="text-lg text-gray-600">
                                            : {fax}
                                        </p>
                                    </div>

                                    <div className="flex items-center">
                                        <p className="text-lg font-semibold text-gray-700 mr-4 w-32">
                                            Alamat
                                        </p>
                                        <p className="text-lg text-gray-600">
                                            : {address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Guest>
    );
}
