import { MealsDTO } from "@storage/MealsDTO";

export function getDietPercentage(meals: MealsDTO[]) {
  if (!meals.length) return 0;

  const mealsOnDiet = meals.filter(meal => meal.onDiet);
  return mealsOnDiet.length / meals.length * 100;
}
