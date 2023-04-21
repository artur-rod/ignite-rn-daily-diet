import { TitleStyleProps } from "@screens/NewMealConfirmation/styles";
import { MealsDTO } from "@storage/MealsDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      MealForm: {
        MealInfo?: MealsDTO;
      };
      DietDetails: {
        meals: MealsDTO[];
        percentage: number;
      };
      NewMealConfirmation: {
        type: TitleStyleProps;
      };
      MealDetails: {
        MealInfo: MealsDTO;
      };
    }
  }
}
