import { View, Text, StyleSheet } from "react-native";


import Colors from "../../constans/Color";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.NumberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 10,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  NumberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
