import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";

import { DietDetails } from "@screens/DietDetails";
import { Home } from "@screens/Home";
import { MealDetails } from "@screens/MealDetails";
import { MealForm } from "@screens/MealForm";
import { NewMealConfirmation } from "@screens/NewMealConfirmation";

export function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen
        name="DietDetails"
        component={DietDetails}
        options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}
      />
      <Screen
        name="MealForm"
        component={MealForm}
        options={{ cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }}
      />
      <Screen
        name="NewMealConfirmation"
        component={NewMealConfirmation}
        options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}
      />
      <Screen
        name="MealDetails"
        component={MealDetails}
        options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}
      />
    </Navigator>
  );
}
