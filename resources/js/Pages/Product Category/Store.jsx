import React, { useEffect, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    Breadcrumbs,
    Button,
    Option,
    Select,
    Typography,
} from "@material-tailwind/react";
import PageHeader from "@/Components/PageHeader";
import CustomInput from "@/Components/CustomInput";

export default function Store({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        category_name: "",
    });

    // ! Handle submit
    function handleSubmit(e) {
        e.preventDefault();
        post("/product-category/store");
        // console.log(data);
    }

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Tambah Data Kategori Produk
                </h2>
            }
        >
            <Head title="Tambah  Data Kategori Produk" />

            <div className="py-12">
                <div className=" mx-auto sm:px-6 lg:px-8">
                    <Breadcrumbs className="ml-[-0.9rem] w-[29rem] bg-transparent">
                        <Link
                            href={route("dashboard")}
                            className=" text-secondary opacity-80 "
                        >
                            Dashboard
                        </Link>
                        <Link
                            href={route("productCategory.index")}
                            className=" text-secondary opacity-80 "
                        >
                            Data Kategori Produk
                        </Link>
                        <Link
                            href={route("productCategory.add")}
                            className="opacity-100 text-secondary font-extrabold "
                        >
                            Tambah Kategori Produk
                        </Link>
                        <a href="#"></a>
                    </Breadcrumbs>
                    <div className="bg-white dark:bg-foreground overflow-hidden  sm:rounded-lg shadow-[0_10px_90px_#6F72FF]">
                        <div className="p-6 text-textprimary dark:text-gray-200">
                            <PageHeader
                                description="Form Untuk Menambahkan Data Kategori Produk yang Baru"
                                title="Tambah  Data Kategori Produk"
                            />
                            <form onSubmit={handleSubmit}>
                                <div className="flex gap-4 mobile:flex-col">
                                    <CustomInput
                                        title="Nama Kategori Produk"
                                        label="Nama Kategori Produk"
                                        className="w-full"
                                        id="name"
                                        type="text"
                                        value={data.category_name}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                category_name: e.target.value,
                                            })
                                        }
                                        error={errors.category_name}
                                        message={errors.category_name}
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
                                            Tambah Data
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
