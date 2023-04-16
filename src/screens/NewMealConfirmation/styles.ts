import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type TitleStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: TitleStyleProps;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// prettier-ignore
export const Title = styled(Text)<Props>`
  ${({theme, type}) => css`
    color: ${type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  text-align: center;
  margin: 8px 0 40px 0;
`;

export const Strong = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const ButtonContainer = styled.View`
  width: 50%;
  margin-top: 32px;
`;
