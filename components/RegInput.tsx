import React from "react";

interface IInputProps {
  placeholder?: string;
  onChange?: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const RegInput = ({ onChange, placeholder }: IInputProps) => {
  return (
    <input
      onChange={onChange}
      type="text"
      className="w-full  border rounded-tl-[8px] focus:ring-0 rounded-bl-[8px] border-[#ebebeb]  text-[#484848] text-[14px] h-[52px]"
      placeholder={placeholder}
    />
  );
};

export default RegInput;
