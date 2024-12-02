import React from "react";

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
          <div className="lg:border rounded-2xl p-3 w-full lg:max-w-[300px]">
            <h4 className="font-bold mb-4">Turistoe</h4>
            <p>
              We create unforgettable travel experiences that you'll cherish
              forever.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Take a trip with us */}
          <div className="lg:border p-3 rounded-2xl ">
            <h4 className="font-bold mb-4">Take a trip with us</h4>
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
          </div>

          {/* About */}
          <div className="lg:border rounded-2xl p-4 w-full lg:w-fit lg:min-w-[200px]">
            <h4 className="font-bold mb-4">About</h4>
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
          </div>

          {/* Support */}
          <div className="lg:border p-3 rounded-2xl">
            <h4 className="font-medium mb-4 ">Support</h4>
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
          </div>
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