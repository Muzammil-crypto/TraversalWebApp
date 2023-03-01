import React, { useContext } from "react";
import styled, { CSSProperties } from "styled-components";
import styles from "./styles.module.css";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import { SizeContext } from "@/contexts/sizeContext";
import useWindowSize from "@/features/Sections/Processes/ProcessCard";

interface CustomProps
  extends TypographyProps,
    SpaceProps,
    ColorProps,
    FlexProps,
    LayoutProps,
    BorderProps {
  ref?: any;
  as?: any;
  title?: string;
  className?: string;
  ellipsis?: boolean;
  style?: CSSProperties;
  onClick?: (e: any) => void;
  [key: string]: any;
}
const Typography: React.FC<CustomProps> = styled.div<CustomProps>`
  ${(props) =>
    props.ellipsis
      ? `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  `
      : ""}

  ${border}
  ${typography}
  ${space}
  ${color}
  ${flex}
  ${layout}
`;

export const H1: React.FC<CustomProps> = (props) => (
  <Typography
    as="h1"
    fontSize={useWindowSize().width <= 600 ? "34px" : "48px"}
    fontWeight={700}
    lineHeight="56.25px"
    fontFamily={"sans-serif"}
    {...props}
  />
);
export const H2: React.FC<CustomProps> = (props) => (
  <Typography
    as="h2"
    fontSize={useWindowSize().width <= 600 ? "28px" : "40px"}
    fontWeight={700}
    lineHeight="46.88px"
    fontFamily={"sans-serif"}
    {...props}
  />
);
export const H3: React.FC<CustomProps> = (props) => (
  <Typography
    className={styles.h1}
    as="h3"
    fontSize={useWindowSize().width <= 600 ? "20px" : "35px"}
    fontWeight={700}
    lineHeight="41.02px"
    fontFamily={"sans-serif"}
    {...props}
  />
);
export const H4: React.FC<CustomProps> = (props) => (
  <Typography
    as="h4"
    fontSize={useWindowSize().width <= 600 ? "18px" : "26px"}
    fontWeight={700}
    lineHeight="41.02px"
    fontFamily={"sans-serif"}
    {...props}
  />
);
export const H5: React.FC<CustomProps> = (props) => (
  <Typography
    as="h5"
    fontSize={useWindowSize().width <= 600 ? "18px" : "26px"}
    fontWeight={400}
    lineHeight="35.52px"
    fontFamily={"sans-serif"}
    {...props}
  />
);
export const H6: React.FC<CustomProps> = (props) => (
  <Typography
    as="h6"
    fontSize={useWindowSize().width <= 600 ? "14px" : "16px"}
    fontWeight={400}
    lineHeight="21.79px"
    fontFamily={"sans-serif"}
    {...props}
  />
);

export const Paragraph: React.FC<CustomProps> = (props) => (
  <Typography as="p" mb="0" mt="0" {...props} />
);

export const Span: React.FC<CustomProps> = (props) => (
  <Typography as="span" fontSize="16px" {...props} />
);
export const SemiSpan: React.FC<CustomProps> = (props) => (
  <Typography as="span" fontSize="14px" color="text.muted" {...props} />
);
export const Small: React.FC<CustomProps> = (props) => (
  <Typography as="span" fontSize="12px" {...props} />
);
export const Tiny: React.FC<CustomProps> = (props) => (
  <Typography as="span" fontSize="10px" {...props} />
);

export default Typography;
