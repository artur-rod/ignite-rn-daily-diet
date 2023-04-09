import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding-top: 24px;
`;

export const FormContainer = styled.View`
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  flex: 1;
  width: 100%;
  margin-top: 24px;
  padding: 50px 24px;
`;

export const TwoColumnFormContainer = styled.View`
  flex-direction: row;
  gap: 12px;
  margin: 0 6px;
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
