import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";

import { DietDetails } from "@screens/DietDetails";
import { Home } from "@screens/Home";

export function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen
        name="DietDetails"
        component={DietDetails}
        options={{ cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }}
      />
    </Navigator>
  );
}
