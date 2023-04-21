import styled, { css } from "styled-components/native";

export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.Image`
  height: 40px;
`;

export const Profile = styled.View`
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `};
  margin: 8px 0;
`;

export const ListSectionTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    background-color: ${theme.COLORS.GRAY_600};
  `};
  padding: 32px 0 8px 0;
`;
