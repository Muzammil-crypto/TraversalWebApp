import React from "react";
import Button from "@mui/material/Button";
import { CSSProperties } from "styled-components";
export const CustomButton = (props: { classStyles: string; child: string }) => {
  const { classStyles, child } = props;
  return (
    <Button className={classStyles} variant={"contained"}>
      {child}
    </Button>
  );
};
