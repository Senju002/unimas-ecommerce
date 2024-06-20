import React from "react";
import { router } from "@inertiajs/react";

const Pagination = ({ data, searchParams }) => {
    return (
        <div className="pagination flex justify-center items-center mt-4">
            {data.prev_page_url && (
                <button
                    onClick={() => {
                        router.visit(data.prev_page_url, {
                            data: searchParams,
                        });
                    }}
                    className="pagination-button hover:bg-secondary border-secondary text-secondary dark:text-gray-200 hover:text-gray-200 font-bold py-2 px-4 rounded mr-2 border border-ring dark:border-ring transition duration-300 ease-in-out"
                >
                    Previous
                </button>
            )}

            {Array.from({ length: data.last_page }, (_, i) => i + 1).map(
                (pageNumber, index, array) => {
                    if (
                        index === 0 || // always show the first page number
                        index === array.length - 1 || // always show the last page number
                        Math.abs(pageNumber - data.current_page) <= 2 // show page numbers within 2 of the current page
                    ) {
                        return (
                            <button
                                key={pageNumber}
                                onClick={() => {
                                    router.visit(
                                        `${data.path}?page=${pageNumber}`,
                                        { data: searchParams }
                                    );
                                }}
                                className={`pagination-button ${
                                    data.current_page === pageNumber
                                        ? "bg-secondary text-white"
                                        : "bg-transparent border-secondary"
                                } hover:bg-secondary dark:hover:bg-popover hover:text-gray-200 border border-ring text-secondary font-bold py-2 px-4 rounded mx-1 transition duration-300 ease-in-out mobile:hidden`}
                            >
                                {pageNumber}
                            </button>
                        );
                    } else if (
                        Math.abs(pageNumber - data.current_page) === 3 &&
                        index !== 1 &&
                        index !== array.length - 2
                    ) {
                        return (
                            <span key={pageNumber} className="mobile:hidden">
                                ...
                            </span>
                        ); // show ellipses for skipped page numbers
                    } else {
                        return null; // hide skipped page numbers
                    }
                }
            )}

            {data.next_page_url && (
                <button
                    onClick={() => {
                        router.visit(data.next_page_url, {
                            data: searchParams,
                        });
                    }}
                    className="pagination-button hover:bg-secondary text-secondary border-secondary hover:text-gray-200 font-bold py-2 px-4 rounded mr-2 border border-ring dark:border-ring transition duration-300 ease-in-out ml-2"
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default Pagination;
