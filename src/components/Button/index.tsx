import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
  title: string;
};

export function Button({ title, icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} name={icon} />
      <Title type={type}>
        {title}
      </Title>
    </Container>
  );
}
