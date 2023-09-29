import React from "react";
import { BiSolidLockAlt } from "react-icons/bi";

interface Props {
  event?: any;
  style?: string;
}

const Button = ({ event = () => {}, style = "w-full" }: Props) => {
  return (
    <button
      onClick={event}
      className={`${style} h-[40px] flex justify-center items-center bg-yellow-main hover:opacity-80 font-semibold rounded-md capitalize px-1`}
    >
      <BiSolidLockAlt className="text-black text-[18px]" />
    </button>
  );
};

export default Button;
