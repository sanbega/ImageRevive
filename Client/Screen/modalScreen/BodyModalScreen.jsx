import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import ContactsIconProfileScreen from "../modalScreen/ContactsIconProfileScreen";

export default function BodyModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleContactPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleContactPress}>
        <View style={styles.button}>
          <FontAwesome6 name="message" size={40} color={"black"} />
        </View>
        <View style={styles.notifications}>
          <Text style={{ color: "white" }}>5</Text>
        </View>
      </TouchableOpacity>
      <ContactsIconProfileScreen
        visible={modalVisible}
        onClose={handleCloseModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    right: 40,
  },
  button: {
    // position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 99,
    backgroundColor: "white",
    padding: 10,
    // Sombreado
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  notifications: {
    borderRadius: 99,
    backgroundColor: "blue",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    right: 0,
    width: 20,
    height: 20,
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
