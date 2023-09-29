import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1280px] m-auto sm:gap-4 gap-1 md:px-4 px-3 h-[calc(100vh-90px)] flex flex-col justify-center items-center">
        {/* title -------->  */}
        <p className="text-[40px] leading-[43px] sm:text-[50px] md:text-[68px] text-center sm:leading-14 md:leading-16 uppercase font-black text-yellow-main font-incon tracking-wider">
          PRIVATE AUCTIONS
        </p>
        {/* Powered by ------> */}
        <p className="text-white/80 text-[16px] sm:text-[26px] md:text-[30px] font-incon font-medium">
          Powered by company
        </p>
        {/* try it now button ------> */}
        <button className="mt-5 text-[24px] text-black font-incon font-semibold tracking-normal hover:opacity-80 bg-yellow-main px-8 py-2 rounded-md">
          Try it Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
