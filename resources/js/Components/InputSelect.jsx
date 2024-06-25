import Select from "react-tailwindcss-select";

export default function InputSelect({ value, onChange, options }) {
    return (
        <div className="flex flex-col w-full mr-4 over  ">
            <div className="lg:w-full ">
                <Select
                    isSearchable
                    value={value}
                    onChange={onChange}
                    options={options}
                    classNames={{
                        menuButton: ({ isDisabled }) =>
                            `flex text-[0.9rem] capitalize   h-[2.8rem] border text-[0.9rem] focus:border-secondary  border-gray-400 rounded shadow-sm transition-all duration-300 focus:outline-none  ${
                                isDisabled
                                    ? "bg-gray-200"
                                    : "bg-white hover:border-gray-400 focus:border-secondary focus:ring focus:ring-secondary/20 "
                            }`,
                        menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700   ",
                        listItem: ({ isSelected }) =>
                            `block transition capitalize duration-200 px-2 py-2 cursor-pointer select-none truncate rounded 	 ${
                                isSelected
                                    ? `text-white bg-secondary `
                                    : `text-black hover:bg-secondary/50 hover:text-black `
                            }`,
                        searchBox: "text-gray-600 w-full",
                        searchIcon: "hidden",
                    }}
                />
            </div>
        </div>
    );
}
