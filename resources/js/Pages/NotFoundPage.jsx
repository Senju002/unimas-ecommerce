import React from "react";
import ErrorImage from "@/../../resources/images/404.png";
import { Head } from "@inertiajs/react";

export default function NotFoundPage() {
    return (
        <>
            <Head title="404 Not Found" />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <div className="w-96">
                    <img
                        src={ErrorImage}
                        alt="404 Error"
                        className="w-full h-full mb-8"
                    />
                </div>

                <h1 className="text-5xl font-bold text-gray-800 mb-4 tablet:text-3xl text-center">
                    Oops! Halaman Tidak Ditemukan
                </h1>
                <p className="text-xl text-gray-600 mb-4 tablet:text-lg text-center">
                    Halaman yang Anda cari sudah dihapus atau mungkin tidak ada.
                </p>
                <a
                    href="/"
                    className="text-lg text-primary font-bold hover:underline"
                >
                    Kembali ke halaman utama
                </a>
            </div>
        </>
    );
}
