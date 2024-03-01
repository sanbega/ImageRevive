import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons"; //libreria para iconos https://icons.expo.fyi/Index

const ContactsIconProfileScreen = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text>Need any assistance?</Text>
          <Image
            source={require("../../assets/images/ayuda.jpeg")}
            style={styles.imageHelp}
          />
          <View style={styles.searchBarContainer}>
            <TextInput
              placeholder="Leave me a comment"
              style={styles.textInput}
            />
            <Feather
              name="search"
              size={27}
              color={"black"}
              style={styles.searchbtn}
            />
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semi-transparente
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    color: "blue",
    fontSize: 18,
  },
  imageHelp: {
    width: 70,
    height: 70,
    // marginTop: 70,
    borderRadius: 15,
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  searchbtn: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
    fontFamily: "outfit-bold",
  },
});

export default ContactsIconProfileScreen;
