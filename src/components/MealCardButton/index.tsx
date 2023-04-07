import { MealsDTO } from "@storage/MealsDTO";
import theme from "@theme/index";
import { Container, Divider, Name, OnDietSign, Time } from "./styles";

type Props = {
  mealDetails: MealsDTO;
};
export function MealCardButton({ mealDetails }: Props) {
  return (
    <Container>
      <Time>
        {mealDetails.time}
      </Time>

      <Divider />

      <Name>
        {mealDetails.name}
      </Name>

      <OnDietSign
        style={{
          backgroundColor: mealDetails.onDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID
        }}
      />
    </Container>
  );
}
