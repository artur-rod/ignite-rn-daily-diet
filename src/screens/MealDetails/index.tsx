import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealsDTO } from "@storage/MealsDTO";
import { deleteMeal } from "@storage/deleteMeal";
import { Alert } from "react-native";
import { Background, ButtonContainer, Container, MealDetailsContainer, OnDietContainer, OnDietSign, OnDietText, Subtitle, Text, Title } from "./styles";

type RouteParams = {
  MealInfo: MealsDTO
}
export function MealDetails() {
  const { params } = useRoute()
  const { MealInfo } = params as RouteParams
  const { id, name, description, date, time, onDiet } = MealInfo

  const { navigate } = useNavigation()

  async function handleMealDeletion() {
    Alert.alert(
      "Deletar Refeição",
      "Deseja realmente excluir o registro da refeição?",
      [
        {
          style: "cancel",
          text: "Cancelar"
        },
        {
          style: "destructive",
          text: "Excluir",
          onPress: async () => {
            await deleteMeal(id as string)
            navigate("Home")
          }
        }
      ]
    )
  }

  return (
    <Background onDiet={onDiet}>
      <Header title="Refeição" type={onDiet ? "PRIMARY" : "SECONDARY"} goBack={() => navigate("Home")} />

      <Container>
        <MealDetailsContainer>
          <Title>{name}</Title>
          <Text>{description}</Text>
          <Subtitle>Data e hora</Subtitle>
          <Text>{date} às {time}</Text>

          <OnDietContainer>
            <OnDietSign onDiet={onDiet} />
            <OnDietText>{onDiet ? "dentro da dieta" : "fora da dieta"}</OnDietText>
          </OnDietContainer>

        </MealDetailsContainer>
        <ButtonContainer>
          <Button title="Editar refeição" icon="edit" onPress={() => navigate("MealForm", { MealInfo })} />
          <Button title="Excluir refeição" icon="delete" type="SECONDARY" onPress={handleMealDeletion} />
        </ButtonContainer>
      </Container>
    </Background>
  )
}