import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { MealsDTO } from "./MealsDTO";
import { getAllMeals } from "./getAllMeals";
import { MEALS_COLLECTION } from "./storageConfig";

export async function createNewMeal(meal: MealsDTO) {
  try {
    const existentMeals = await getAllMeals() as MealsDTO[]

    const mealAlreadyExists =
      existentMeals?.length &&
      existentMeals.find(({ date, time }) => date === meal.date && time === meal.time);

    if (mealAlreadyExists) {
      throw new AppError("Já existe uma refeição cadastrada com essa data e horário");
    }

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify([...existentMeals, meal]));
  } catch (err) {
    throw err
  }
}
