import { View } from "react-native";
import styled, { css } from "styled-components/native";

type OnDietStyleProps = {
  onDiet: boolean;
};

export const Background = styled(View)<OnDietStyleProps>`
  flex: 1;
  width: 100%;
  background-color: ${({ theme, onDiet }) =>
    onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding-top: 24px;
`;

export const Container = styled.View`
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 100%;
  margin-top: 24px;
  padding: 10px 0 50px 0;
  justify-content: space-between;
`;

export const MealDetailsContainer = styled.View`
  margin: 30px 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 8px
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 24px
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 8px
`;

export const OnDietContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 50%;
  width: 40%;
  padding: 10px 16px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const OnDietSign = styled(View)<OnDietStyleProps>`
  background-color: ${({ theme, onDiet }) =>
    onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

export const OnDietText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const ButtonContainer = styled.View`
  gap: 9px;
  margin: 80px 24px;
`;
