import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Bible from "../screens/Bible";
import Home from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="bible" component={Bible} />
    </Navigator>
  );
}
