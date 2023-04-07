import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};
// prettier-ignore
export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 100px;
  background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 32px 0;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
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
`;

// export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
//   size: 24
// }))`
//   margin: 8px;
//   position: absolute;
//   right: 0;
//   top: 0;
// `;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme }) => ({
  size: 24
}))`
  margin: 8px;
  position: absolute;
  right: 0;
  top: 0; 
`;
