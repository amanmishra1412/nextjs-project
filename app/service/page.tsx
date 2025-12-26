import Image from "next/image";

interface Treatment {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

export default function TreatmentsList() {
    const treatments: Treatment[] = [
        {
            title: "Skin Rejuvenation",
            description:
                "Skin rejuvenation is a safe & non-invasive medical aesthetic effective treatment for visible results...",
            imageSrc: "/images/user2.png",
            imageAlt: "Woman touching her face",
        },
        {
            title: "Skin Rejuvenation",
            description:
                "Skin rejuvenation is a safe & non-invasive medical aesthetic effective treatment for visible results...",
            imageSrc: "/images/user2.png",
            imageAlt: "Woman touching her face",
        },
        {
            title: "Skin Rejuvenation",
            description:
                "Skin rejuvenation is a safe & non-invasive medical aesthetic effective treatment for visible results...",
            imageSrc: "/images/user2.png",
            imageAlt: "Woman touching her face",
        },
        {
            title: "Photo facial",
            description:
                "Photo facial is a safe & non-invasive medical aesthetic effective treatment for visible results...",
            imageSrc: "/images/user2.png",
            imageAlt: "Woman with towel on head applying cream",
        },
        {
            title: "Botox",
            description:
                "Botox is a safe & non-invasive medical aesthetic effective treatment for visible results...",
            imageSrc: "/images/user2.png",
            imageAlt: "Woman receiving botox injection",
        },
        {
            title: "Botox Extra",
            description:
                "Botox extra is a safe & non-invasive medical aesthetic effective treatment for visible results...",
            imageSrc: "/images/user2.png",
            imageAlt: "Woman receiving botox injection",
        },
    ];

    return (
        <div className="px-5">
            <div className="max-w-md mx-auto flex flex-col">
                <div className="flex flex-col gap-4 py-4">
                    {treatments.map((treatment, index) => (
                        <div
                            key={index}
                            className="flex h-28 items-center justify-between bg-white rounded-2xl shadow-md "
                        >
                            {/* Text Section */}
                            <div className="flex-1 pr-4 p-[12px]">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    {treatment.title}
                                </h2>
                                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                                    {treatment.description}
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="w-20 h-24 relative flex-shrink-0">
                                <Image
                                    src={treatment.imageSrc}
                                    alt={treatment.imageAlt}
                                    fill
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
