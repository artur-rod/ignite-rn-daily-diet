import { View } from "react-native";
import styled, { css } from "styled-components/native";

export type ViewTypeStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

type Props = {
  type: ViewTypeStyleProps;
  width: number;
};

// prettier-ignore
export const Container = styled(View)<Props>`
  background-color: ${({theme, type}) => {
    switch (type) {
      case "PRIMARY":
        return theme.COLORS.GREEN_LIGHT
      case "SECONDARY":
        return theme.COLORS.RED_LIGHT
      default:
        return theme.COLORS.GRAY_600
    }
  }};
  width: ${({width}) => width}%;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 16px;
`

export const Number = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `};
  text-align: center;
`;
