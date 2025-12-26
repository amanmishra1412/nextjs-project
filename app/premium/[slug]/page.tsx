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

                {/* Text Section */}
                <div className="">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                        Pigmentation
                    </h2>
                    <p className="text-gray-600">
                        Skin pigmentation can make your skin look lighter or
                        darker, blotchy and discoloured. To get rid of the
                        blemishes and stimulate the production of collagen we at
                        La Skinnovita use non-invasive treatments to give you
                        that glowing look. All the treatments are safe and
                        painless. They all show remarkable results and thus
                        helps in giving you a bright and youthful skin.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;
