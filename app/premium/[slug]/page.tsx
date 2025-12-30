import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div className="px-5">
            <div className="bg-white p-[15px] rounded-2xl shadow-xl overflow-hidden">
                <div className="relative w-full h-48 mb-1">
                    <Image
                        src="/images/pigmentation.png"
                        alt="Woman receiving pigmentation treatment"
                        fill
                        className="object-cover rounded-2xl"
                        priority
                    />
                </div>

                <div className="">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                        Pigmentation
                    </h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat exercitationem quisquam fugit placeat soluta dolorum numquam voluptates mollitia, nobis iste explicabo autem libero sapiente magni delectus architecto minima iure assumenda porro enim molestiae quaerat veniam quia? A, quis. Ducimus neque eius a ullam iste at iure quaerat maiores? Magni minus ne
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;
