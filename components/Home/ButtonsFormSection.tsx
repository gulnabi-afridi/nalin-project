import React from "react";
import Button from "../Shared/Button/Button";

const ButtonsFormSection = () => {
  return (
    <div id="formButtonSection" className="w-full min-h-screen">
      <div className="w-full h-full max-w-[1320px] m-auto md:px-4 px-3 flex justify-center items-center">
        {/* buttons + form ---------------------->  */}
        <div className="w-full flex flex-col gap-4">
          {/* three rows of 15 buttons */}
          {[0, 1].map((item, index) => {
            return (
              <div
                key={index}
                className="w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 xl:grid-cols-15 gap-2"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                  (item, index) => {
                    return <Button text={`button`} style="w-full"></Button>;
                  }
                )}
              </div>
            );
          })}
          {/* 3 rows with 4 buttons each side and at center form --------------------> */}
          <div className="w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 xl:grid-cols-15">
            {/* first 4 buttons  */}
            <div className="col-span-4 sm:col-span-3 md:col-span-4 grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-2 gap-y-4">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
                return (
                  <Button key={index} text="button" style="w-full"></Button>
                );
              })}
            </div>
            {/* form ----->  */}
            <div className="col-span-4 sm:col-span-2 md:col-span-4 xl:col-span-7 sm:py-0 py-4">
              <div className="w-full flex flex-col gap-3 px-2 md:px-4 xl:px-10">
                {/* input with label --> */}
                <div className="w-full flex flex-col gap-1">
                  <p className="text-white text-[16px] font-incon font-medium">
                    Email
                  </p>
                  <input
                    type="email"
                    className="w-full h-[45px] focus:outline-none rounded-md px-3 text-[20px] font-incon font-semibold text-black"
                  />
                </div>
                {/* two checkboxes ------------> */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-3">
                  <div className="w-full flex justify-start items-center gap-2">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      value="Bike"
                    />
                    <label
                      className="text-white cursor-pointer leading-5 select-none text-[18px] font-semibold font-incon"
                      htmlFor="agree"
                    >
                      {" "}
                      Agree terms and conditions
                    </label>
                  </div>
                  <div className="w-full flex gap-2 items-center justify-start md:justify-end">
                    <input
                      type="checkbox"
                      id="saveEmail"
                      name="saveEmail"
                      value="Bike"
                    />
                    <label
                      className="text-white cursor-pointer leading-5 select-none text-[18px] font-semibold font-incon"
                      htmlFor="saveEmail"
                    >
                      {" "}
                      Save email
                    </label>
                  </div>
                </div>
                {/* submit button ---------->  */}
                <div className="w-full flex justify-center items-center">
                  <button className="px-6 py-2 bg-yellow-main rounded-md font-semibold hover:opacity-80 text-[20px] text-black font-incon">
                    Submit Now
                  </button>
                </div>
              </div>
            </div>

            {/* last 4 buttons */}
            <div className="col-span-4 sm:col-span-3 md:col-span-4 grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-2 gap-y-4">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
                return (
                  <Button key={index} text="button" style="w-full"></Button>
                );
              })}
            </div>
          </div>
          {/* last three rows of of buttons */}
          {[0, 1].map((item, index) => {
            return (
              <div
                key={index}
                className="w-full grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 xl:grid-cols-15 gap-2"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                  (item, index) => {
                    return <Button text={`button`} style="w-full"></Button>;
                  }
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ButtonsFormSection;
