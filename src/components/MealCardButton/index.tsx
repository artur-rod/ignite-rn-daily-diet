import { MealsDTO } from "@storage/MealsDTO";
import theme from "@theme/index";
import { TouchableOpacityProps } from "react-native";
import { Container, Divider, Name, OnDietSign, Time } from "./styles";

type Props = TouchableOpacityProps & {
  mealDetails: MealsDTO;
};
export function MealCardButton({ mealDetails, ...rest }: Props) {
  return (
    <Container {...rest}>
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
