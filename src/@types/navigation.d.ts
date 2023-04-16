import { TitleStyleProps } from "@screens/NewMealConfirmation/styles";
import { MealsDTO } from "@storage/MealsDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      NewMeal: undefined;
      DietDetails: {
        meals: MealsDTO[];
        percentage: number;
      };
      NewMealConfirmation: {
        type: TitleStyleProps;
      };
    }
  }
}
