import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Breadcrumbs, Button, Typography } from "@material-tailwind/react";
import PageHeader from "@/Components/PageHeader";
import CustomInput from "@/Components/CustomInput";
import InputSelect from "@/Components/InputSelect";
import CustomeTextArea from "@/Components/CustomTextArea";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

export default function Store({ auth, productCategoryList }) {
    const { data, setData, post, processing, errors } = useForm({
        product_name: "",
        description: "",
        price: "",
        quantity: "",
        weight: "",
        image: null,
    });

    const [previewImage, setPreviewImage] = useState(null);

    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        setData((data) => ({
            ...data,
            image: file,
        }));

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const [productCategory, setProductCategory] = useState(
        productCategoryList[0]
    );

    const handleCategoryChange = (value) => {
        setProductCategory(value);
        setData((prevValues) => ({
            ...prevValues,
            category_id: value.value,
        }));
    };

    console.log(productCategoryList);

    // ! Handle submit
    function handleSubmit(e) {
        e.preventDefault();
        post("/product/store");
        // console.log(data);
    }

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Tambah Data Produk
                </h2>
            }
        >
            <Head title="Tambah  Data Produk" />

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
                            href={route("product.index")}
                            className=" text-secondary opacity-80 "
                        >
                            Data Produk
                        </Link>
                        <Link
                            href={route("product.add")}
                            className="opacity-100 text-secondary font-extrabold "
                        >
                            Tambah Produk
                        </Link>
                        <a href="#"></a>
                    </Breadcrumbs>
                    <div className="bg-white dark:bg-foreground overflow-hidden  sm:rounded-lg shadow-[0_10px_90px_#6F72FF]">
                        <div className="p-6 text-textprimary dark:text-gray-200">
                            <PageHeader
                                description="Form Untuk Menambahkan Data Kategori Produk yang Baru"
                                title="Tambah  Data Produk"
                            />
                            <form onSubmit={handleSubmit}>
                                <div className="flex gap-4 mobile:flex-col">
                                    <CustomInput
                                        title="Nama Produk"
                                        label="Nama Produk"
                                        className="w-full"
                                        id="product_name"
                                        type="text"
                                        value={data.product_name}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                product_name: e.target.value,
                                            })
                                        }
                                        error={errors.product_name}
                                        message={errors.product_name}
                                    />
                                    <div className="flex flex-col gap-3 w-full">
                                        <Typography
                                            className="-mb-2"
                                            variant="h6"
                                        >
                                            Pilih Kategori Produk
                                        </Typography>
                                        <InputSelect
                                            value={productCategory}
                                            onChange={handleCategoryChange}
                                            options={productCategoryList}
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 mobile:flex-col mt-4">
                                    <CustomInput
                                        title="Harga"
                                        label="Harga"
                                        className="w-full"
                                        id="price"
                                        type="text"
                                        value={data.price}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                price: e.target.value,
                                            })
                                        }
                                        error={errors.price}
                                        message={errors.price}
                                    />
                                    <CustomInput
                                        title="Berat (Kg)"
                                        label="Berat (Kg)"
                                        className="w-full"
                                        id="weight"
                                        type="text"
                                        value={data.weight}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                weight: e.target.value,
                                            })
                                        }
                                        error={errors.weight}
                                        message={errors.weight}
                                    />
                                    <CustomInput
                                        title="Stok"
                                        label="Stok"
                                        className="w-full"
                                        id="quantity"
                                        type="text"
                                        value={data.quantity}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                quantity: e.target.value,
                                            })
                                        }
                                        error={errors.quantity}
                                        message={errors.quantity}
                                    />
                                </div>

                                <CustomeTextArea
                                    title="Deskripsi Produk"
                                    label="Deskripsi Produk"
                                    className="w-full h-48"
                                    id="description"
                                    type="text"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            description: e.target.value,
                                        })
                                    }
                                    error={errors.description}
                                    message={errors.description}
                                />

                                {/* Image */}
                                <div className="mt-8">
                                    <div className="flex items-center justify-left">
                                        <div className="flex flex-col w-full">
                                            <InputLabel htmlFor="source">
                                                Pilih Gambar produk:
                                            </InputLabel>
                                            <InputLabel>
                                                <span className="text-red-400">
                                                    (Pastikan Dimensi Image yang
                                                    Anda Upload Memiliki Ukuran
                                                    Maksimum 5MB)
                                                </span>
                                            </InputLabel>
                                            <InputLabel>
                                                <span className="text-red-400">
                                                    (Preview Image di Bawah ini,
                                                    Akan menjadi Tampilan Final
                                                    di Website Pembelian Produk
                                                    dengan Resolusi 1:1)
                                                </span>
                                            </InputLabel>
                                            <input
                                                type="file"
                                                id="image"
                                                name="image"
                                                className=" border-gray-600 dark:border-ring block w-full text-sm text-slate-100 rounded-md
                                                file:mr-4 file:py-2 file:px-4
                                                file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-secondary dark:file:bg-background file:text-white
                                                hover:file:bg-secondary/60 dark:hover:file:bg-popover  cursor-pointer mt-4 mb-4 border hover:border-ring transition duration-300 ease-in-out"
                                                onChange={handleThumbnailChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    {previewImage && (
                                        <div className="mt-2 border-dashed border-2 border-gray-400 p-2">
                                            <img
                                                src={previewImage}
                                                alt="Thumbnail Preview"
                                                className="h-64 w-64 object-cover mx-auto"
                                            />
                                        </div>
                                    )}
                                    {errors.image && (
                                        <InputError message={errors.image} />
                                    )}
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
