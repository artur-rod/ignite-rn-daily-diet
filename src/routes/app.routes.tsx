import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Route } from "@screens/Route";

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Route" component={Route} />
    </Navigator>
  );
}
