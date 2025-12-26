"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BookAppointmentCard from "./components/Appointment";

interface QuickAction {
    icon: string;
    title: string;
    btn?: string;
    subtitle?: string;
}

interface PremiumService {
    label: string;
    image?: string;
}

interface SocialLink {
    name: string;
    icon: string;
    className: string;
}

interface Review {
    name: string;
    time: string;
    image: string;
    review: string;
}

interface Service {
    title: string;
    image: string;
}

interface Video {
    title: string;
    subtitle: string;
    image: string;
}

interface BeforeAfterCard {
    title: string;
    description: string;
    image: string;
    improvement: string;
}

interface CarouselItem {
    imageUrl: string;
    title: string;
    subtitle: string;
    backgroundGradient: string;
}

const Page = () => {
    const [appointment, setAppointment] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollLeft = e.currentTarget.scrollLeft;
        const width = e.currentTarget.clientWidth;
        const index = Math.round(scrollLeft / width);
        setActiveIndex(index);
    };

    const quickActions: QuickAction[] = [
        { icon: "ri-user-line", title: "Dr.", subtitle: "Anuj Pall" },
        { icon: "ri-calendar-line", title: "Book Appointment", btn: "true" },
        { icon: "ri-customer-service-line", title: "Online Consultation" },
        { icon: "ri-capsule-line", title: "Buy ", subtitle: "Medicine" },
    ];

    const premiumServices: PremiumService[] = [
        { label: "Atherna" },
        { label: "Service" },
        { label: "Care" },
        { label: "More" },
    ];

    const socialLinks: SocialLink[] = [
        {
            name: "Facebook",
            icon: "ri-facebook-line",
            className: "bg-[#C5E3F6] text-blue-600",
        },
        {
            name: "Instagram",
            icon: "ri-instagram-line",
            className: "bg-[#F7E2F4] text-pink-600",
        },
        {
            name: "X (twitter)",
            icon: "ri-twitter-x-line",
            className: "bg-[#CAE1E4]",
        },
    ];

    const reviews: Review[] = Array(3).fill({
        name: "Dr. Divya Srivastav",
        time: "a month ago",
        image: "/images/user1.png",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor qui animi magnam illum, adipisci ratione? Harum, nobis assumenda iure vel quo maxime distinctio libero illo velit voluptatum necessitatibus hic dolor quaerat repellendus autem deserunt praesentium!",
    });

    const services: Service[] = [
        { title: "Skin Rejuvenation", image: "/images/serviceuser1.png" },
        { title: "Skin Rejuvenation", image: "/images/serviceuser1.png" },
        { title: "Skin Rejuvenation", image: "/images/serviceuser1.png" },
    ];

    const beforeAfterCards: BeforeAfterCard[] = Array(3).fill({
        title: "Acne Treatment",
        description: "Clear, radiant skin with advanced acne solutions",
        image: "/images/gallary.png",
        improvement: "95% improvement rate",
    });

    const carouselData: CarouselItem[] = [
        {
            imageUrl: "/images/serviceuser2.png",
            title: "Face & Skin Rejuvenation",
            subtitle: "Revitalize, refresh and restore your natural beauty",
            backgroundGradient: "from-[#FED9AB] via-[#FFE1B9] to-[#FDBF69]",
        },
        {
            imageUrl: "/images/serviceuser2.png",
            title: "Glow & Radiance",
            subtitle: "Achieve flawless, glowing skin effortlessly",
            backgroundGradient: "from-pink-300 via-purple-200 to-indigo-400",
        },
        {
            imageUrl: "/images/serviceuser2.png",
            title: "Natural Beauty Boost",
            subtitle: "Enhance your skin with gentle rejuvenation",
            backgroundGradient: "from-teal-300 via-blue-200 to-cyan-400",
        },
    ];

    const videos: Video[] = [
        {
            title: "Get Rid of ACNE",
            subtitle: "Dr. Anuj Pall",
            image: "/images/user1.png",
        },
        {
            title: "Skin care",
            subtitle: "Dr. Anuj Pall",
            image: "/images/user1.png",
        },
        {
            title: "Glow Treatment",
            subtitle: "Dr. Anuj Pall",
            image: "/images/user1.png",
        },
    ];

    return (
        <>
            {/* quick action start */}
            <section className="pb-5 px-5">
                <div className="greeting">
                    <h2 className="text-3xl font-semibold">Hello Akash!</h2>
                    <p className="text-gray-700">Lorem, ipsum</p>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4">
                    {quickActions.map((item, i) => (
                        <div
                            key={i}
                            onClick={
                                item.btn
                                    ? () => setAppointment(true)
                                    : undefined
                            }
                            className="bg-gradient-to-tr  from-[#F9F9F9] to-white cursor-pointer rounded-2xl shadow-lg px-2 py-1 flex gap-1 items-center active:scale-95 transition-all"
                        >
                            <div className="bg-white shrink-0 flex items-center justify-center relative rounded-xl shadow-sm cursor-pointer w-10 h-10 text-xl text-black">
                                <i className={`${item.icon} text-[#8ECAD2]`} />
                            </div>
                            <p className=" font-medium  text-start text-gray-900">
                                {item.title}
                                {item.subtitle && (
                                    <>
                                        <br />
                                        {item.subtitle}
                                    </>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* premium service */}

            <section className="pb-5">
                <h2 className="font-semibold px-5">
                    Premium Services
                    <span className="text-yellow-500 text-lg">✨</span>
                </h2>
                <div className="flex overflow-x-auto mt-1 gap-2 scrollbar-hide">
                    {premiumServices.map((item, i) => (
                        <div
                            key={i}
                            className={`flex-shrink-0 ${
                                i === 0
                                    ? "ml-5"
                                    : i === premiumServices.length - 1
                                    ? "mr-5"
                                    : ""
                            } w-24 flex flex-col items-center justify-center`}
                        >
                            <div className="w-16 h-16 relative rounded-full bg-white">
                                <Image
                                    fill
                                    className="object-cover rounded-full"
                                    src={item.image || "/images/image.png"}
                                    alt={item.label}
                                />
                            </div>
                            <p className="mt-2 text-sm text-gray-700">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* carousel */}
            <section className="pb-5 flex justify-center">
                <div className="w-[90%] max-w-2xl">
                    <div
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3"
                        onScroll={(e) => {
                            handleScroll(e);
                        }}
                    >
                        {carouselData.map((item, index) => (
                            <div
                                key={index}
                                className="snap-center shrink-0 w-full max-w-md"
                            >
                                <div
                                    className={`relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${item.backgroundGradient}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-[33%] relative h-64 shrink-0">
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.title}
                                                fill
                                                className="w-full rounded-2xl shadow-lg"
                                            />
                                        </div>

                                        <div className="flex justify-center pt-8 py-2 flex-col items-center pr-3 text-right">
                                            <div className="mb-8">
                                                <h2 className="text-3xl text-right font-semibold mb-4">
                                                    {item.title}
                                                </h2>
                                                <p className="text-right">
                                                    {item.subtitle}
                                                </p>
                                            </div>

                                            <button className="mt-auto ml-auto px-5 py-3 bg-gray-900 text-white font-semibold rounded-full ">
                                                Know More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-2 mt-4">
                        {carouselData.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300
                                ${
                                    activeIndex === index
                                        ? "bg-[#73D4E0] scale-125 opacity-100"
                                        : "bg-gray-400 opacity-50"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* social */}

            <section className="pb-5 ">
                <p className="text-lg px-5 font-medium text-gray-800 mb-4 flex items-center gap-2">
                    Let be social 🚀
                </p>
                <div className="flex overflow-x-auto mt-1 gap-2 scrollbar-hide">
                    {socialLinks.map((item, i) => (
                        <button
                            key={i}
                            className={`flex-shrink-0 px-3 py-2 rounded-xl flex items-center gap-2 font-medium transition ${
                                item.className
                            } ${
                                i === 0
                                    ? "ml-5"
                                    : i === socialLinks.length - 1
                                    ? "mr-5"
                                    : ""
                            }`}
                        >
                            <span>{item.name}</span>
                            <i className={item.icon} />
                        </button>
                    ))}
                </div>
            </section>

            {/* service */}

            <section className="pb-5">
                <div className="flex px-5 justify-between">
                    <h2 className="font-semibold text-lg">
                        Our Services <span className="text-yellow-500">✨</span>
                    </h2>
                    <Link href="/service">View All</Link>
                </div>

                <div className="flex mt-3 overflow-x-auto scrollbar-hide">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 ml-5 w-32 bg-[#F0F4E2] rounded-2xl"
                        >
                            <div className="px-2 pt-2">
                                <h3>{service.title}</h3>
                            </div>
                            <div className="relative h-36 mt-1">
                                <Image
                                    fill
                                    src={service.image}
                                    alt={service.title}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* video */}

            <section className="pb-5">
                <div className="w-full py-6">
                    <div className="flex items-center gap-3 px-6 mb-5">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Watch Videos
                        </h2>
                    </div>
                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex gap-3 pb-4">
                            {videos.map((video, i) => (
                                <div
                                    key={i}
                                    className={`flex-shrink-0 w-48 ${
                                        i === 0
                                            ? "ml-5"
                                            : i === videos.length - 1
                                            ? "mr-5"
                                            : ""
                                    }`}
                                >
                                    <div className="bg-gray-200 relative rounded-2xl overflow-hidden shadow-md">
                                        <div className="aspect-[9/16] relative">
                                            <Image
                                                src={video.image}
                                                fill
                                                alt={video.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p className="font-medium text-gray-900">
                                            {video.title}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {video.subtitle}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* gallary */}

            <section className="pb-5">
                <div className="flex px-5 justify-between">
                    <h2 className="font-semibold text-lg">Before And After</h2>
                    <Link href="/treatment_gallary" className="text-blue-500">
                        Go To Gallery
                    </Link>
                </div>

                <div className="flex overflow-x-auto mt-2 gap-2 scrollbar-hide pb-4">
                    {beforeAfterCards.map((item, i) => (
                        <div
                            key={i}
                            className={`flex-shrink-0 ${
                                i === 0
                                    ? "ml-5"
                                    : i === beforeAfterCards.length - 1
                                    ? "mr-5"
                                    : ""
                            } p-[10px] w-52 bg-white rounded-2xl shadow-xl`}
                        >
                            <div className="relative h-28 rounded-xl">
                                <Image
                                    fill
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover rounded-2xl"
                                />
                            </div>

                            <h3 className="text-xl font-bold mt-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-0">
                                {item.description}
                            </p>

                            <hr className="my-1 h-[2px] bg-gradient-to-r from-transparent via-[#52B8C5] to-transparent" />

                            <div className="flex items-center gap-2">
                                <i className="ri-checkbox-circle-fill text-green-500 text-2xl" />
                                <span className="text-xs font-bold text-gray-500">
                                    {item.improvement}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* review */}

            <section className="mb-16 pb-5">
                <div className="flex ml-5 pr-5 justify-between items-center">
                    <h2 className="font-semibold">
                        <span className="text-lg">Reviews</span>{" "}
                        <span className="text-gray-300">|</span>{" "}
                        <span className="text-yellow-500">
                            4.8<span className="text-gray-700">(382)</span>
                        </span>
                    </h2>
                    <Link href="" className="text-gray-700">
                        View All
                    </Link>
                </div>
                <div className="flex mt-2 gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                    {reviews.map((item, i) => (
                        <div
                            key={i}
                            className={`w-[90%] ${
                                i === 0
                                    ? "ml-5"
                                    : i === reviews.length - 1
                                    ? "mr-5"
                                    : ""
                            } flex-shrink-0 snap-center bg-[#F3FEFF] rounded-xl border border-[#D9FBFF] p-4`}
                        >
                            <div className="flex items-center gap-3">
                                <Image
                                    src={item.image}
                                    alt="review"
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-400">
                                        {item.time}
                                    </p>
                                </div>
                            </div>
                            <div className="my-2 text-yellow-400">★★★★★</div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.review}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {appointment && (
                <BookAppointmentCard valueAppoint={setAppointment} />
            )}
        </>
    );
};

export default Page;
