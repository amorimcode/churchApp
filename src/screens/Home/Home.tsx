import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import HomeStyles from "./Home.styles";

const Home = () => {
  return (
    <View style={HomeStyles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
