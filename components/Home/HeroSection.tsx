import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1280px] m-auto sm:gap-4 gap-1 md:px-4 px-3 h-[calc(100vh-90px)] flex flex-col justify-center sm:mt-0 -mt-[90px] items-center">
        {/* title -------->  */}
        <p className="text-[40px] leading-[43px] sm:text-[50px] md:text-[68px] text-center sm:leading-14 md:leading-16 uppercase font-black text-yellow-main font-incon tracking-wider">
          PRIVATE AUCTIONS
        </p>
        {/* Powered by ------> */}
        <p className="text-white/80 text-[18px] sm:text-[26px] md:text-[30px] font-incon font-medium">
          Powered by company
        </p>
        {/* try it now button ------> */}
        <Link
          href="/calltoaction"
          className="mt-5 cursor-pointer text-[24px] text-black font-incon font-semibold tracking-normal hover:opacity-80 bg-yellow-main px-8 py-[6px] sm:py-[8px] rounded-md"
        >
          Try it Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
