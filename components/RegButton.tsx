import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../components/common/Spinner'

interface IButtonProps {
  title?: string;
}

const RegButton = ({ title }: IButtonProps) => {
   const { loading, userInfo, error, success } = useSelector(
     (state:any) => state.auth
   );
  return (
    <button
      type="submit"
      className={`hover:bg-gray-50 flex items-center font-bold justify-center bg-[#3270fc] border-[#3270fc] hover:text-[#3270fc] hover:border-[#3270fc] border text-gray-50  transition duration-150 ease-out rounded-[8px] h-[52px] mb-[15px] mx-auto  w-full active:scale-90 `}
    >
      {loading && <Spinner/>}
      {title}
    </button>
  );
};

export default RegButton;
