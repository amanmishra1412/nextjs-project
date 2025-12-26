import Image from "next/image";

export default function ProfileCard() {
    return (
        <div className="pb-14 px-5">
            <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-6 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="/images/user1.png"
                        alt="Akash"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                <h1 className="text-3xl font-semibold text-gray-900">Akash</h1>
                <p className="text-lg text-gray-500 mt-2">9566951943</p>
            </div>

            <hr className="border-0 my-3 h-[2px] w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-[#52B8C5] to-transparent opacity-80" />

            {/* Details List */}
            <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                    <i className="ri-mail-line text-2xl text-gray-500"></i>
                    <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-base text-gray-700 font-medium">
                            teamcreative@gmail.com
                        </p>
                    </div>
                </div>

                {/* Gender */}
                <div className="flex gap-4">
                    <i className="ri-men-line text-2xl text-gray-500"></i>
                    <div>
                        <p className="text-sm text-gray-500">Gender</p>
                        <p className="text-base text-gray-700 font-medium">
                            Male
                        </p>
                    </div>
                </div>

                {/* Date of Birth */}
                <div className="flex gap-4">
                    <i className="ri-cake-2-line text-2xl text-gray-500"></i>
                    <div>
                        <p className="text-sm text-gray-500">Date of Birth</p>
                        <p className="text-base text-gray-700 font-medium">
                            31-10-2002
                        </p>
                    </div>
                </div>

                {/* Registered Mobile */}
                <div className="flex gap-4">
                    <i className="ri-smartphone-line text-2xl text-gray-500"></i>
                    <div>
                        <p className="text-sm text-gray-500">
                            Registered Mobile
                        </p>
                        <p className="text-base text-gray-700 font-medium">
                            9566951943
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <i className="ri-map-pin-line text-2xl text-gray-500"></i>
                    <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="text-base text-gray-700 font-normal">
                            Address not Available
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
