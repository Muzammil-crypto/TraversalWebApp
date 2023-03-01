import React from "react";
import { Paragraph } from "../Typography/Typography";

export const TextArea = (props: {
  value: string;
  name: string;
  placeholder: string;
  label?: string;
  inputStyles?: string;
}) => {
  const { value, name, placeholder, inputStyles, label } = props;
  return (
    <div className="my-2">
      <Paragraph>{label}</Paragraph>
      <textarea
        className={`border border-gray rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent  ${inputStyles}`}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
