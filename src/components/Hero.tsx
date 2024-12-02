"use client";
import React, { useState } from "react";
import NavBar from "./NavBar";
import chevrondown from "../../public/images/chevron-down.svg";
import Image from "next/image";
import search from "../../public/images/search.svg";
import { Calendar } from "./ui/calendar";

function Hero() {
  const [showCalender, setShowCalender] = useState(false);

  const toggleCalender = () => {
    setShowCalender(!showCalender);
  };
  return (
    <div
      className="h-screen bg-cover  py-[40px] px-6 lg:px-[120px] bg-center"
      style={{
        backgroundImage: "url('/images/main-travel-background.svg')",
      }}
    >
      <NavBar />
      <div className="flex flex-col items-center mt-[30px]">
        <div className="max-w-[1000px] text-center text-white">
          <h1 className=" leading-snug tracking-tight  animate__animated animate__fadeInUp">
            Explore Our Delightful World
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center mt-[20px] ">
          <div className="rounded-[50px] h-[48px] items-center bg-white justify-between w-full flex lg:gap-[60px] ">
            <div className="flex px-6">
              <input
                type="text"
                className="bg-transparent outline-none "
                placeholder="Search"
              />
            </div>
            <div className="blue-bg rounded-full flex items-center justify-center w-[38px] mx-[5px] h-[38px]">
              <Image src={search} alt="" width={20} height={20} />
            </div>
          </div>{" "}
          <div
            className="flex px-[35px] py-1 blue-bg rounded-lg h-[38px] cursor-pointer border-[#003C82] gap-2"
            onClick={toggleCalender}
          >
            <p className="text-white  flex items-center justify-center font-semibold">
              Date
            </p>{" "}
            {/* <Image src={chevrondown} alt="chevron down" /> */}
            {showCalender && (
              <div className="absolute bg-white rounded-xl border mt-[40px] ml-[-30px] lg:ml-[-50px] ">
                <Calendar />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
