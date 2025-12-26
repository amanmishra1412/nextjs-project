"use client";

import Link from "next/link";
import React from "react";

const page = () => {
    const treatments = [
        "Anethea Genesis Laser",
        "Wosyet Vital",
        "Nephthys Rejuven",
        "Hair PRP",
        "Laser hair Reduction",
        "Botox",
        "Dermal Fillers",
        "Juvederm Chemical Peeling",
        "Hair Transplant",
        "Body Silhouette",
        "Body Silhouette",
        "Fillers",
    ];
    return (
        <>
            <div className="px-5 pb-5">
                <div className="">
                    {treatments.map((treatment, index) => (
                        <Link
                            key={index}
                            href=""
                            className="w-full flex items-center justify-between py-4 px-1 text-left text-gray-500 border-b border-gray-400"
                        >
                            <span className="text-base font-normal">
                                {treatment}
                            </span>
                            <i className="ri-arrow-right-line text-xl text-gray-400"></i>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default page;
