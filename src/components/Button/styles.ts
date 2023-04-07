import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeStyleProps;
};

// prettier-ignore
export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 1px solid ${({ theme, type }) => type === "PRIMARY" ? "transparent" : theme.COLORS.GRAY_200};
  background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === "SECONDARY" ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE
}))`
  margin-right: 4px;
`;

// prettier-ignore
export const Title = styled(Text)<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "SECONDARY" ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  `};
`;
