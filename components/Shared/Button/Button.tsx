import React from "react";

interface Props {
  text: string;
  event?: any;
  style?: string;
}

const Button = ({ text, event = () => {}, style = "w-full" }: Props) => {
  return (
    <button
      onClick={event}
      className={`${style} py-2 text-black bg-yellow-main hover:opacity-80 font-semibold rounded-md capitalize text-[18px] px-1 font-incon tracking-normal`}
    >
      {text}
    </button>
  );
};

export default Button;
