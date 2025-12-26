"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Field {
    type: "text" | "date" | "select";
    placeholder: string;
    options?: { value: string; label: string }[];
    iconClass?: string;
}

const Page = () => {
    const [dateFocus, setDateFocus] = useState(false);

    const fields: Field[] = [
        {
            type: "text",
            placeholder: "Name",
            iconClass: "ri-user-fill",
        },
        {
            type: "text",
            placeholder: "Email",
            iconClass: "ri-mail-line",
        },
        {
            type: "select",
            placeholder: "Gender",
            iconClass: "ri-user-settings-line",
            options: [
                { value: "", label: "Gender" },
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
            ],
        },
        {
            type: "date",
            placeholder: "Date of Birth",
            iconClass: "ri-cake-2-line",
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
                    <h2 className="text-2xl font-semibold text-gray-800">Sign up</h2>
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
                            {field.type === "select" ? (
                                <select
                                    className="p-3 text-gray-500 outline-none w-full bg-transparent"
                                    defaultValue=""
                                >
                                    {field.options?.map((opt) => (
                                        <option
                                            key={opt.value}
                                            value={opt.value}
                                        >
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            ) : field.type === "date" ? (
                                <input
                                    type={dateFocus ? "date" : "text"}
                                    placeholder={field.placeholder}
                                    onFocus={() => setDateFocus(true)}
                                    onBlur={() => setDateFocus(false)}
                                    className="p-3 outline-none w-full bg-transparent"
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="p-3 outline-none w-full bg-transparent"
                                />
                            )}
                        </div>
                    ))}

                    <button className="w-full py-3 px-6 bg-gradient-to-b from-[#49E0F3] to-[#44B7C6]  text-white font-normal text-lg rounded-2xl shadow-xl hover:shadow-2xl  transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40">
                        Save
                    </button>
                </form>
            </div>
        </>
    );
};

export default Page;
