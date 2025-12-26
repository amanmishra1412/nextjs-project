"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TopHeader from "./TopHeader";

const Header = () => {
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { icon: "ri-user-line", label: "Dr. Anuj Pall", link:'/about' },
        { icon: "ri-information-line", label: "About La Skinocvita" },
        { icon: "ri-calendar-check-line", label: "Book Appointment" },
        { icon: "ri-history-line", label: "Appointment History" },
        { icon: "ri-vip-crown-line", label: "Premium Services", link:'/premium' },
        { icon: "ri-file-text-line", label: "Treatment Instructions", link:'/treatment' },
        { icon: "ri-question-line", label: "FAQs" },
        { icon: "ri-message-2-line", label: "Feedback" },
        { icon: "ri-logout-box-r-line", label: "Logout" },
    ];

    const removeRoute = ["/signup", '/login'];
    if (removeRoute.includes(pathname)) return "";

    return (
        <>
          
                <header className="py-5 px-5">
                    {pathname !== "/" ? (
                        <TopHeader />
                    ) : (
                        <>
                            <div className="flex justify-between items-center">
                                <div
                                    className="bg-white flex items-center justify-center rounded-xl shadow-sm cursor-pointer text-xl w-10 h-10 transform -scale-y-100 text-black"
                                    onClick={() => setIsMenuOpen(true)}
                                >
                                    <i className="ri-bar-chart-horizontal-line text-gray-700"></i>
                                </div>

                                <div className="flex gap-3">
                                    <Link
                                        href="/search"
                                        className="bg-white flex items-center justify-center rounded-xl text-xl shadow-sm cursor-pointer w-10 h-10 text-black"
                                    >
                                        <i className="ri-search-line text-gray-700"></i>
                                    </Link>

                                    <div className="bg-white flex items-center justify-center relative rounded-xl shadow-sm cursor-pointer w-10 h-10 text-xl text-black">
                                        <i className="ri-notification-3-line text-gray-700"></i>
                                        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
                                    </div>
                                </div>
                            </div>


                        </>
                    )}
                </header>

            {isMenuOpen && (
                <>
                    <div
                        className="absolute inset-0 bg-gray-500 backdrop-blur-xl bg-opacity-10 z-50"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    <div className="absolute bg-[#EEFAFB] inset-y-0 left-0 w-[65%] lg:w-[320px] shadow-2xl z-50 flex flex-col">
                        <div className=" border-b p-4  border-gray-100">
                            <div className="flex border border-[#A3DBE1] border-t-4 border-l-0 border-r-0 border-b-4 rounded-3xl p-4 bg-gradient-to-b from-[#DEF4F7] to-[#E2E7E0] flex-col gap-3">
                                <div className="relative w-20 h-20 rounded-md overflow-hidden bg-gray-200">
                                    <Image
                                        src="/images/image.png"
                                        alt="Profile"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Hello Akash!
                                    </h2>
                                    <p className="text-gray-600">9568951943</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 px-4 overflow-y-auto scrollbar-hide">
                            {menuItems.map((item,idx) => (
                                <Link
                                    key={idx}
                                    href={item.link ? item?.link : ''}
                                    className="flex items-center gap-2 py-4 border-b border-gray-200 last:cursor-pointer transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <i
                                        className={`${item.icon} font-light `}
                                    ></i>
                                    <span className="font-light">
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Header;
