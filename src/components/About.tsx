import React from "react";
import bestwaytotravel from "../../public/images/best-way-to-travel.svg";
import Image from "next/image";
import CountryCard from "./CountryCard";
import { ScaleFadeText } from "./animations/animate";

const CanadaCountryObject = {
  imageLink: "/images/canada.svg",
  countryName: "Canada",
  location: "Banff National Park",
  price: "$3000",
};
const ItalyCountryObject = {
  imageLink: "/images/canada.svg",
  countryName: "Italy",
  location: "Rome",
  price: "$3500",
};
const ChinaCountryObject = {
  imageLink: "/images/china.svg",
  countryName: "China",
  location: "Great Wall Of China",
  price: "$2500",
};
function About() {
  return (
    <div className="py-[80px] lg:py-[120px] flex flex-col gap-[80px] lg:gap-[120px] ">
      <div className=" px-[60px] lg:px-[120px] flex lg:flex-row flex-col justify-between ">
        <div className="max-w-[500px]">
          <h2>Best Way To Travel</h2>
          <div className="flex flex-col gap-[20px] my-[50px]">
            <p>
              We are a travel agency that specializes in creating customized
              travel experiences for our clients. We believe that travel is a
              journey, not just a destination. We want to help our clients
              create memories that will last a lifetime.
            </p>
            <p>
              We have a team of experienced travel professionals who are
              passionate about helping our clients explore the world. We have a
              deep understanding of different cultures and destinations, and we
              can help you plan the perfect trip for your needs and interests.
            </p>
          </div>
          <div className="flex gap-[80px]">
            <h4 className="max-w-[50px]">1000+ Clinets</h4>
            <h4 className="max-w-[50px]">500+ Trips</h4>
          </div>
        </div>

        <ScaleFadeText>
          <div className="p-5 border border-[#003C82] rounded-[20px]">
            <Image
              src={bestwaytotravel}
              alt=""
              width={426}
              height={481}
              className="hover:scale-110 hover:duration-300 hover:transition-transform hover:ease-in-out"
            />
          </div>
        </ScaleFadeText>
      </div>

      <div className="flex flex-col lg:flex-row lg:pl-[120px] relative items-end lg:mt-[100px] mt-[60px] gap-[40px] lg:gap-[120px] justify-between">
        <div className="w-[400px]">
          <h2>Ultimate Travel Experience</h2>
          <div className=" my-[50px]">
            <p>
              We offer a wide range of services, including flight booking, hotel
              booking, car rental, visa assistance, insurance, and tours and
              activities. We work with leading global service providers to
              ensure you have the best possible travel experience. We also offer
              customized solutions for our clients that can be adapted to their
              specific needs and budget.
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="">
          <div className="hidden lg:flex absolute right-0 bottom-0 overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <div className="flex gap-3">
              {/* Card 1 */}
              <CountryCard {...CanadaCountryObject} />
              <CountryCard {...ChinaCountryObject} />
              <CountryCard {...ItalyCountryObject} />
            </div>
          </div>

          <div className="lg:hidden flex overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 space-x-3">
            <div className="flex">
              {/* Card 1 */}
              <div className="flex-shrink-0">
                <CountryCard {...CanadaCountryObject} />
              </div>
              <div className="flex-shrink-0">
                <CountryCard {...ChinaCountryObject} />
              </div>
              <div className="flex-shrink-0">
                <CountryCard {...ItalyCountryObject} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-[#0B4386] text-white w-full py-[60px]">
          <h2 className="text-center">Travel Memories</h2>
        </div>
        <div className=" hidden lg:flex text-white gap-4 mt-[50px] px-[120px] ">
          <div className=" border border-[#003C82] p-3 rounded-3xl border-dashed">
            <div
              className="lg:w-[200px] rounded-2xl p-[10px] flex items-end  h-[450px] hover:scale-110 hover:transition-shadow duration-200"
              style={{
                backgroundImage: "url('/images/paris.svg')",
                backgroundSize: "cover",
              }}
            >
              <div className="">
                <h3>Paris</h3>
                <ul className="list-disc pl-5">
                  <li className="text-[12px] ">10 trips</li>
                  <li className="text-[12px] ">120 travellers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className=" border border-[#003C82] p-3 rounded-3xl border-dashed">
              <div
                className="w-[500px] p-[10px] flex items-end rounded-2xl h-[200px] hover:scale-110 hover:transition-shadow duration-200"
                style={{
                  backgroundImage: "url('/images/usa.svg')",
                  backgroundSize: "cover",
                }}
              >
                <div className="">
                  <h3>U.S.A</h3>
                  <ul className="list-disc pl-5">
                    <li className="text-[12px] ">2 trips</li>
                    <li className="text-[12px] ">30 travellers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className=" border border-[#003C82] p-3 rounded-3xl border-dashed">
                <div
                  className="w-[230px] p-[10px] flex items-end rounded-2xl h-[200px] hover:scale-110 hover:transition-shadow duration-200"
                  style={{
                    backgroundImage: "url('/images/japan.svg')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="">
                    <h3>Japan</h3>
                    <ul className="list-disc pl-5">
                      <li className="text-[12px] ">5 trips</li>
                      <li className="text-[12px] ">80 travellers</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" border border-[#003C82] p-3 rounded-3xl border-dashed">
                <div
                  className="w-[230px] p-[10px] flex items-end rounded-2xl h-[200px] hover:scale-110 hover:transition-shadow duration-200"
                  style={{
                    backgroundImage: "url('/images/belarus.svg')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="">
                    <h3>Belarus</h3>
                    <ul className="list-disc pl-5">
                      <li className="text-[12px] ">4 trips</li>
                      <li className="text-[12px] ">60 travellers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className=" lg:hidden flex flex-col text-white gap-4 mt-[50px] px-5 ">
          <div
            className="w-[353px] h-[327px] p-[10px] flex items-end rounded-2xl "
            style={{
              backgroundImage: "url('/images/paris.svg')",
              backgroundSize: "cover",
            }}
          >
            <div className="">
              <h3>Paris</h3>
              <ul className="list-disc pl-5">
                <li className="text-[12px] ">10 trips</li>
                <li className="text-[12px] ">120 travellers</li>
              </ul>
            </div>
          </div>
          <div
            className="w-[353px] h-[327px] p-[10px] flex items-end rounded-2xl  "
            style={{
              backgroundImage: "url('/images/usa.svg')",
              backgroundSize: "cover",
            }}
          >
            <div className="">
              <h3>U.S.A</h3>
              <ul className="list-disc pl-5">
                <li className="text-[12px] ">2 trips</li>
                <li className="text-[12px] ">30 travellers</li>
              </ul>
            </div>
          </div>
          <div
            className="w-[353px] h-[327px] p-[10px] flex items-end rounded-2xl "
            style={{
              backgroundImage: "url('/images/japan.svg')",
              backgroundSize: "cover",
            }}
          >
            <div className="">
              <h3>Japan</h3>
              <ul className="list-disc pl-5">
                <li className="text-[12px] ">5 trips</li>
                <li className="text-[12px] ">80 travellers</li>
              </ul>
            </div>
          </div>{" "}
          <div
            className="w-[353px] h-[327px] p-[10px] flex items-end rounded-2xl "
            style={{
              backgroundImage: "url('/images/belarus.svg')",
              backgroundSize: "cover",
            }}
          >
            <div className="">
              <h3>Belarus</h3>
              <ul className="list-disc pl-5">
                <li className="text-[12px] ">4 trips</li>
                <li className="text-[12px] ">60 travellers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
