import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Body() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <TouchableOpacity>
          <Text style={styles.textSelect}>Select to Image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "blue",
  },
  // placeholder: {
  //   color: "#999",
  //   textAlign: "center",
  //   fontSize: 16,
  // },
  textSelect: {
    fontFamily: "outfit-regular",
    fontSize: 20,
  },
});
