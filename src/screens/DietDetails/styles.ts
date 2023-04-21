import { View } from "react-native";
import styled, { css } from "styled-components/native";

export const Header = styled(View)`
  height: 130px;
  width: 100%;
  padding: 24px;
  justify-content: center;
`;

export const StatisticsContainer = styled.View`
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  flex: 1;
  padding: 24px;
  margin-bottom: -50px;
`;

export const StatisticsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
  margin: 10px 0 20px 0;
`;

export const ContainerMealsInOutDiet = styled.View`
  flex-direction: row;
  gap: 12px;
  margin: 0 6px;
`;
