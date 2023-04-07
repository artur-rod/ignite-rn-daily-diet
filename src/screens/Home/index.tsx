import logo from "@assets/logo.png";
import { Button } from "@components/Button";
import { MealCardButton } from "@components/MealCardButton";
import { MealsAverageButton } from "@components/MealsAverageButton";
import { useState } from "react";
import { SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, ListSectionTitle, Logo, Profile, Text } from "./styles";

export function Home() {
  const [meals, SetMeals] = useState([
    {
      date: "07.04.2023",
      data: [
        {
          date: "07.04.2023",
          time: "20:00",
          name: "Whey protein com leite",
          description: "",
          onDiet: true
        },
        {
          date: "06.04.2023",
          time: "16:30",
          name: "X-Tudo",
          description: "",
          onDiet: false
        }
      ]
    },
    {
      date: "06.04.2023",
      data: [
        {
          date: "06.04.2023",
          time: "16:30",
          name: "X-Tudo",
          description: "",
          onDiet: false
        },
        {
          date: "07.04.2023",
          time: "20:00",
          name: "Whey protein com leite",
          description: "",
          onDiet: true
        }
      ]
    }
  ]);

  return (
    <SafeAreaView style={{ padding: 24 }}>
      <Header>
        <Logo source={logo} />
        <Profile />
      </Header>

      <MealsAverageButton percentage={60} />

      <Text>Refeições</Text>
      <Button title="Nova refeição" icon="add" />

      <SectionList
        sections={meals}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <MealCardButton mealDetails={item} />}
        renderSectionHeader={({ section: { date } }) =>
          <ListSectionTitle>
            {date}
          </ListSectionTitle>}
        contentContainerStyle={[{ paddingBottom: 100 }, !meals.length && { flex: 1 }]}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
