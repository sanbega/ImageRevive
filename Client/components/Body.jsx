import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Body() {
  return (
    <View style={style.container}>
      <Text>Body</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 1000,
  },
});
