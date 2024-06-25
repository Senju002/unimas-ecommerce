import React, { useEffect } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Breadcrumbs, Button } from "@material-tailwind/react";
import PageHeader from "@/Components/PageHeader";
import CustomInput from "@/Components/CustomInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Edit({ auth, contactUsData }) {
    const { data, setData, post, processing, errors } = useForm({
        contact_person: contactUsData.contact_person,
        address: contactUsData.address,
        phone: contactUsData.phone,
        fax: contactUsData.fax,
        mobile: contactUsData.mobile,
        email: contactUsData.email,
    });

    const { flash } = usePage().props;

    const dataID = contactUsData.id;

    // ! Handle submit
    function handleSubmit(e) {
        e.preventDefault();
        post(`/contact-us/${dataID}/update`);
        // console.log(data);
    }

    useEffect(() => {
        if (flash.message) {
            toast.success(flash.message);
        }
    }, [flash.message]);

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit Data Hubungi Kami
                </h2>
            }
        >
            <Head title="Edit  Data Hubungi Kami" />

            <div className="py-12">
                <div className=" mx-auto sm:px-6 lg:px-8">
                    <Breadcrumbs className="ml-[-0.9rem] w-[29rem] bg-transparent">
                        <Link
                            href={route("dashboard")}
                            className=" text-secondary opacity-80 "
                        >
                            Dashboard
                        </Link>
                        {/* <Link
                            href={route("productCategory.index")}
                            className=" text-secondary opacity-80 "
                        >
                            Data Hubungi Kami
                        </Link> */}
                        <Link
                            href={route("contact.edit", {
                                id: dataID,
                            })}
                            className="opacity-100 text-secondary font-extrabold "
                        >
                            Edit Data Hubungi Kami
                        </Link>
                        <a href="#"></a>
                    </Breadcrumbs>
                    <div className="bg-white dark:bg-foreground overflow-hidden  sm:rounded-lg shadow-[0_10px_90px_#6F72FF]">
                        <div className="p-6 text-textprimary dark:text-gray-200">
                            <PageHeader
                                description="Form Untuk Mengedit Data Hubungi Kami (Contact Us) pada Website"
                                title="Edit Data Hubungi Kami"
                            />
                            <form onSubmit={handleSubmit}>
                                <div className="flex gap-4 mobile:flex-col">
                                    <CustomInput
                                        title="Nama Narahubung"
                                        label="Nama Narahubung"
                                        className="w-full"
                                        id="contact_person"
                                        type="text"
                                        value={data.contact_person}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                contact_person: e.target.value,
                                            })
                                        }
                                        error={errors.contact_person}
                                        message={errors.contact_person}
                                    />

                                    <CustomInput
                                        title="No HP Narahubung"
                                        label="No HP Narahubung"
                                        className="w-full"
                                        id="mobile"
                                        type="number"
                                        value={data.mobile}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                mobile: e.target.value,
                                            })
                                        }
                                        error={errors.mobile}
                                        message={errors.mobile}
                                    />
                                </div>

                                <div className="flex gap-4 mobile:flex-col mt-4">
                                    <CustomInput
                                        title="Email Swalayan"
                                        label="Email Swalayan"
                                        className="w-full"
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                email: e.target.value,
                                            })
                                        }
                                        error={errors.email}
                                        message={errors.email}
                                    />

                                    <CustomInput
                                        title="Fax Swalayan"
                                        label="Fax Swalayan"
                                        className="w-full"
                                        id="fax"
                                        type="text"
                                        value={data.fax}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                fax: e.target.value,
                                            })
                                        }
                                        error={errors.fax}
                                        message={errors.fax}
                                    />

                                    <CustomInput
                                        title="Nomor Telepon Swalayan"
                                        label="Nomor Telepon Swalayan"
                                        className="w-full"
                                        id="phone"
                                        type="text"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                phone: e.target.value,
                                            })
                                        }
                                        error={errors.phone}
                                        message={errors.phone}
                                    />
                                </div>

                                <div className="mt-4">
                                    {" "}
                                    <CustomInput
                                        title="Alamat Swalayan"
                                        label="Alamat Swalayan"
                                        className="w-full"
                                        id="address"
                                        type="text"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                address: e.target.value,
                                            })
                                        }
                                        error={errors.address}
                                        message={errors.address}
                                    />
                                </div>

                                <div className="flex flex-row mt-8">
                                    <div className="flex w-max gap-4 ml-0">
                                        <Button
                                            variant="fill"
                                            onClick={handleSubmit}
                                            className="bg-green-500"
                                            loading={processing}
                                        >
                                            Update Data
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </AuthenticatedLayout>
    );
}
