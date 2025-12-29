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
    // Separate state for each field (industry standard for small forms)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [dateFocus, setDateFocus] = useState(false);

    const fields: Field[] = [
        { type: "text", placeholder: "Name", iconClass: "ri-user-fill" },
        { type: "text", placeholder: "Email", iconClass: "ri-mail-line" },
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

    // Function to handle submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { name, email, gender, dob };
        console.log("Form Data:", formData);
        // You can send formData to API here
    };

    return (
        <>
            {/* Background */}
            <div
                className="h-screen md:rounded-3xl bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: "url(/images/login.png)" }}
            />

            {/* Form Card */}
            <div className="rounded-3xl absolute bottom-0 bg-[#ECFDFF] shadow-2xl px-5 py-5 w-full z-10">
                {/* Logo */}
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
                        Sign up
                    </h2>
                    <p className="text-gray-800 font-medium">
                        Enter your details
                    </p>
                </div>

                <form className="space-y-3" onSubmit={handleSubmit}>
                    <div className="flex items-center border-b border-gray-400 bg-[#ECFDFF] rounded-md">
                        <i className="ri-user-fill text-lg text-gray-500 px-2"></i>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-3 outline-none w-full bg-[#ECFDFF] text-gray-700 rounded-md"
                        />
                    </div>

                    <div className="flex items-center border-b border-gray-400 bg-[#ECFDFF] rounded-md">
                        <i className="ri-mail-line text-lg text-gray-500 px-2"></i>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-3 outline-none w-full bg-[#ECFDFF] text-gray-700 rounded-md"
                        />
                    </div>

                    <div className="flex items-center border-b border-gray-400 bg-[#ECFDFF] rounded-md">
                        <i className="ri-user-settings-line text-lg text-gray-500 px-2"></i>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="p-3 text-gray-700 outline-none w-full bg-[#ECFDFF] rounded-md"
                        >
                            {fields[2].options?.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center border-b border-gray-400 bg-[#ECFDFF] rounded-md">
                        <i className="ri-cake-2-line text-lg text-gray-500 px-2"></i>
                        <input
                            type={dateFocus ? "date" : "text"}
                            placeholder="Date of Birth"
                            value={dob}
                            onFocus={() => setDateFocus(true)}
                            onBlur={() => setDateFocus(false)}
                            onChange={(e) => setDob(e.target.value)}
                            className="p-3 outline-none w-full bg-[#ECFDFF] text-gray-700 rounded-md"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-gradient-to-b from-[#49E0F3] to-[#44B7C6] text-white font-normal text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40"
                    >
                        Save
                    </button>
                </form>
            </div>
        </>
    );
};

export default Page;
