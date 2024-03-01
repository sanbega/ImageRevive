import { View, StyleSheet } from "react-native";
import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function ConectionComponents() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
