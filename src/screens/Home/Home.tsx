import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import HomeStyles from "./Home.styles";

const Home = ({ navigation }) => {
  return (
    <View style={HomeStyles.container}>
      <Button
        onPress={() => navigation.navigate("bible")}
        title="Ler a bíblia"
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
