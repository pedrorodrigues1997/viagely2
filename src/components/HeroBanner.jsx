import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
function HomeBanner() {
  const router = useRouter();
  const [image, setImage] = useState(1);
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    const interval = setInterval(
      () => setImage(image >= 9 ? 1 : image + 1),
      10000
    );
    return () => clearInterval(interval);
  }, [image]);

  return (
    <div className="h-[680px] flex justify-center bg-cover">
      <div className="absolute top-0 h-[680px]  w-[1440px] transition-opacity z-0">
        <Image
          alt="hero"
          src="/Fundo1.jpg"
          fill
          className={`${
            image === 1 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/Fundo2.jpg"
          fill
          className={`${
            image === 2 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/Fundo3.jpg"
          fill
          className={`${
            image === 3 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/England.jpg"
          fill
          className={`${
            image === 4 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/LosAngeles.jpg"
          fill
          className={`${
            image === 5 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/NewYork.jpg"
          fill
          className={`${
            image === 6 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/Paris.jpg"
          fill
          className={`${
            image === 7 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/Portugal.jpg"
          fill
          className={`${
            image === 8 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/RomeItaly.jpg"
          fill
          className={`${
            image === 9 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        
      </div>
      <div className="z-10 w-[1440px] flex justify-center flex-col h-full gap-5 ml-40">
        <h1 className="text-white text-5xl leading-snug">
          Find the perfect&nbsp;
          <i>Plan</i>
          <br />
          for your next trip
        </h1>
        <div className="flex align-middle">
          <div className="relative">
            <IoSearchOutline className="absolute text-gray-500 text-2xl flex align-middle h-full left-2" />
            <input
              type="text"
              className="h-14 w-[450px] pl-10 rounded-md rounded-r-none"
              placeholder={`Try "Tokyo"`}
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
          <button
            className="bg-[#1DBF73] text-white px-12 text-lg font-semibold rounded-r-md"
            onClick={() => router.push(`/search?q=${searchData}`)}
          >
            Search
          </button>
        </div>
        <div className="text-white flex gap-4">
          Popular:
          <ul className="flex gap-5">
            <li
              className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300	cursor-pointer"
              onClick={() => router.push("/search?q=website design")}
            >
              Japan
            </li>
            <li
              className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300	cursor-pointer"
              onClick={() => router.push("/search?q=wordpress")}
            >
              USA
            </li>
            <li
              className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300	cursor-pointer"
              onClick={() => router.push("/search?q=logo design")}
            >
              Portugal
            </li>
            <li
              className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300	cursor-pointer"
              onClick={() => router.push("/search?q=ai services")}
            >
              Italy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
