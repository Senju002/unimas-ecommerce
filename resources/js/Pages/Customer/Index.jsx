import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { router, usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Breadcrumbs, IconButton, Tooltip } from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import AddDataButton from "@/Components/AddDataButton";
import SearchButton from "@/Components/SearchButton";
import SearchInput from "@/Components/SearchInput";
import PageHeader from "@/Components/PageHeader";

export default function Index(props) {
    const [search, setSearch] = useState("");
    const [searchBy, setSearchBy] = useState("name");
    const [data, setData] = useState(props.data.data);
    const { flash } = usePage().props;

    useEffect(() => {
        setData(props.data.data);
    }, [props.data.data]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            search: search,
            searchBy: searchBy,
        };

        router.get(route(route().current()), formData, {
            preserveState: true,
            replace: true,
        });
        // console.warn(formData);
    };

    useEffect(() => {
        if (flash.message) {
            toast.success(flash.message);
        }
    }, [flash.message]);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Customer Data
                </h2>
            }
        >
            <Head title="Customer Data" />

            <div className="py-12">
                <div className=" mx-auto sm:px-6 lg:px-8">
                    <Breadcrumbs className="ml-[-0.9rem] w-96 bg-transparent">
                        <Link
                            href={route("dashboard")}
                            className=" text-secondary opacity-80 "
                        >
                            Dashboard
                        </Link>
                        <Link
                            href={route("customer.index")}
                            className="opacity-100 text-secondary font-extrabold "
                        >
                            Customer Data
                        </Link>
                        <a href="#"></a>
                    </Breadcrumbs>
                    <div className="bg-white dark:bg-foreground overflow-hidden  sm:rounded-lg shadow-[0_10px_90px_#6F72FF]">
                        <div className="p-6 text-textprimary dark:text-gray-200">
                            <PageHeader
                                description="Informasi Data Customer Gloria Swalayan"
                                title="Customer Data"
                            />
                            <div className="flex flex-col">
                                <div className="overflow-x-auto">
                                    <div className="flex justify-between py-3 pl-2">
                                        <form
                                            onSubmit={handleSubmit}
                                            className="w-full desktop:max-w-[50rem]"
                                        >
                                            <SearchInput
                                                value={search}
                                                placeholder="Cari Nama Customer"
                                                onChange={(e) =>
                                                    setSearch(e.target.value)
                                                }
                                            />

                                            <div className="flex gap-8 tablet:gap-0 tablet:flex-col">
                                                <SearchButton />

                                                <AddDataButton
                                                    link="customer.add"
                                                    title="Tambah Customer"
                                                />
                                            </div>
                                        </form>
                                    </div>

                                    {/* Table */}
                                    <div className="p-1.5 w-full inline-block align-middle">
                                        <div className=" border  dark:border-background rounded-lg  overflow-auto">
                                            <table className="min-w-full divide-y divide-transparent">
                                                <thead className="bg-secondary text-white">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-xs font-bold text-left  uppercase "
                                                        >
                                                            Nama
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-xs font-bold text-left  uppercase "
                                                        >
                                                            Email
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-xs font-bold text-left  uppercase "
                                                        >
                                                            Nomor HP
                                                        </th>

                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-xs font-bold text-left  uppercase "
                                                        >
                                                            Alamat
                                                        </th>

                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-xs font-bold text-left  uppercase "
                                                        >
                                                            Kota
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-xs font-bold text-center  uppercase "
                                                        >
                                                            Edit
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className=" bg-secondary/20 ">
                                                    {data.map((data, i) => {
                                                        return (
                                                            <tr
                                                                key={i}
                                                                className="hover:bg-white/50 transition duration-300 ease-in-out "
                                                            >
                                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                                    {data.name}
                                                                </td>

                                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                                    {data.email}
                                                                </td>
                                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                                    {
                                                                        data.phone_number
                                                                    }
                                                                </td>
                                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                                    {
                                                                        data.address
                                                                    }
                                                                </td>
                                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                                    {data.city}
                                                                </td>

                                                                <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                                                                    <Link
                                                                        className="text-green-500 hover:text-green-700"
                                                                        href={route(
                                                                            "customer.edit",
                                                                            {
                                                                                id: data.id,
                                                                            }
                                                                        )}
                                                                        method="get"
                                                                        data={{
                                                                            id: undefined,
                                                                        }}
                                                                        as="button"
                                                                    >
                                                                        <Tooltip
                                                                            content="Edit Data Customer"
                                                                            animate={{
                                                                                mount: {
                                                                                    scale: 1,
                                                                                    y: 0,
                                                                                },
                                                                                unmount:
                                                                                    {
                                                                                        scale: 0,
                                                                                        y: 25,
                                                                                    },
                                                                            }}
                                                                            className="bg-green-600"
                                                                        >
                                                                            <IconButton
                                                                                variant="fill"
                                                                                color="green"
                                                                            >
                                                                                <PencilIcon className="h-4 w-4" />
                                                                            </IconButton>
                                                                        </Tooltip>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="pagination flex justify-center items-center mt-4">
                                        {props.data.prev_page_url && (
                                            <button
                                                onClick={() =>
                                                    router.visit(
                                                        props.data.prev_page_url
                                                    )
                                                }
                                                className="pagination-button  hover:bg-secondary border-secondary  text-secondary dark:text-gray-200 hover:text-gray-200  font-bold py-2 px-4 rounded mr-2 border border-ring dark:border-ring  transition duration-300 ease-in-out "
                                            >
                                                Previous
                                            </button>
                                        )}

                                        {Array.from(
                                            { length: props.data.last_page },
                                            (_, i) => i + 1
                                        ).map((pageNumber, index, array) => {
                                            if (
                                                index === 0 || // always show the first page number
                                                index === array.length - 1 || // always show the last page number
                                                Math.abs(
                                                    pageNumber -
                                                        props.data.current_page
                                                ) <= 2 // show page numbers within 2 of the current page
                                            ) {
                                                return (
                                                    <button
                                                        key={pageNumber}
                                                        onClick={() =>
                                                            router.visit(
                                                                `${props.data.path}?page=${pageNumber}`,
                                                                {
                                                                    data: {
                                                                        search:
                                                                            props.search ||
                                                                            "",
                                                                        searchBy:
                                                                            props.searchBy ||
                                                                            "",
                                                                    },
                                                                }
                                                            )
                                                        }
                                                        className={`pagination-button ${
                                                            props.data
                                                                .current_page ===
                                                            pageNumber
                                                                ? "bg-secondary text-white"
                                                                : "bg-transparent border-secondary"
                                                        } hover:bg-secondary dark:hover:bg-popover hover:text-gray-200 border border-ring text-secondary font-bold py-2 px-4 rounded mx-1 transition duration-300 ease-in-out mobile:hidden`}
                                                    >
                                                        {pageNumber}
                                                    </button>
                                                );
                                            } else if (
                                                Math.abs(
                                                    pageNumber -
                                                        props.data.current_page
                                                ) === 3 &&
                                                index !== 1 &&
                                                index !== array.length - 2
                                            ) {
                                                return (
                                                    <span
                                                        key={pageNumber}
                                                        className="mobile:hidden"
                                                    >
                                                        ...
                                                    </span>
                                                ); // show ellipses for skipped page numbers
                                            } else {
                                                return null; // hide skipped page numbers
                                            }
                                        })}

                                        {props.data.next_page_url && (
                                            <button
                                                onClick={() =>
                                                    router.visit(
                                                        props.data
                                                            .next_page_url,
                                                        {
                                                            data: {
                                                                search:
                                                                    props.search ||
                                                                    "",
                                                                searchBy:
                                                                    props.searchBy ||
                                                                    "",
                                                            },
                                                        }
                                                    )
                                                }
                                                className="pagination-button  hover:bg-secondary  text-secondary border-secondary hover:text-gray-200  font-bold py-2 px-4 rounded mr-2 border border-ring dark:border-ring  transition duration-300 ease-in-out ml-2"
                                            >
                                                Next
                                            </button>
                                        )}
                                    </div>
                                    {/* <Pagination
                                        data={props.data}
                                        extraData={{ search, searchBy }}
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </AuthenticatedLayout>
    );
}
