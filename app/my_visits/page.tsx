"use client";
import React, { useState } from "react";

const Page = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <>
            <div className="px-5 py-5">
                <div className="max-w-md mx-auto space-y-4">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        {" "}
                        <button
                            onClick={() => toggleSection("upcoming")}
                            className="w-full px-4 py-3 flex items-center justify-between text-left"
                        >
                            <span className="text-gray-800 font-medium">
                                Upcoming Appointment
                            </span>
                            <i
                                className={`ri-arrow-down-s-line text-xl text-gray-500 transition-transform duration-300 ${
                                    openSection === "upcoming"
                                        ? "rotate-180"
                                        : ""
                                }`}
                            />
                        </button>
                        {openSection === "upcoming" && (
                            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        {" "}
                        <button
                            onClick={() => toggleSection("history")}
                            className="w-full px-4 py-3 flex items-center justify-between text-left"
                        >
                            <span className="text-gray-800 font-medium">
                                Appointment History
                            </span>
                            <i
                                className={`ri-arrow-down-s-line text-xl text-gray-500 transition-transform duration-300 ${
                                    openSection === "history"
                                        ? "rotate-180"
                                        : ""
                                }`}
                            />
                        </button>
                        {openSection === "history" && (
                            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
