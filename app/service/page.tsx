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
            imageSrc: "/images/serviceuser1.png",
            imageAlt: "Woman touching her face",
        },
        {
            title: "Skin Rejuvenation",
            description:
                "Skin rejuvenation is a safe & non-invasive medical aesthetic effective treatment for visible results...",
            imageSrc: "/images/serviceuser3.png",
            imageAlt: "Woman touching her face",
        },
        {
            title: "Skin Rejuvenation",
            description:
                "Skin rejuvenation is a safe & non-invasive medical aesthetic effective treatment for visible results...",
            imageSrc: "/images/serviceuser3.png",
            imageAlt: "Woman touching her face",
        },
        {
            title: "Photo facial",
            description:
                "Photo facial is a safe & non-invasive medical aesthetic effective treatment for visible results...",
            imageSrc: "/images/serviceuser3.png",
            imageAlt: "Woman with towel on head applying cream",
        },
        {
            title: "Botox",
            description:
                "Botox is a safe & non-invasive medical aesthetic effective treatment for visible results...",
            imageSrc: "/images/serviceuser3.png",
            imageAlt: "Woman receiving botox injection",
        },
        {
            title: "Botox Extra",
            description:
                "Botox extra is a safe & non-invasive medical aesthetic effective treatment for visible results...",
            imageSrc: "/images/serviceuser3.png",
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
                            className="flex items-center justify-between bg-white rounded-2xl shadow-md "
                        >
                            {/* Text Section */}
                            <div className="flex-1 pr-4 pt-[12px] pb-4 pl-4">
                                <h2 className="text-xl font-semibold">
                                    {treatment.title}
                                </h2>
                                <p className="text-gray-600 mt-1 line-clamp-3">
                                    {treatment.description}
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="w-28 h-36 rounded-2xl relative flex-shrink-0">
                                <Image
                                    src={treatment.imageSrc}
                                    className=" w-full rounded-2xl h-full"
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
