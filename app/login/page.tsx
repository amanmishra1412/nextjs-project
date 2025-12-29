"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Field {
    type: string;
    placeholder: string;
    iconClass?: string;
}

const Page = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, mobile });
    };

    return (
        <>
            <div
                className="h-screen bg-cover md:rounded-3xl bg-top bg-no-repeat"
                style={{ backgroundImage: "url(/images/login.png)" }}
            />

            <div className="rounded-3xl absolute bottom-0 bg-[#ECFDFF] shadow-2xl px-5 py-5 w-full z-10">
                <div className="relative w-56 h-12 mb-2">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="mb-2">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Hello
                    </h2>
                    <p className="text-gray-800 font-medium">
                        Enter your details
                    </p>
                </div>

                <form className="space-y-3" onSubmit={handleSubmit}>
                    {fields.map((field, idx) => {
                        const value =
                            field.placeholder === "Name" ? name : mobile;
                        const setValue =
                            field.placeholder === "Name" ? setName : setMobile;

                        return (
                            <div
                                key={idx}
                                className="flex items-center border-b border-gray-400 bg-[#ECFDFF] rounded-md"
                            >
                                {field.iconClass && (
                                    <div className="px-2">
                                        <i
                                            className={`${field.iconClass} text-lg text-gray-500`}
                                        ></i>
                                    </div>
                                )}
                                <input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    className="p-3 outline-none w-full bg-[#ECFDFF] text-gray-700 rounded-md"
                                />
                            </div>
                        );
                    })}

                    <button className="w-full py-3 px-6 bg-gradient-to-b from-[#49E0F3] to-[#44B7C6]  text-white font-normal text-lg rounded-2xl shadow-xl hover:shadow-2xl  transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40">
                        Get OTP
                    </button>
                </form>
            </div>
        </>
    );
};

export default Page;
