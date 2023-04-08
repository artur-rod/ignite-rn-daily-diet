import { View } from "react-native";
import styled, { css } from "styled-components/native";

export type ViewTypeStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

type Props = {
  type: ViewTypeStyleProps;
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
        return theme.COLORS.GRAY_500
    }
  }};
  flex-direction: row;
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
  text-align: center;
`;
