import React from "react";

const page = () => {
    return (
        <div className="px-5">
            <div className="flex items-center  border-b border-gray-500">
                <div>
                    <i className="ri-search-line text-lg text-gray-700"></i>
                </div>
                <input
                    type="text"
                    className="p-3 outline-none w-full bg-transparent"
                    placeholder="Search"
                />
            </div>
        </div>
    );
};

export default page;
