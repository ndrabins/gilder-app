import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Typography } from "./Typography";
// import * as Unicons from "@iconscout/react-native-unicons";
import { useTheme } from "styled-components";

interface ButtonProps {
  title: string;
  size?: "default" | "small";
  onPress: any;
  marginRight?: boolean;
  shade?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
  color?:
    | "gray"
    | "primary"
    | "secondary"
    | "aqua"
    | "purple"
    | "error"
    | "warning";
  isLoading?: boolean;
  disabled?: boolean;
}

export const Button = ({
  title,
  size = "default",
  onPress,
  marginRight = false,
  shade = "800",
  color = "gray",
  isLoading = false,
  disabled = false,
}: ButtonProps) => {
  const theme = useTheme();
  return (
    <ButtonContainer
      onPress={onPress}
      marginRight={marginRight}
      shade={shade}
      color={color}
      disabled={disabled}
    >
      {/* <Unicons.UilWallet
          size="20"
          color={theme.gray[400]}
          style={{ marginRight: 8 }}
        /> */}
      {isLoading ? (
        <Loading color={theme.gray[300]} />
      ) : (
        <Typography text={title} bold={true} marginBottom="0" />
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity<{
  marginRight: boolean;
  disabled: boolean;
  shade: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
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
  min-height: 48px;
  max-height: 48px;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: ${(props) => (props.marginRight ? props.theme.spacing[3] : 0)};
  padding: ${(props: any) => props.theme.spacing[2]};
  background: ${(props) => props.theme[props.color][props.shade]};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Loading = styled.ActivityIndicator``;
