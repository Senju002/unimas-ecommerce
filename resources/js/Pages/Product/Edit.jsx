import React, { useEffect, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Breadcrumbs, Button, Typography } from "@material-tailwind/react";
import PageHeader from "@/Components/PageHeader";
import CustomInput from "@/Components/CustomInput";
import InputSelect from "@/Components/InputSelect";
import CustomeTextArea from "@/Components/CustomTextArea";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

export default function Store({ auth, productCategoryList, productData }) {
    const { data, setData, post, processing, errors } = useForm({
        product_name: productData.product_name,
        description: productData.description,
        price: productData.price,
        quantity: productData.quantity,
        weight: productData.weight,
        image: productData.image,
        category_id: productData.category_id,
    });

    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        setPreviewImage(productData.image_url);
    }, []);

    // useEffect(() => {
    //     setPreviewImage(`${window.location.origin}/${productData.image}`);
    // }, []);

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

    // const [productCategory, setProductCategory] = useState(
    //     productCategoryList[0]
    // );

    const [productCategory, setProductCategory] = useState(
        productCategoryList.find(
            (item) => item.value === productData.category_id
        ) || productCategoryList[0]
    );

    const dataID = productData.id;

    const handleCategoryChange = (value) => {
        setProductCategory(value);
        setData((prevValues) => ({
            ...prevValues,
            category_id: value.value,
        }));
    };

    // ! Handle submit
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();

        formData.append("product_name", data.product_name);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("quantity", data.quantity);
        formData.append("category_id", data.category_id);
        formData.append("weight", data.weight);
        formData.append("image", data.image);

        post(`/product/${dataID}/update`, formData);
        // for (var pair of formData.entries()) {
        //     console.log(pair[0] + ", " + pair[1]);
        // }
    }

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit Data Produk
                </h2>
            }
        >
            <Head title="Edit  Data Produk" />

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
                            href={route("product.edit", {
                                id: dataID,
                            })}
                            className="opacity-100 text-secondary font-extrabold "
                        >
                            Edit Produk
                        </Link>
                        <a href="#"></a>
                    </Breadcrumbs>
                    <div className="bg-white dark:bg-foreground overflow-hidden  sm:rounded-lg shadow-[0_10px_90px_#6F72FF]">
                        <div className="p-6 text-textprimary dark:text-gray-200">
                            <PageHeader
                                description="Form Untuk Mengedit Data Kategori Produk"
                                title="Edit  Data Produk"
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
                                        {errors.category_id && (
                                            <InputError
                                                message={errors.category_id}
                                                className=""
                                            />
                                        )}
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
                                    <div className="flex flex-col justify-left">
                                        <label
                                            htmlFor="image"
                                            className="bg-transparent dark:bg-background hover:bg-popover dark:hover:bg-popover text-secondary dark:text-gray-200 border border-secondary dark:border-ring font-bold py-2 px-4 rounded cursor-pointer text-base mb-3 w-60 mobile:w-full text-center transition duration-300 ease-in-out	tablet:w-full  "
                                        >
                                            Pilih gambar Produk
                                        </label>
                                        <div>
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
                                        </div>
                                        <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            className="hidden"
                                            onChange={handleThumbnailChange}
                                            // required
                                        />
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
                                            Update Data
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
