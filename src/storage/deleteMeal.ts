import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealsDTO } from "./MealsDTO";
import { getAllMeals } from "./getAllMeals";
import { MEALS_COLLECTION } from "./storageConfig";

export async function deleteMeal(mealId: string) {
  try {
    const existentMeals = (await getAllMeals()) as MealsDTO[];

    const removeMeal = existentMeals.filter((meal) => meal.id !== mealId);

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(removeMeal));
  } catch (err) {
    throw err;
  }
}
