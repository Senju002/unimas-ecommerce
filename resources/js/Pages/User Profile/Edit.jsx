import Guest from "@/Layouts/Guest";
import React, { useEffect, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import {
    Breadcrumbs,
    Button,
    Option,
    Select,
    Typography,
} from "@material-tailwind/react";
import PageHeader from "@/Components/PageHeader";
import CustomInput from "@/Components/CustomInput";

export default function Edit(props) {
    const { customerData } = usePage().props;
    const { data, setData, post, patch, processing, errors } = useForm({
        name: customerData.name,
        email: customerData.email,
        phone_number: customerData.phone_number,
        gender: customerData.gender,
        date_of_birth: customerData.date_of_birth,
        address: customerData.address,
        province: customerData.province,
        urban_village: customerData.urban_village,
        sub_district: customerData.sub_district,
        city: customerData.city,
        zipcode: customerData.zipcode,
    });

    const [selectedGender, setSelectedGender] = useState(customerData.gender);
    const handleGenderChange = (e) => {
        setSelectedGender(e);
    };

    useEffect(() => {
        setData((prevValues) => ({
            ...prevValues,
            gender: selectedGender,
        }));
    }, [selectedGender]);

    // ! Handle submit
    function handleSubmit(e) {
        e.preventDefault();
        patch(`/user-profile`);
        // console.log(data);
    }

    const dataID = customerData.id;

    return (
        <Guest auth={props.auth.user} title={"Customer Profile"}>
            {/* <HomeBanner /> */}
            <div className="py-0 tablet:py-0">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden  sm:rounded-lg">
                        <Head title="Edit User Data" />

                        <div className="py-12">
                            <div className=" mx-auto sm:px-6 lg:px-8">
                                <Breadcrumbs className="ml-[-0.9rem] w-[26rem] bg-transparent">
                                    <Link
                                        href="/"
                                        className=" text-primary opacity-80 "
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        href={route("userProfile.edit", {
                                            id: dataID,
                                        })}
                                        className="opacity-100 text-primary font-extrabold"
                                    >
                                        User's Profile
                                    </Link>
                                    <a href="#"></a>
                                </Breadcrumbs>
                                <div className="bg-white dark:bg-foreground overflow-hidden  sm:rounded-lg shadow-xl ">
                                    <div className="p-6 text-textprimary dark:text-gray-200">
                                        <PageHeader
                                            description="Form Untuk Mengedit Data User"
                                            title="Edit User Data"
                                            textColor="text-primary"
                                            borderColor="primary"
                                        />
                                        <form onSubmit={handleSubmit}>
                                            <div className="flex gap-4 mobile:flex-col">
                                                <CustomInput
                                                    title="Nama"
                                                    label="Nama"
                                                    className="w-full "
                                                    id="name"
                                                    type="text"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            name: e.target
                                                                .value,
                                                        })
                                                    }
                                                    error={errors.name}
                                                    message={errors.name}
                                                />
                                                <CustomInput
                                                    title="Email"
                                                    label="Email"
                                                    className="w-full"
                                                    id="email"
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            email: e.target
                                                                .value,
                                                        })
                                                    }
                                                    error={errors.email}
                                                    message={errors.email}
                                                />

                                                <CustomInput
                                                    title="Nomor HP"
                                                    label="Nomor HP"
                                                    className="w-full"
                                                    id="phone_number"
                                                    type="number"
                                                    value={data.phone_number}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            phone_number:
                                                                e.target.value,
                                                        })
                                                    }
                                                    error={errors.phone_number}
                                                    message={
                                                        errors.phone_number
                                                    }
                                                />
                                            </div>
                                            <div className="flex gap-4 mobile:flex-col mt-4">
                                                <div className="flex flex-col gap-3 w-full">
                                                    <Typography
                                                        className="-mb-2"
                                                        variant="h6"
                                                    >
                                                        Jenis Kelamin
                                                    </Typography>
                                                    <Select
                                                        size="lg"
                                                        label="Gender"
                                                        id="gender"
                                                        color="blue"
                                                        value={data.gender}
                                                        onChange={
                                                            handleGenderChange
                                                        }
                                                    >
                                                        <Option value="Pria">
                                                            Pria
                                                        </Option>
                                                        <Option value="Wanita">
                                                            Wanita
                                                        </Option>
                                                    </Select>
                                                </div>
                                                <CustomInput
                                                    title="Tanggal Lahir"
                                                    label="Tanggal Lahir"
                                                    className="w-full"
                                                    id="date_of_birth"
                                                    type="date"
                                                    value={data.date_of_birth}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            date_of_birth:
                                                                e.target.value,
                                                        })
                                                    }
                                                    error={errors.date_of_birth}
                                                    message={
                                                        errors.date_of_birth
                                                    }
                                                />
                                            </div>

                                            <div className="flex gap-4 mobile:flex-col mt-4">
                                                <CustomInput
                                                    title="Alamat"
                                                    label="Alamat"
                                                    className="w-full"
                                                    id="address"
                                                    type="text"
                                                    value={data.address}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            address:
                                                                e.target.value,
                                                        })
                                                    }
                                                    error={errors.address}
                                                    message={errors.address}
                                                />
                                            </div>

                                            <div className="flex gap-4 mobile:flex-col mt-4 tablet:flex-col">
                                                <CustomInput
                                                    title="Provinsi"
                                                    label="Provinsi"
                                                    className="w-full"
                                                    id="province"
                                                    type="text"
                                                    value={data.province}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            province:
                                                                e.target.value,
                                                        })
                                                    }
                                                    error={errors.province}
                                                    message={errors.province}
                                                />

                                                <CustomInput
                                                    title="Kelurahan"
                                                    label="Kelurahan"
                                                    className="w-full"
                                                    id="urban_village"
                                                    type="text"
                                                    value={data.urban_village}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            urban_village:
                                                                e.target.value,
                                                        })
                                                    }
                                                    error={errors.urban_village}
                                                    message={
                                                        errors.urban_village
                                                    }
                                                />

                                                <CustomInput
                                                    title="Kecamatan"
                                                    label="Kecamatan"
                                                    className="w-full"
                                                    id="sub_district"
                                                    type="text"
                                                    value={data.sub_district}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            sub_district:
                                                                e.target.value,
                                                        })
                                                    }
                                                    error={errors.sub_district}
                                                    message={
                                                        errors.sub_district
                                                    }
                                                />

                                                <CustomInput
                                                    title="Kota"
                                                    label="Kota"
                                                    className="w-full"
                                                    id="city"
                                                    type="text"
                                                    value={data.city}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            city: e.target
                                                                .value,
                                                        })
                                                    }
                                                    error={errors.city}
                                                    message={errors.city}
                                                />

                                                <CustomInput
                                                    title="Kode Pos"
                                                    label="Kode Pos"
                                                    className="w-full"
                                                    id="zipcode"
                                                    type="text"
                                                    value={data.zipcode}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            zipcode:
                                                                e.target.value,
                                                        })
                                                    }
                                                    error={errors.zipcode}
                                                    message={errors.zipcode}
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
                    </div>
                </div>
            </div>
        </Guest>
    );
}
