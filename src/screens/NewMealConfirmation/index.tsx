import onDietImage from "@assets/onDietImage/onDiet.png";
import outDietImage from "@assets/outDietImage/outDiet.png";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "react-native";
import { ButtonContainer, Container, Strong, Subtitle, Title, TitleStyleProps } from "./styles";

type RouteParams = {
  type: TitleStyleProps;
};

export function NewMealConfirmation() {
  const { navigate } = useNavigation();

  const { params } = useRoute();
  const { type } = params as RouteParams;

  const title = type === "PRIMARY" ? "Continue assim" : "Que pena!";

  const subtitle =
    type === "PRIMARY"
      ? <Subtitle>
          Você continua <Strong>dentro da dieta</Strong>. Muito bem!
        </Subtitle>
      : <Subtitle>
          Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se esforçando e não desista!
        </Subtitle>;

  return (
    <Container>
      <Title type={type}>
        {title}
      </Title>
      {subtitle}
      <Image source={type === "PRIMARY" ? onDietImage : outDietImage} />

      <ButtonContainer>
        <Button title="Ir para a página inicial" onPress={() => navigate("Home")} />
      </ButtonContainer>
    </Container>
  );
}
