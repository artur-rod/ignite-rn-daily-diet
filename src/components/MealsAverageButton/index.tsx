import { DietPercentage } from "@components/DietPercentage";
import theme from "@theme/index";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  percentage: number;
};

export function MealsAverageButton({ percentage, ...rest }: Props) {
  return (
    <Container {...rest} type={percentage < 60 ? "SECONDARY" : "PRIMARY"}>
      <DietPercentage percentage={percentage} />
      <Icon
        name="north-east"
        color={percentage < 60 ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK}
      />
    </Container>
  );
}
