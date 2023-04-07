import theme from "@theme/index";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Percentage, Text } from "./styles";

type Props = TouchableOpacityProps & {
  percentage: number;
};

export function MealsAverageButton({ percentage, ...rest }: Props) {
  function percentageValueTreatment(percentage: number) {
    return percentage.toFixed(2).toString().replace(".", ",");
  }

  return (
    <Container {...rest} type={percentage < 60 ? "SECONDARY" : "PRIMARY"}>
      <Percentage>
        {percentageValueTreatment(percentage)}%
      </Percentage>
      <Text>das refeições dentro da dieta</Text>
      <Icon
        name="north-east"
        color={percentage < 60 ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK}
      />
    </Container>
  );
}
