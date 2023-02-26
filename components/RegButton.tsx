import React from "react";

interface IButtonProps {
  title?: string;
}

const RegButton = ({ title }: IButtonProps) => {
  return (
    <button
      type="button"
      className={`hover:bg-white flex items-center font-bold justify-center bg-[#3270fc] border-[#3270fc] hover:text-[#3270fc] border text-white  transition duration-150 ease-out rounded-[8px] h-[52px] mb-[15px] mx-auto  w-full active:scale-90 `}
    >
      {title}
    </button>
  );
};

export default RegButton;
