import { View, Text, Image, StyleSheet } from "react-native";


import Title from "../components/Ui/Title";
import Colors from "../constans/Color";
import PrimaryButton from "../components/Ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartnewGame }) {
  return (
    <View style={style.rootContainer}>
      <Title> GAME OVER </Title>
      <View style={style.imageContainer}>
        <Image
          style={style.imageStyle}
          source={require("../assets/images/mountains.jpg")}
        />
      </View>

      <Text style={style.summaryText}>
        Your phone needed
        <Text style={style.highligt}> {roundsNumber} </Text> rounds to guess the
        number
        <Text style={style.highligt}> {userNumber} </Text>
      </Text>
      <PrimaryButton onPressed={onStartnewGame}>Start New Game</PrimaryButton>
    </View>
  );
}
export default GameOverScreen;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 13,
    textAlign: "center",
    marginBottom: 24,
  },
  highligt: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
