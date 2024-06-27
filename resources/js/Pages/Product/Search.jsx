import ProductCard from "@/Components/ProductCard";
import Guest from "@/Layouts/Guest";
import { usePage, router } from "@inertiajs/react";
import { Button, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Footer from "@/Components/Footer";
import SearchProductCard from "@/Components/SearchProductCard";
import InputSelect from "@/Components/InputSelect";

export default function Search(props) {
    const { data, productCategoryList } = usePage().props;
    const [search, setSearch] = useState("");
    const [searchBy, setSearchBy] = useState("product_name");

    const [productCategory, setProductCategory] = useState(
        productCategoryList[0]
    );

    const handleCategoryChange = (value) => {
        setProductCategory(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            search: search,
            searchBy: searchBy,
            categoryId: productCategory.value,
        };

        // console.log(formData);

        router.get(route(route().current()), formData, {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <Guest auth={props.auth.user} title={"Cari Produk"} showSearch={false}>
            {/* <HomeBanner /> */}
            <div className="py-0 tablet:py-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden  sm:rounded-lg">
                        <div className="bg-white mt-8 rounded-2xl shadow-xl h-full">
                            <h1 className="text-5xl font-bold text-primary mb-4 tablet:text-3xl text-left pt-8 ml-4">
                                Cari Produk !
                            </h1>
                            <form className="mx-4 pt-2" onSubmit={handleSubmit}>
                                <div className="relative flex flex-1 gap-2 w-full">
                                    <Input
                                        type="search"
                                        label="Cari Produk..."
                                        className=" !border-gray-500  pl-9 placeholder:text-blue-gray-300 focus:!border-primary w-full"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none pl-8",
                                        }}
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                    />
                                    <div className="!absolute left-3 top-[11px]">
                                        <MagnifyingGlassIcon className="h-4 w-4 text-primary" />
                                    </div>
                                </div>
                                <div className=" mt-4">
                                    <div className="flex flex-col gap-3 w-full">
                                        <Typography
                                            className="-mb-2 font-extralight text-sm"
                                            variant="h6"
                                        >
                                            Filter Berdasarkan Kategori Produk
                                        </Typography>
                                        <InputSelect
                                            value={productCategory}
                                            onChange={handleCategoryChange}
                                            options={productCategoryList}
                                            color="primary"
                                        />
                                    </div>
                                </div>
                                <Button
                                    size="xl"
                                    // color="white"
                                    className="w-full mt-4 rounded bg-primary"
                                    type="submit"
                                >
                                    Search
                                </Button>
                            </form>

                            <div
                                className={`flex ${
                                    !data.data || data.data.length === 0
                                        ? "justify-center"
                                        : data.data.length <= 4
                                        ? "justify-start"
                                        : "justify-between"
                                } items-center mt-8 mx-4 mobile:mx-0 flex-wrap mobile:justify-center`}
                            >
                                {data.data && data.data.length > 0 ? (
                                    data.data.map((product) => (
                                        <SearchProductCard
                                            key={product.id}
                                            id={product.id}
                                            image={product.image_url}
                                            name={product.product_name}
                                            price={parseFloat(
                                                product.price
                                            ).toFixed(2)}
                                        />
                                    ))
                                ) : (
                                    <p className="text-center text-primary text-3xl my-20 mobile:text-xl">
                                        Ops!! Data Produk Belum Tersedia
                                    </p>
                                )}
                            </div>
                            <div className="pagination flex justify-center items-center mt-4 pb-8">
                                {props.data.prev_page_url && (
                                    <button
                                        onClick={() =>
                                            router.visit(
                                                props.data.prev_page_url
                                            )
                                        }
                                        className="pagination-button  hover:bg-primary border-primary  text-primary dark:text-gray-200 hover:text-gray-200  font-bold py-2 px-4 rounded mr-2 border border-ring dark:border-ring  transition duration-300 ease-in-out "
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
                                            pageNumber - props.data.current_page
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
                                                                categoryId:
                                                                    props.categoryId ||
                                                                    "",
                                                            },
                                                        }
                                                    )
                                                }
                                                className={`pagination-button ${
                                                    props.data.current_page ===
                                                    pageNumber
                                                        ? "bg-primary text-white"
                                                        : "bg-transparent border-primary"
                                                } hover:bg-primary dark:hover:bg-popover hover:text-gray-200 border border-ring text-primary font-bold py-2 px-4 rounded mx-1 transition duration-300 ease-in-out mobile:hidden`}
                                            >
                                                {pageNumber}
                                            </button>
                                        );
                                    } else if (
                                        Math.abs(
                                            pageNumber - props.data.current_page
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
                                                props.data.next_page_url,
                                                {
                                                    data: {
                                                        search:
                                                            props.search || "",
                                                        searchBy:
                                                            props.searchBy ||
                                                            "",
                                                        categoryId:
                                                            props.categoryId ||
                                                            "",
                                                    },
                                                }
                                            )
                                        }
                                        className="pagination-button  hover:bg-primary  text-primary border-primary hover:text-gray-200  font-bold py-2 px-4 rounded mr-2 border border-ring dark:border-ring  transition duration-300 ease-in-out ml-2"
                                    >
                                        Next
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Guest>
    );
}
