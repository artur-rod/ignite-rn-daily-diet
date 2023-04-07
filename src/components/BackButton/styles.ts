import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

type Props = {
  type: ButtonIconTypeStyleProps;
};

// prettier-ignore
export const Container = styled(TouchableOpacity)<Props>`
  justify-content: center;
  align-items: center; 
  width: 24px;
  height: 24px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => {
  let color;
  switch (type) {
    case "PRIMARY":
      color = theme.COLORS.GREEN_DARK;
      break;
    case "SECONDARY":
      color = theme.COLORS.RED_DARK;
      break;
    default:
      color = theme.COLORS.GRAY_300;
      break;
  }
  return {
    size: 24,
    color
  };
})`
  margin-right: 4px;
`;
