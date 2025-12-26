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

    const quickActions: QuickAction[] = [
        { icon: "ri-user-line", title: "Dr.", subtitle: "Anuj Pall" },
        { icon: "ri-calendar-line", title: "Book Appointment", btn: 'true' },
        { icon: "ri-customer-service-line", title: "Online Consultation" },
        { icon: "ri-capsule-line", title: "Buy Medicine" },
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
            className: "bg-[#E7F0FF] text-blue-600",
        },
        {
            name: "Instagram",
            icon: "ri-instagram-line",
            className: "bg-[#F7E2F4] text-pink-600",
        },
        {
            name: "X (twitter)",
            icon: "ri-twitter-x-line",
            className: "bg-[#EEEEEE]",
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
            backgroundGradient: "from-orange-300 via-yellow-200 to-orange-400",
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
                <div className="greeting mt-2">
                    <h2 className="text-2xl font-semibold">Hello Akash!</h2>
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
                            className="bg-white cursor-pointer rounded-2xl shadow-md px-4 py-2 flex gap-3 items-center active:scale-95 transition-all"
                        >
                            <i className={`${item.icon} text-blue-500`} />
                            <p className=" font-medium text-start text-gray-900">
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

            <section className="pb-5 px-5">
                <h2 className="font-semibold">
                    Premium Services
                    <span className="text-yellow-500 text-lg">✨</span>
                </h2>
                <div className="flex overflow-x-auto mt-1 gap-2 scrollbar-hide">
                    {premiumServices.map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-24 flex flex-col items-center justify-center"
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
                    <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 pb-8">
                        {carouselData.map((item, index) => (
                            <div
                                key={index}
                                className="snap-center shrink-0 w-full max-w-md"
                            >
                                <div
                                    className={`relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${item.backgroundGradient}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-[35%] relative h-64 md:h-80 shrink-0">
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.title}
                                                fill
                                                className="w-full rounded-2xl shadow-lg"
                                            />
                                        </div>

                                        <div className="flex flex-col items-center pr-4 text-right">
                                            <h2 className="text-3xl text-right font-semibold mb-4">
                                                {item.title}
                                            </h2>
                                            <p className="text-right">
                                                {item.subtitle}
                                            </p>

                                            <button className="mt-5 ml-auto px-5 py-3 bg-gray-900 text-white font-semibold rounded-full ">
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
                                className="w-2 h-2 bg-gray-400 rounded-full opacity-50"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* social */}

            <section className="pb-5 px-5">
                <p className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
                    Let be social <span className="text-2xl">🚀</span>
                </p>
                <div className="flex overflow-x-auto mt-1 gap-2 scrollbar-hide">
                    {socialLinks.map((item, i) => (
                        <button
                            key={i}
                            className={`flex-shrink-0 px-3 py-2 rounded-lg flex items-center gap-2 font-medium transition ${item.className}`}
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
                            className="flex-shrink-0 ml-5 w-32 bg-[#FBF6E3] rounded-2xl shadow-lg"
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
                <div className="w-full bg-white py-6">
                    <div className="flex items-center gap-3 px-6 mb-5">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Watch Videos
                        </h2>
                    </div>
                    <div className="overflow-x-auto scrollbar-hide px-6">
                        <div className="flex gap-4 pb-4">
                            {videos.map((video, i) => (
                                <div key={i} className="flex-shrink-0 w-48">
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

                <div className="flex overflow-x-auto scrollbar-hide pb-4">
                    {beforeAfterCards.map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 ml-5 p-4 w-56 bg-white rounded-xl shadow-md"
                        >
                            <div className="relative h-28 rounded-xl">
                                <Image
                                    fill
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover rounded-xl"
                                />
                            </div>

                            <h3 className="text-xl font-bold mt-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.description}</p>

                            <hr className="my-3 h-[2px] bg-gradient-to-r from-transparent via-[#52B8C5] to-transparent" />

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

            <section className="mb-20 pb-5">
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
                <div className="flex mt-1 pl-5 gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                    {reviews.map((item, i) => (
                        <div
                            key={i}
                            className="w-[90%] flex-shrink-0 snap-center bg-[#F3FEFF] rounded-xl border border-[#D9FBFF] p-4"
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
