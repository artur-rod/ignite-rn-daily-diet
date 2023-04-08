import { BackButton } from "@components/BackButton";
import { Container, Title, ViewTypeStyleProps } from "./styles";

type Props = {
  type?: ViewTypeStyleProps;
  title: string;
  goBack: () => void;
};
export function Header({ type = "DEFAULT", title, goBack }: Props) {
  return (
    <Container type={type}>
      <BackButton positionLeft={24} positionTop={30} onPress={() => goBack()} />
      <Title>
        {title}
      </Title>
    </Container>
  );
}
