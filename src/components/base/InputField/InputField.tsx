import React from "react";
import { Paragraph } from "../Typography/Typography";

export const InputField = (props: {
  value: string;
  name: string;
  placeholder: string;
  type: string;
  label?: string;
  inputStyles?: string;
}) => {
  const { value, name, placeholder, type, inputStyles, label } = props;
  return (
    <div className="my-2">
      <Paragraph>{label}</Paragraph>
      <input
        className={`border border-gray rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent  ${inputStyles}`}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
