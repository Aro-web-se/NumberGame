import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/Ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/Ui/PrimaryButton";
import Card from "../components/Ui/Card";
import InstarctionText from "../components/Ui/InstractionText";
import GuessLogItem from "../components/game/GuessLogItems";

//to guess random number
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ UserNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, UserNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRound] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === UserNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, UserNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < UserNumber) ||
      (direction === "greater" && currentGuess > UserNumber)
    ) {
      Alert.alert("Don't lie!", "you know that this is Wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRnNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRnNumber);
    setGuessRound((prevGuessrounds) => [newRnNumber, ...prevGuessrounds]);
  }

  const guessRoundListLength = guessRounds.length;

  return (
    <View style={styles.Screen}>
      <Title> Opponent's Guess </Title>

      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstarctionText style={styles.instarctionText}>
          {" "}
          Higher or lower?{" "}
        </InstarctionText>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressed={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressed={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.Listcontainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  instarctionText: {
    marginBottom: 14,
  },
  buttonContainer: {
    flex: 1,
  },
  Listcontainer: {
    flex: 1,
    padding: 16,
  },
});
