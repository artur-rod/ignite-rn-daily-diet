import { Container, Percentage, Text } from "./styles";

type Props = {
  percentage: number;
};

export function DietPercentage({ percentage }: Props) {
  function percentageValueTreatment(percentage: number) {
    return percentage.toFixed(2).toString().replace(".", ",");
  }

  return (
    <Container>
      <Percentage>
        {percentageValueTreatment(percentage)}%
      </Percentage>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}
