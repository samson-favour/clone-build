import React from "react";

interface IInputProps {
  placeholder?: string;
  register: any
  name:string
  onChange?: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const RegInput = ({ onChange, placeholder, register,name }: IInputProps) => {
  return (
    <input
      {...register(name)}
      onChange={onChange}
      type="text"
      className="w-full  border rounded-tl-[8px] focus:ring-0 rounded-bl-[8px] border-[#ebebeb]  text-[#484848] text-[14px] h-[52px]"
      placeholder={placeholder}
    />
  );
};

export default RegInput;
