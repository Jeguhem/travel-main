import React from "react";
import hamburger from "../../public/images/hamburger.svg";
import Image from "next/image";
import { SlideInText } from "./animations/animate";
function NavBar() {
  return (
    <SlideInText>
      <div className="hidden lg:flex justify-between items-center text-white">
        <p className="text-[24px] font-bold">Turistoe</p>
        <div className="flex border font-semibold rounded-3xl  px-2 border-white ">
          <div className="py-4 px-5 cursor-pointer">
            <p>About</p>
          </div>
          <div className="py-4 px-5 cursor-pointer">
            <p>Trip</p>
          </div>
          <div className="py-4 px-5 cursor-pointer">
            <p>Blog</p>
          </div>
          <div className="py-4 px-5 cursor-pointer">
            <p>Reviews</p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex justify-between items-center text-white lg:hidden">
        <p className="text-[24px] font-bold">Turistoe</p>
        <div className="flex border font-semibold rounded-3xl h-[48px] w-[48px] items-center justify-center px-2 border-white ">
          <Image src={hamburger} alt="" width={20} height={14} />
        </div>
      </div>
    </SlideInText>
  );
}

export default NavBar;
