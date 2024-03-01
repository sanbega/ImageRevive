import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={style.container}>
      <Text>Footer</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    width: 1000,
    height: 70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
