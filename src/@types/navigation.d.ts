import { MealsDTO } from "@storage/MealsDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      DietDetails: {
        meals: MealsDTO[];
        percentage: number;
      };
    }
  }
}
