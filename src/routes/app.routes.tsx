import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Bible from "../screens/Bible";
import Home from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator initialRouteName="route">
      <Screen name="home" component={Home} options={{ title: "Início" }} />
      <Screen name="bible" component={Bible} options={{ title: "Biblia" }} />
    </Navigator>
  );
}
