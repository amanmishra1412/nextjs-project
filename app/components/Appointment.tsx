"use client";

import { Dispatch, SetStateAction, useState } from "react";

type Props = {
    valueAppoint: Dispatch<SetStateAction<boolean>>;
};

const Appointment = ({ valueAppoint }: Props) => {
    const [appointmentType, setAppointmentType] = useState("consultation");
    const [bookingFor, setBookingFor] = useState("");

    return (
        <>
            <div
                className="absolute inset-0 bg-gray-500 backdrop-blur-xl bg-opacity-10 z-50"
                onClick={() => {
                    valueAppoint(false);
                }}
            />
            <div className="absolute w-full z-50 bottom-0 flex items-center justify-center">
                <div className="relative w-full max-w-md p-5 backdrop-blur-xl bg-gradient-to-t from-white to-[#E4FCFF] border-[2px] border-white shadow-2xl rounded-3xl">
                    <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-white/10 to-transparent rounded-[inherit] -z-10"></div>

                    <h2 className="text-2xl font-semibold  mb-2 ">
                        Book Appointment
                    </h2>

                    <p className="mb-1 text-gray-600">Appointment for</p>

                    <div className="flex justify-center gap-3 mb-6">
                        {["consultation", "procedure"].map((type) => (
                            <label
                                key={type}
                                className={`flex w-full items-center gap-2 px-3 py-3 rounded-xl cursor-pointer border transition
                                ${
                                    appointmentType === type
                                        ? "border-[#52B8C5] bg-white"
                                        : "border-gray-300 bg-white"
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="appointmentType"
                                    value={type}
                                    checked={appointmentType === type}
                                    onChange={(e) =>
                                        setAppointmentType(e.target.value)
                                    }
                                    className="accent-[#52B8C5]"
                                />
                                <span className="text-sm font-medium capitalize">
                                    {type}
                                </span>
                            </label>
                        ))}
                    </div>

                    <p className=" mb-4 text-gray-600">Booking for</p>

                    <div className="flex justify-center gap-3 mb-8">
                        {["myself", "other"].map((type) => (
                            <label
                                key={type}
                                className={`flex w-full items-center gap-2 px-3 py-3 rounded-xl cursor-pointer border transition
                                ${
                                    bookingFor === type
                                        ? "border-[#52B8C5] bg-white"
                                        : "border-gray-300 bg-white"
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="bookingFor"
                                    value={type}
                                    checked={bookingFor === type}
                                    onChange={(e) =>
                                        setBookingFor(e.target.value)
                                    }
                                    className="accent-[#52B8C5]"
                                />
                                <span className="text-sm font-medium capitalize">
                                    {type}
                                </span>
                            </label>
                        ))}
                    </div>

                    <button className="w-full py-3 px-6 bg-gradient-to-b from-[#49E0F3] to-[#44B7C6]  text-white font-normal text-lg rounded-2xl shadow-xl hover:shadow-2xl  transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40">
                        Conntinue
                    </button>
                </div>
            </div>
        </>
    );
};

export default Appointment;
