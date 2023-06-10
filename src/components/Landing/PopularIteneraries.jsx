import React from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import ViagelyLogo from './ViagelyLogo';

function PopularInteneraries(){

    const router = useRouter();
    const popularServicesData = [
      { name: "Cultural Excursion", label: "Uncover the world's treasures and ignite your sense of wonder.", image: "/culturalTrip.png" },
      { name: "Beach Vacation", label: "Dive into relaxation and soak up the sun!", image: "/beachTrip.jpg" },
      {
        name: "Snow Vacation",
        label: "Embrace the chill and create memories in a winter wonderland.",
        image: "/snowTrip.webp",
      },
      {
        name: "Adventure Travel",
        label: "Seek thrills, conquer new heights, and unleash your inner explorer.",
        image: "/adventureTravel.jpg",
      },
      {
        name: "Business Trip",
        label: "Make the most out of your next business trip.",
        image: "/businessTrip.jpg",
      },
      { name: "City Exploration", label: "Experience the pulse of the city and immerse yourself in urban delights.", image: "/cityTravel.jpg" },
      {
        name: "Camping",
        label: "Color your dreams",
        image: "/camping.webp",
      },
      { name: "Road Trip", label: "Hit the open road and discover hidden gems along the way.", image: "/roadTrip.webp" },

      { name: "Romantic Escape", label: "Ignite the spark and create unforgettable moments with your loved one.", image: "/romanticEscape.jpg" },

      { name: "Family Fun", label: "Bond, laugh, and create cherished memories with your loved ones.", image: "/familyFun.jpg" },

      { name: "Foodie Getaway", label: " Indulge your taste buds and savor culinary delights from around the world.", image: "/foodieGetaway.jpg" },
    ];
  


    return (
        <div className="mx-20 my-16 ">
          <h2 className="text-4xl mb-5 text-[#404145] font-bold">
            Popular Trips
          </h2>
          <ul className="flex flex-wrap gap-16">
            {popularServicesData.map(({ name, label, image }) => {
              return (
                <li
                  key={name}
                  className="relative cursor-pointer"
                  onClick={() => router.push(`/search?q=${name.toLowerCase()}`)}
                >
                  <div className="absolute z-10 text-white left-5 top-4">
                    <span>{label}</span>
                    <h6 className="font-extrabold text-2xl">{name}</h6>
                  </div>
                  <div className="h-80 w-72 ">
                    <Image src={image} fill alt="service" />
                  </div>
                </li>
              );
            })}
          </ul>
          <ViagelyLogo />
        </div>
      );
    }
    
    export default PopularInteneraries;
    