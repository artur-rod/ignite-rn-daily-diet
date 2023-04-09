import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealsDTO } from "./MealsDTO";
import { MEALS_COLLECTION } from "./storageConfig";

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);
    const allMeals: MealsDTO[] = storage ? JSON.parse(storage) : [];

    allMeals.sort((a, b) => {
      const [aDay, aMonth, aYear] = a.date.split("/");
      const [aHour, aMinute] = a.time.split(":");

      const [bDay, bMonth, bYear] = b.date.split("/");
      const [bHour, bMinute] = a.time.split(":");

      if (aYear > bYear && aMonth > bMonth && aDay > bDay && aHour > bHour && aMinute > bMinute) {
        return 1;
      } else {
        return -1;
      }
    });

    return allMeals;
  } catch (err) {
    console.log(err);
  }
}
