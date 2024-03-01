import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={style.container}>
      <Text style={style.text}>
        © 2024 My App. Todos los derechos reservados.
      </Text>
      <FontAwesome name="facebook" size={24} color="white" />
      <FontAwesome name="twitter" size={24} color="white" />
      <FontAwesome name="instagram" size={24} color="white" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    color: "white",
    fontSize: 12,
    fontFamily: "Arial",
  },
});
