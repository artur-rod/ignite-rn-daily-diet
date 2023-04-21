import { TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  margin-bottom: 10px;
`;

export const Time = styled.Text`
  margin-left: 12px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  `};
`;

export const Divider = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  height: 14px;
  width: 1px;
  margin: 0 12px;
`;

export const Name = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  `};
`;

export const OnDietSign = styled(View)`
  height: 14px;
  width: 14px;
  border-radius: 9999px;
  margin-right: 12px;
`;
