import Image from "next/image";
import React from "react";
import location from "../../public/images/location.svg";

function CountryCard(countryObject: CountryCardObject) {
  return (
    <div className=" shadow-lg py-[6px] px-[4px] lg:border text-white border-[#003C82] rounded-[20px]">
      <div
        className="lg:hover:scale-105 border w-[200px] rounded-[20px] hover:duration-300 h-[400px] hover:transition-transform hover:ease-in-out"
        style={{
          backgroundImage: `url(${countryObject.imageLink})`,
          backgroundSize: "cover",
        }}
      >
        <div className="p-4 flex flex-col h-full justify-between">
          <div className="flex gap-2">
            <Image src={location} alt="" width={16} height={20} />
            <p className="font-medium text-[32px]">
              {countryObject.countryName}
            </p>
          </div>

          <div className="">
            <h4 className="">{countryObject.location}</h4>
            <div className="flex justify-between items-center">
              <button className="px-3 py-1 border-white border rounded-[30px] text-white">
                Book Now
              </button>
              <p className="mt-2 font-bold">{countryObject.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;

export interface CountryCardObject {
  imageLink: string;
  countryName: string;
  location: string;
  price: string;
}
