import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  height?: number;
};

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `};
  margin-bottom: 2px;
`;

// prettier-ignore
export const Input = styled(TextInput)<Props>`
  ${({theme, height}) => css`
    height: ${height || 50}px;
    border: 1px solid ${theme.COLORS.GRAY_500};
    `}
    border-radius: 6px;
    padding: 12px;
`;
