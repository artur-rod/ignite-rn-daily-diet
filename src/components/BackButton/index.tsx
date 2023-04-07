import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps;
};

export function BackButton({ type = "DEFAULT", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} name="arrow-back" />
    </Container>
  );
}
