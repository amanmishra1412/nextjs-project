"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface Tab {
    name: string;
    label: string;
    icon: string;
    route: string;
}

const Footer = () => {
    const router = useRouter();
    const pathname = usePathname();

    const tabs: Tab[] = [
        { name: "home", label: "Home", icon: "ri-home-4-line", route: "/" },
        {
            name: "service",
            label: "Service",
            icon: "ri-pencil-line",
            route: "/service",
        },
        {
            name: "calendar",
            label: "My Visits",
            icon: "ri-calendar-line",
            route: "/my_visits",
        },
        {
            name: "stats",
            label: "Stats",
            icon: "ri-bar-chart-line",
            route: "/stats",
        },
        {
            name: "profile",
            label: "Profile",
            icon: "ri-user-line",
            route: "/profile",
        },
    ];

    const handleTabClick = (route: string) => {
        router.push(route);
    };
    const removeRoute = [
        "/premium",
        "/profile",
        "/search",
        "/about",
        "/signup",
        "/login",
    ];
    if (removeRoute.includes(pathname)) return "";

    return (
        <div className=" md:absolute fixed px-5 bottom-0 inset-x-0 bg-gradient-to-b h-[80px] to-white from-[#D4F2F6]">
            <footer className=" rounded-3xl bg-[#D4F2F6] border-[2px] border-white z-40">
                <div className="flex justify-around items-center h-16 max-w-md mx-auto">
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.route;

                        return (
                            <button
                                key={tab.name}
                                onClick={() => handleTabClick(tab.route)}
                                className={`flex items-center justify-center px-3 py-2 rounded-2xl transition-all ${
                                    isActive
                                        ? "bg-gradient-to-b from-[#49E1F4] to-[#44BBCA] text-white"
                                        : "text-gray-600"
                                }`}
                            >
                                <i className={`${tab.icon} text-2xl`}></i>
                                {isActive && (
                                    <span className="font-normal ml-2">
                                        {tab.label}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </footer>
        </div>
    );
};

export default Footer;
