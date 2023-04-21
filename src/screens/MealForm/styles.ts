import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding-top: 24px;
`;

export const FormContainer = styled.View`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
  margin-top: 24px;
  padding: 10px 12px 50px 12px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `};
  width: 100%;
  text-align: left;
  margin-bottom: 2px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: column-reverse;
  width: 100%;
`;
