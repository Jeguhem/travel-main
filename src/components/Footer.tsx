import React from "react";
import facebook from "../../public/images/facebook.svg";
import instagram from "../../public/images/instagram.svg";
import twitter from "../../public/images/twitter.svg";
import youtube from "../../public/images/youtube.svg";
import Image from "next/image";
import { SlideInText } from "./animations/animate";

const Footer = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center h-[400px] justify-center"
        style={{
          backgroundImage: "url('/images/footer-image.svg')",
          backgroundSize: "cover",
        }}
      ></div>
      <footer className="bg-[#003C82] text-white py-12">
        <div className="container mx-auto px-4 flex-col lg:flex-row flex gap-5 justify-between">
          {/* Turistoe */}
          <SlideInText  className="lg:border rounded-2xl p-3 w-full lg:max-w-[300px]">
            <h4 className="font-bold">Turistoe</h4>
            <div className="border-t mb-4 "></div>
            <p>
              We create unforgettable travel experiences that you&apos;ll
              cherish forever.
            </p>
            <div className="flex  space-x-4 pt-4">
              <div className=" rounded-full w-[40px] border  h-[40px] flex items-center justify-center ">
                <Image src={instagram} alt="" width={20} height={20} />
              </div>
              <div className=" rounded-full w-[40px] border  h-[40px] flex items-center justify-center ">
                <Image src={facebook} alt="" width={20} height={20} />
              </div>
              <div className=" rounded-full w-[40px] border  h-[40px] flex items-center justify-center ">
                <Image src={youtube} alt="" width={20} height={20} />
              </div>
              <div className=" rounded-full w-[40px] border  h-[40px] flex items-center justify-center ">
                <Image src={twitter} alt="" width={20} height={20} />
              </div>
            </div>
          </SlideInText>

          {/* Take a trip with us */}
          <SlideInText delay={0.1} className="lg:border p-3 rounded-2xl ">
            <h4 className="font-bold">Take a trip with us</h4>
            <div className="border-t mb-4 "></div>

            <p>
              Subscribe to be the first to know about our new deals and get
              exclusive offers.
            </p>
            <div className="mt-4 flex jus rounded-3xl p-1 bg-white">
              <input
                type="email"
                placeholder="Enter your email address"
                className=" w-full mx-3 text-black outline-none"
              />
              <button className="blue-bg text-white font-medium py-2 px-4 rounded-3xl  ml-2 hover:bg-gray-300">
                Subscribe
              </button>
            </div>
          </SlideInText>

          {/* About */}
          <SlideInText delay={0.2} className="lg:border rounded-2xl p-4 w-full lg:w-fit lg:min-w-[200px]">
            <h4 className="font-bold ">About</h4>
            <div className="border-t mb-4 "></div>
            <ul className="space-y-2 list-disc pl-7">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Partners
                </a>
              </li>
            </ul>
          </SlideInText>

          {/* Support */}
          <SlideInText delay={0.3} className="lg:border p-3 rounded-2xl">
            <h4 className="font-medium ">Support</h4>
            <div className="border-t mb-4 "></div>
            <ul className="space-y-2 list-disc pl-7">
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </SlideInText>
        </div>
        <div className="w-full flex items-end justify-center mt-10">
          {" "}
          <p className="text-center ">Copyright ©2023. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
