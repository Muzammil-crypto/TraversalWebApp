import React from "react";
import Button from "@mui/material/Button";
export const CustomButton = (props: {
  classStyles?: string;
  child: string;
  varient?: "outlined" | "contained";
}) => {
  const { classStyles, child, varient } = props;
  return (
    <Button className={classStyles} variant={varient ? varient : "contained"}>
      {child}
    </Button>
  );
};
