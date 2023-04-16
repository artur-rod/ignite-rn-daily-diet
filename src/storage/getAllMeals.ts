import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealsDTO } from "./MealsDTO";
import { MEALS_COLLECTION } from "./storageConfig";

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);
    const allMeals: MealsDTO[] = storage ? JSON.parse(storage) : [];

    allMeals.sort((a, b) => {
      const [aDay, aMonth, aYear] = a.date.split("/");
      const aCompleteDate = new Date(`${aYear}-${aMonth}-${aDay}T${a.time}:00.000Z`);

      const [bDay, bMonth, bYear] = b.date.split("/");
      const bCompleteDate = new Date(`${bYear}-${bMonth}-${bDay}T${b.time}:00.000Z`);

      if (aCompleteDate < bCompleteDate) {
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
