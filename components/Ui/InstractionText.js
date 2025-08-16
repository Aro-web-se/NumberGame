import { Text, StyleSheet } from "react-native";
import Colors from "../../constans/Color";

function InstarctionText({ children, style }) {
  return <Text style={[styles.falseText, style]}> {children} </Text>;
}
export default InstarctionText;

const styles = StyleSheet.create({
  falseText: {
    fontSize: 14,
    color: Colors.accent500,
  },
});
