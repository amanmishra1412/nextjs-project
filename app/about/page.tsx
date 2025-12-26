import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <section className="pb-5 px-5">
            <div className="p-[15px] bg-gradient-to-b from-[#E3F4F5] to-[#E6E8E0] rounded-xl border border-[#D9FBFF]">
                <div className="w-20 h-20 relative rounded-lg">
                    <Image
                        fill
                        className="object-cover rounded-lg"
                        src="/images/user3.png"
                        alt="hello"
                    />
                </div>
                <div>
                    <h2 className="text-xl mt-1 font-semibold text-gray-900">
                        Dr. Anuj Pall
                    </h2>
                    <p className="text-gray-600">MD, PHD</p>
                </div>
                <p className=" text-gray-700 mt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ullam quam doloribus itaque sint dolores hic sed deserunt
                    sequi distinctio dicta quis voluptatibus neque veniam
                    expedita, perspiciatis veritatis at aspernatur perferendis
                    ex facilis corporis eum animi. Expedita praesentium dolor
                    enim quod natus itaque esse at modi delectus a iure unde
                    ipsum, laborum ipsa nostrum eius nobis magni quaerat culpa
                    consectetur. Est aspernatur enim, optio adipisci odit
                    sapiente quibusdam doloribus sequi qui cumque dolor ut ea
                    quos architecto, id cum minus distinctio veniam vero
                    repellendus repellat at. Doloremque libero soluta sunt rem
                    fugiat laudantium nobis corporis,
                </p>
            </div>

            <div className="mt-2">
                <h2 className="text-xl font-semibold">Awards & Achievment</h2>
                <p className="mt-3 text-gray-600">
                    <span className="text-gray-700 font-semibold ">
                        Awardsed Scholarship by international Congreess of
                        Dermatology
                    </span>{" "}
                    to attend the 10th international congress of Dermatology ,
                    Pragure , May 20-24 2009
                </p>
                <p className="mt-3 text-gray-600">
                    <span className="text-gray-700 font-semibold ">
                        Awardsed Scholarship by international Congreess of
                        Dermatology
                    </span>{" "}
                    to attend the 10th international congress of Dermatology ,
                    Pragure , May 20-24 2009
                </p>
                <p className="mt-3 text-gray-600">
                    <span className="text-gray-700 font-semibold ">
                        Awardsed Scholarship by international Congreess of
                        Dermatology
                    </span>{" "}
                    to attend the 10th international congress of Dermatology ,
                    Pragure , May 20-24 2009
                </p>
                <p className="mt-3 text-gray-600">
                    <span className="text-gray-700 font-semibold ">
                        Awardsed Scholarship by international Congreess of
                        Dermatology
                    </span>{" "}
                    to attend the 10th international congress of Dermatology ,
                    Pragure , May 20-24 2009
                </p>
            </div>

            <div className="mt-4 flex justify-center items-center">
                <Link
                    href=""
                    className="relative px-5 py-3 bg-[#DAF7FA] text-cyan-600 font-medium text-lg rounded-2xl shadow-lg shadow-cyan-200/50 border border-cyan-200  active:scale-95 transition-all duration-200 overflow-hidden"
                >
                    View Certification
                </Link>
            </div>
        </section>
    );
};

export default page;
