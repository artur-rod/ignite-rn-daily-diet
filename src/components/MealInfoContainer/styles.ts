import styled, { css } from "styled-components/native";

export const FormContainer = styled.View`
  align-items: center;
  width: 100%;
  padding: 40px 12px 50px 12px;
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
