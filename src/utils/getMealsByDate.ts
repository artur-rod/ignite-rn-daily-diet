import { MealsDTO } from "@storage/MealsDTO";

export type MealsByDateDTO = {
  date: string;
  data: MealsDTO[];
};

export function getMealsByDate(meals: MealsDTO[]) {
  const mealsByDate = meals.reduce<MealsByDateDTO[]>((acc, meal) => {
    const dateAlreadyDefinedIndex = acc.findIndex(({ date }) => date === meal.date);

    if (dateAlreadyDefinedIndex < 0) {
      acc.push({ date: meal.date, data: [meal] });
    } else {
      acc[dateAlreadyDefinedIndex].data.push(meal);
    }

    return acc;
  }, []);

  return mealsByDate;
}
