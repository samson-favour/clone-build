import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { RegBtnSocialProps } from "../interfaces/RegBtnSocial";

const RegSocialButton = ({
  color,
  title,
  backgroundColor,
  icon,
  borderColor
}: RegBtnSocialProps) => {
  return (
    <button
      type="button"
      className={`${color}  border ${borderColor} ${
        backgroundColor ? `hover:bg-[#506dab]` : "hover:bg-[#dd4b39]"
      }  hover:text-white transition duration-150 ease-out rounded-[8px] h-[52px] mb-[20px] pl-[16px] flex w-full`}
    >
      <span className="my-auto mt-4 ">{icon}</span>
      <span className="-ml-4 text-center w-full mx-auto my-auto text-[14px] ">
        {title}
      </span>
    </button>
  );
};

export default RegSocialButton;
