"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface RouteTitleMap {
    [key: string]: string;
}

const TopHeader = () => {
    const routeTitleMap: RouteTitleMap = {
        treatment: "Treatment Instruction",
        premium: "Premium Services",
        profile: "Profile",
        pigmentation: "Pigmentation",
        my_visits: "My Visits",
        about: "",
        treatment_gallary : 'treatment gallary'
    };

    const pathname = usePathname();
    const routeName = pathname.split("/");
    const title = routeName[1] ? routeTitleMap[routeName[1]] ?? routeName : "";

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
                <Link
                    href="/"
                    className="bg-white rounded-xl shadow-sm cursor-pointer flex items-center justify-center w-10 h-10"
                >
                    <i className="ri-arrow-left-s-line text-gray-500 text-2xl"></i>
                </Link>

                <span className="text-lg font-semibold capitalize text-gray-700">
                    {routeName[2] ? routeName[2] : title}
                </span>
            </div>

            {routeName[1] === "profile" ? (
                <button className="px-6 py-3 bg-[#C0EDF4] rounded-2xl font-semibold text-[#058090]">
                    Edit
                </button>
            ) : (
                ""
            )}
        </div>
    );
};

export default TopHeader;
