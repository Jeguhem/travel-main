"use client";
import React, { useState } from "react";
import NavBar from "./NavBar";
import Image from "next/image";
import search from "../../public/images/search.svg";
import { ScaleFadeText, SlideInText, SlideUpText } from "./animations/animate";

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
        <SlideUpText
          delay={0}
          className="max-w-[1000px] text-center text-white"
        >
          <h1 className=" leading-snug tracking-tight  ">
            Explore Our Delightful World
          </h1>
        </SlideUpText>

        <ScaleFadeText
          delay={0.5}
          className="flex flex-col lg:flex-row gap-6 items-center mt-[20px] "
        >
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
              // <div className="absolute bg-white rounded-xl border mt-[40px] ml-[-30px] lg:ml-[-50px] ">
              //   <Calendar
              //     components={{
              //       IconLeft: (props) => (
              //         <ChevronLeft
              //           {...props}
              //           className="h-6 w-6 text-primary"
              //         />
              //       ),
              //       IconRight: (props) => (
              //         <ChevronRight
              //           {...props}
              //           className="h-6 w-6 text-primary "
              //         />
              //       ),
              //     }}
              //     showOutsideDays={true}
              //   />
              // </div>
              <div></div>
            )}
          </div>
        </ScaleFadeText>
      </div>
    </div>
  );
}

export default Hero;
