import { TouchableOpacityProps } from "react-native";
import { BooleanButtonProps, Container, Title, TypeSign } from "./styles";

export type Props = TouchableOpacityProps &
  BooleanButtonProps & {
    title: string;
  };

export function BooleanButton({ active = false, title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container active={active} type={type} {...rest}>
      <TypeSign type={type} />
      <Title>
        {title}
      </Title>
    </Container>
  );
}
