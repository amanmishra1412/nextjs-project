import Image from "next/image";
import React from "react";

type SectionType = {
    title: string;
    images: string[];
};

const Page = () => {
    const sections: SectionType[] = [
        {
            title: "Skin Care",
            images: [
                "/images/gallary.png",
                "/images/gallary.png",
                "/images/gallary.png",
            ],
        },
        {
            title: "Photo Facial",
            images: [
                "/images/gallary.png",
                "/images/gallary.png",
                "/images/gallary.png",
            ],
        },
        {
            title: "Botox",
            images: [
                "/images/gallary.png",
                "/images/gallary.png",
                "/images/gallary.png",
            ],
        },
        {
            title: "Botox",
            images: [
                "/images/gallary.png",
                "/images/gallary.png",
                "/images/gallary.png",
            ],
        },
    ];

    return (
        <div className="px-5">
            {sections.map((section, idx) => (
                <div key={idx} className="mt-3">
                    <h2 className="font-semibold">{section.title}</h2>
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                        {section.images.map((src, idx) => (
                            <div
                                key={idx}
                                className="relative mt-3 rounded-md flex-shrink-0 w-44 h-24"
                            >
                                <Image
                                    className="object-cover rounded-md"
                                    fill
                                    src={src}
                                    alt={`${section.title} image ${
                                        idx + 1
                                    }`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Page;
