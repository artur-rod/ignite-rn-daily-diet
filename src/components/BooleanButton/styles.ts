import { TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

type ButtonStyleProps = "PRIMARY" | "SECONDARY";

export type BooleanButtonProps = {
  type?: ButtonStyleProps;
  active?: boolean;
};

// prettier-ignore
export const Container = styled(TouchableOpacity)<BooleanButtonProps>`
  height: 50px;
  width: 50%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
  ${({theme, type, active}) => {
    if (active && type === "PRIMARY") {
      return css`
        background-color: ${theme.COLORS.GREEN_LIGHT};
        border: 1px solid ${theme.COLORS.GREEN_DARK}
      `
    } else if (active && type === "SECONDARY") {
      return css`
        background-color: ${theme.COLORS.RED_LIGHT};
        border: 1px solid ${theme.COLORS.RED_DARK}
      `
    } else {
      return css`
        background-color: ${theme.COLORS.GRAY_600}
      `
    }
  }}
`
// prettier-ignore
export const TypeSign = styled(View)<BooleanButtonProps>`
  height: 8px;
  width: 8px;
  border-radius: 9999px;
  background-color: ${({theme, type}) => type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `};
`;
