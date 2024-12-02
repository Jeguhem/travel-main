import React from "react";
import Image from "next/image";
import { ScaleFadeText } from "./animations/animate";

const reviews = [
  {
    name: "Alex",
    image: "/images/photo1.svg",
    review:
      "I had a wonderful trip to China. The travel agency did a great job of planning my trip and making everything go smoothly. I would definitely recommend them to anyone planning a trip to China.",
  },
  {
    name: "Client 1",
    image: "/images/photo2.svg",
    review:
      "I was looking for an affordable and relaxing honeymoon and I found a great deal through the travel agency. The agent I worked with was very helpful and she was able to find me a great flight and hotel at a price that fit my budget.",
  },
  {
    name: "Client 2",
    image: "/images/photo3.svg",
    review:
      "The travel agency was very helpful and knowledgeable. They answered all of my questions and made sure that everything I needed for my trip would be taken care of. I would definitely use their services again.",
  },
  {
    name: "Client 3",
    image: "/images/photo4.svg",
    review:
      "I had a great time in China. The travel agency was very helpful and they made everything go smoothly. I would definitely recommend them to anyone planning a trip to China.",
  },
];

function Testimonials() {
  return (
    <div>
      <div className="flex flex-col items-center gap-5 bg-[#0B4386] py-[60px] text-white">
        {/* Section Title */}
        <ScaleFadeText><h2 className="">Our Happy Clients</h2></ScaleFadeText>
      </div>
      {/* Carousel */}
      <ScaleFadeText className="flex gap-5 px-5 my-12 justify-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 p-5 rounded-lg max-w-[280px] bg-white shadow-md text-black"
          >
            <div className="p-2 bg-[#ECF5FF] rounded-[12px]">
              <p className="mt-2 text-center text-sm">{review.review}</p>
            </div>
            {/* Client Image */}
            <div className="flex justify-center">
              <Image
                src={review.image}
                alt={`${review.name}'s photo`}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            {/* Client Name */}
            <h3 className="mt-4 text-center text-lg font-semibold">
              {review.name}
            </h3>
            {/* Client Review */}
          </div>
        ))}
      </ScaleFadeText>
    </div>
  );
}

export default Testimonials;
