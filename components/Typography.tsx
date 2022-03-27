import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
// import * as Unicons from "@iconscout/react-native-unicons";

interface TypographyProps {
  text: string;
  size?: "h1" | "h2" | "h3" | "h4" | "body" | "subtitle" | "caption";
  textAlign?: "center" | "left" | "right";
  bold?: boolean;
  shade?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
  color?:
    | "gray"
    | "primary"
    | "secondary"
    | "aqua"
    | "purple"
    | "error"
    | "warning";
  marginBottom?: "1" | "2" | "3" | "4" | "5";
}

const sizeMapping = {
  h1: 48,
  h2: 36,
  h3: 28,
  h4: 22,
  body: 16,
  subtitle: 12,
  caption: 10,
};

export const Typography = ({
  text,
  size = "body",
  textAlign = "left",
  bold = false,
  shade = "100",
  color = "gray",
  marginBottom = "1",
}: TypographyProps) => {
  return (
    <Text
      textAlign={textAlign}
      size={size}
      bold={bold}
      shade={shade}
      color={color}
      marginBottom={marginBottom}
    >
      {text}
    </Text>
  );
};

const Text = styled.Text<{
  textAlign: "center" | "left" | "right";
  size: "h1" | "h2" | "h3" | "h4" | "body" | "subtitle" | "caption";
  bold: boolean;
  shade: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
  marginBottom: "1" | "2" | "3" | "4" | "5";
  color:
    | "gray"
    | "primary"
    | "secondary"
    | "aqua"
    | "purple"
    | "error"
    | "warning";
}>`
  flex-direction: row;
  font-size: ${(props) => sizeMapping[props.size]}px;
  line-height: ${(props) => sizeMapping[props.size] * 1.5}px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) => props.theme[props.color][props.shade]};
  margin-bottom: ${(props) => props.theme.spacing[props.marginBottom]};
`;