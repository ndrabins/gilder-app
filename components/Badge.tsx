import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

interface BadgeProps {
  title: string;
  type: "success" | "pending" | "error" | "gray" | "warning";
  size?: "default" | "small";
}

export const Badge = ({ title, type, size = "default" }: BadgeProps) => {
  return (
    <BadgeFlexContainer>
      <BadgeContainer type={type}>
        <BadgeText type={type}>{title || "Title"}</BadgeText>
      </BadgeContainer>
    </BadgeFlexContainer>
  );
};

const BadgeFlexContainer = styled.View`
  align-items: flex-start;
`;

const BadgeContainer = styled.View<{
  type: "success" | "pending" | "error" | "gray" | "warning";
}>`
  ${(props: any) => {
    if (props.type === "success") {
      return `background:  ${props.theme.success[800]}44`;
    }
    if (props.type === "pending") {
      return `background:  ${props.theme.secondary[800]}44`;
    }
    if (props.type === "error") {
      return `background:  ${props.theme.error[800]}44;`;
    }
    if (props.type === "gray") {
      return `background:  ${props.theme.gray[800]}44;`;
    }
    if (props.type === "warning") {
      return `background:  ${props.theme.warning[800]}44;`;
    }
  }}

${(props: any) => {
  if (props.type === "success") {
    return `border:  ${props.theme.success[400]}`;
  }
  if (props.type === "pending") {
    return `border:  ${props.theme.secondary[400]}`;
  }
  if (props.type === "error") {
    return `border:  ${props.theme.error[400]};`;
  }
  if (props.type === "gray") {
    return `border:  ${props.theme.gray[400]};`;
  }
  if (props.type === "warning") {
    return `border:  ${props.theme.warning[400]};`;
  }
}}

  border-radius: 8px;
  padding-top: ${(props: any) => props.theme.spacing[1]}
  padding-bottom: ${(props: any) => props.theme.spacing[1]}
  padding-left: ${(props: any) => props.theme.spacing[2]}
  padding-right: ${(props: any) => props.theme.spacing[2]}
  min-height: 28px;

  align-items: center;
`;

const BadgeText = styled.Text<{
  type: "success" | "pending" | "error" | "gray";
}>`
  font-size: 14px;

  ${(props: any) => {
    if (props.type === "success") {
      return `color:  ${props.theme.success[400]}`;
    }
    if (props.type === "pending") {
      return `color:  ${props.theme.secondary[400]}`;
    }
    if (props.type === "error") {
      return `color:  ${props.theme.error[400]};`;
    }
    if (props.type === "gray") {
      return `color:  ${props.theme.gray[400]};`;
    }
    if (props.type === "warning") {
      return `color:  ${props.theme.warning[400]};`;
    }
  }}
`;
