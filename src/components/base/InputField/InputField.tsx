import React from "react";

export const InputField = (props: {
  value: string;
  name: string;
  placeholder: string;
  type: string;
  inputStyles?: string;
}) => {
  const { value, name, placeholder, type, inputStyles } = props;
  return (
    <input
      className={`border border-gray w-80 rounded-md ${inputStyles}`}
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  );
};
