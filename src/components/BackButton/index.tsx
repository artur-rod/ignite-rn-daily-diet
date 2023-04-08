import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps;
  positionLeft: number;
  positionTop: number;
};

export function BackButton({ type = "DEFAULT", positionLeft, positionTop, ...rest }: Props) {
  return (
    <Container type={type} positionLeft={positionLeft} positionTop={positionTop} {...rest}>
      <Icon type={type} name="arrow-back" />
    </Container>
  );
}
