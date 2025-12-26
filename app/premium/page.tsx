import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardItem = {
    title: string;
    description: string;
    image: string;
    href: string;
};

const cardData: CardItem[] = [
    {
        title: "Pigmentation",
        description:
            "Skin rejuvenation, is a safe & non-invasive medical aesthetic effective treatment for visible is a very safe and effective rejuvenation",
        image: "/images/image.png",
        href: "/premium/pigmentation",
    },
    {
        title: "Pigmentation",
        description:
            "Skin rejuvenation, is a safe & non-invasive medical aesthetic effective treatment for visible is a very safe and effective rejuvenation",
        image: "/images/image.png",
        href: "/premium/pigmentation",
    },
    {
        title: "Pigmentation",
        description:
            "Skin rejuvenation, is a safe & non-invasive medical aesthetic effective treatment for visible is a very safe and effective rejuvenation",
        image: "/images/image.png",
        href: "/premium/pigmentation",
    },
    {
        title: "Pigmentation",
        description:
            "Skin rejuvenation, is a safe & non-invasive medical aesthetic effective treatment for visible is a very safe and effective rejuvenation",
        image: "/images/image.png",
        href: "/premium/pigmentation",
    },
];

const Page = () => {
    return (
        <div className="flex flex-col gap-3 px-5 w-full">
            {cardData.map((item, idx) => (
                <Link key={idx} href={item.href}>
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
                        <div className="p-[15px]">
                            <div className="w-16 h-16 relative rounded-full bg-white mb-2">
                                <Image
                                    fill
                                    className="object-cover rounded-full"
                                    src={item.image}
                                    alt={item.title}
                                />
                            </div>

                            <h2 className="text-xl font-semibold text-gray-900 mb-1">
                                {item.title}
                            </h2>

                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Page;
