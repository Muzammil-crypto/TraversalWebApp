import React from "react";

export const CustomDropdown = (props: {
  options?: string;
  label?: string;
  defaultValue?: string;
  styles?: string;
}) => {
  const { options, label, defaultValue, styles } = props;
  return (
    <div className={`flex flex-col my-5 `}>
      <label htmlFor="custom-select">{label}</label>
      <select
        className={`custom-select p-3.5 w-96 border border-gray rounded-lg px-1 shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent ${styles} `}
        placeholder="Select here"
        value={options}
      >
        <option value="0">{defaultValue}</option>
      </select>
    </div>
  );
};
