import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";

const SearchInput = ({ value, placeholder, onChange }) => {
    return (
        <div className="relative w-full">
            <Input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full p-3 pl-10 text-sm border-ring rounded-md focus:border-secondary focus:ring-secondary dark:bg-background dark:border-ring dark:text-gray-400"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <MagnifyingGlassIcon className="h-4 w-4 text-secondary" />
            </div>
        </div>
    );
};

export default SearchInput;
