import { BackButton } from "@components/BackButton";
import { DietPercentage } from "@components/DietPercentage";
import { StatisticsCard } from "@components/StatisticsCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealsDTO } from "@storage/MealsDTO";
import theme from "@theme/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { ContainerMealsInOutDiet, Header, StatisticsContainer, StatisticsTitle } from "./styles";

type RouteParams = {
  meals: MealsDTO[];
  percentage: number;
};

export function DietDetails() {
  const { params } = useRoute();
  const { meals, percentage } = params as RouteParams;

  const { navigate } = useNavigation();

  const totalMeals = meals.length;
  const mealsOnDiet = meals.filter(meal => meal.onDiet).length;
  const mealsOutDiet = meals.filter(meal => !meal.onDiet).length;

  function calculateOnDietSequence() {
    let counter = 0;
    meals.reduce((acc, meal) => {
      if (meal.onDiet) acc++;
      if (!meal.onDiet) acc = 0;
      if (acc > counter) counter = acc;

      return acc;
    }, 0);

    return counter;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: percentage < 60 ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT
      }}
    >
      <Header>
        <BackButton
          type={percentage < 60 ? "SECONDARY" : "PRIMARY"}
          onPress={() => navigate("Home")}
        />
        <DietPercentage percentage={percentage} />
      </Header>

      <StatisticsContainer>
        <StatisticsTitle>Estatísticas gerais</StatisticsTitle>

        <StatisticsCard
          type="DEFAULT"
          number={calculateOnDietSequence()}
          text="melhor sequência de pratos dentro da dieta"
          width={100}
        />
        <StatisticsCard
          type="DEFAULT"
          number={totalMeals}
          text="refeições registradas"
          width={100}
        />

        <ContainerMealsInOutDiet>
          <StatisticsCard
            type="PRIMARY"
            number={mealsOnDiet}
            text="refeições dentro da dieta"
            width={50}
          />
          <StatisticsCard
            type="SECONDARY"
            number={mealsOutDiet}
            text="refeições fora da dieta"
            width={50}
          />
        </ContainerMealsInOutDiet>
      </StatisticsContainer>
    </SafeAreaView>
  );
}
