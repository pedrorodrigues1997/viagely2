import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
function Everything() {
  const everythingData = [
    {
        title: "Unlock the world with curated itineraries",
        subtitle:
          "Explore destinations like never before with our handpicked itineraries crafted by experienced travelers.",
      },
    {
      title: "Budget-friendly choices",
      subtitle:
        "Find itineraries for every budget. We offer a range of options to suit different financial constraints, without compromising on the quality of your experience.",
    },
    {
      title: "Save time and energy",
      subtitle:
        "No need to spend hours planning your trip. Our ready-made itineraries take the guesswork out of travel, so you can focus on enjoying the journey.",
    },
    {
      title: "Discover hidden gems",
      subtitle:
        "Uncover the hidden treasures of each destination with our carefully curated itineraries, showcasing unique and off-the-beaten-path experiences.",
    },
    {
      title: "Customer satisfaction guaranteed",
      subtitle:
        "We prioritize your satisfaction and strive to provide exceptional service. If you're not happy with your chosen itinerary, we'll work with you to find a suitable alternative.",
    },
  ];
  return (
    <div className="bg-[#f1fdf7] flex py-20 justify-between px-24">
      <div>
        <h2 className="text-4xl mb-5 text-[#404145] font-bold">
          The best part? Everything.
        </h2>
        <ul className="flex flex-col gap-10">
          {everythingData.map(({ title, subtitle }) => {
            return (
              <li key={title}>
                <div className="flex gap-2 items-center text-xl">
                  <BsCheckCircle className="text-[#62646a]" />
                  <h4>{title}</h4>
                </div>
                <p className="text-[#62646a]">{subtitle}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative h-96 w-2/4">
        <Image src="/everything.png" fill alt="everything" />
      </div>
    </div>
  );
}

export default Everything;
