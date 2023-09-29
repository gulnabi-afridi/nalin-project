import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1280px] m-auto md:px-4 px-3 h-[calc(100vh-90px)] flex flex-col justify-center items-center -mt-8">
        {/* title -------->  */}
        <p className="text-[68px] uppercase font-black text-yellow-main font-incon tracking-wider">
          PRIVATE AUCTIONS
        </p>
        {/* Powered by ------> */}
        <p className="text-white/80 text-[30px] font-incon font-medium">
          Powered by company
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
