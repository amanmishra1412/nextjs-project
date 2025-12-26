"use client";

import Image from "next/image";
import React from "react";

interface Field {
    type: string;
    placeholder: string;
    iconClass?: string;
}

const Page = () => {
    const fields: Field[] = [
        {
            type: "text",
            placeholder: "Name",
            iconClass: "ri-user-fill",
        },
        {
            type: "number",
            placeholder: "Mobile Number",
            iconClass: "ri-smartphone-line",
        },
    ];

    return (
        <>
            <div
                className="h-screen bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: "url(/images/login.png)" }}
            />

            <div className="rounded-t-3xl absolute bottom-0 bg-[#ECFDFF] shadow-2xl px-5 py-5 w-full z-10">
                <div className="relative w-56 h-12 mb-2">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="mb-2">
                    <h2 className="text-2xl font-semibold text-gray-800">Hello</h2>
                    <p className="text-gray-800 font-semibold">Enter your details</p>
                </div>

                <form className="space-y-3">
                    {fields.map((field, idx) => (
                        <div
                            key={idx}
                            className="flex items-center border-b border-gray-400"
                        >
                            {field.iconClass && (
                                <div>
                                    <i
                                        className={`${field.iconClass} text-lg text-gray-500`}
                                    ></i>
                                </div>
                            )}
                            <input
                                type={field.type}
                                placeholder={field.placeholder}
                                className="p-3 outline-none w-full bg-transparent"
                            />
                        </div>
                    ))}

                    <button className="w-full py-3 px-6 bg-gradient-to-b from-[#49E0F3] to-[#44B7C6]  text-white font-normal text-lg rounded-2xl shadow-xl hover:shadow-2xl  transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40">
                        Get OTP
                    </button>
                </form>
            </div>
        </>
    );
};

export default Page;
