import logo from "@assets/logo/logo.png";
import { Button } from "@components/Button";
import { EmptyList } from "@components/EmptyList";
import { MealCardButton } from "@components/MealCardButton";
import { MealsAverageButton } from "@components/MealsAverageButton";
import { useNavigation } from "@react-navigation/native";
import { MealsDTO } from "@storage/MealsDTO";
import { getAllMeals } from "@storage/getAllMeals";
import theme from "@theme/index";
import { getDietPercentage } from "@utils/getDietPercentage";
import { MealsByDateDTO, getMealsByDate } from "@utils/getMealsByDate";
import { useEffect, useState } from "react";
import { Platform, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, ListSectionTitle, Logo, Profile, Text } from "./styles";

export function Home() {
  const [meals, setMeals] = useState<MealsDTO[]>([]);
  const [mealsByDate, setMealsByDate] = useState<MealsByDateDTO[]>([]);
  const [percentage, setPercentage] = useState(0);

  const { navigate } = useNavigation();

  async function fetchMeals() {
    const storage = (await getAllMeals()) as MealsDTO[];
    setMeals([...storage]);

    const dietPercentage = getDietPercentage(storage);
    setPercentage(dietPercentage);

    const organizeMealsByDate = getMealsByDate(storage);
    setMealsByDate([...organizeMealsByDate]);
  }

  useEffect(
    () => {
      fetchMeals();
    },
    [meals]
  );

  return (
    <SafeAreaView style={{ padding: 24 }}>
      <Header>
        <Logo source={logo} />
        <Profile />
      </Header>

      <MealsAverageButton
        percentage={percentage}
        onPress={() => navigate("DietDetails", { meals, percentage })}
      />

      <Text>Refeições</Text>
      <Button title="Nova refeição" icon="add" onPress={() => navigate("MealForm", {})} />

      <SectionList
        sections={mealsByDate}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) =>
          <MealCardButton mealDetails={item} onPress={() => navigate("MealDetails", { MealInfo: item })} />}
        renderSectionHeader={({ section: { date } }) =>
          <ListSectionTitle style={{ borderTopColor: theme.COLORS.GRAY_400, borderTopLeftRadius: 32 }}>
            {date}
          </ListSectionTitle>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: Platform.OS === 'ios' && mealsByDate.length ? 300 : 100 }}
        ListEmptyComponent={() => <EmptyList />}
      />
    </SafeAreaView>
  );
}
