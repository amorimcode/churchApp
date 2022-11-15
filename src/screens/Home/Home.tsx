import { StatusBar } from "expo-status-bar";
import { Button, ImageBackground, Text, View } from "react-native";
import HomeStyles from "./Home.styles";

const Home = ({ navigation }) => {
  return (
    <View style={HomeStyles.container}>
      <StatusBar style="auto" />

      <View style={HomeStyles.header}>
        <Text style={HomeStyles.title}>churchApp</Text>
      </View>
      <Button
        onPress={() => navigation.navigate("bible")}
        title="Ler a bíblia"
      ></Button>
    </View>
  );
};

export default Home;
