import styled from "styled-components/native";

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
  padding: 24px;
`;

export const DateTimeFormContainer = styled.View`
  flex-direction: row;
  gap: 12px;
  margin: 0 6px;
`;
