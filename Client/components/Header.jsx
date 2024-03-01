import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react"; // Librería para obtener la información del usuario a través de una URL
// import { Feather } from "@expo/vector-icons"; //libreria para iconos https://icons.expo.fyi/Index
import { Entypo } from "@expo/vector-icons"; //libreria para iconos https://icons.expo.fyi/Index
import { useNavigation } from "@react-navigation/native";
import { useClerk } from "@clerk/clerk-react";
import { FontAwesome } from "@expo/vector-icons";
import Login from "../Screen/LoginScreen/Login";
import HeaderModalScreen from "../Screen/modalScreen/HeaderModalScreen";
import BodyModalScreen from "../Screen/modalScreen/BodyModalScreen";
import FooterModalScreen from "../Screen/modalScreen/FooterModalScreen";

export default function Header() {
  const { user, isLoading } = useUser(); //funcion para traer informacion del usuario
  const [modalVisible, setModalVisible] = useState(false); //para el modal de la informacion del usuario
  const navigation = useNavigation();
  const { signOut } = useClerk();

  const showModal = () => {
    setModalVisible(true);
  };

  // Logica para salir de la aplicación
  const handleLogout = async () => {
    try {
      await signOut();
      navigation.navigate(Login); // Suponiendo que 'Login' es el nombre de la pantalla de inicio de sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  return (
    user && (
      <View style={style.container}>
        <View style={style.profileMainContainer}>
          <View style={style.profileContainer}>
            <TouchableOpacity onPress={showModal}>
              <Image source={{ uri: user?.imageUrl }} style={style.userImage} />
            </TouchableOpacity>
            <Modal visible={modalVisible} animationType="slide">
              <View style={style.modal}>
                <HeaderModalScreen />
                <BodyModalScreen />
                <FooterModalScreen />
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                ></TouchableOpacity>
              </View>
            </Modal>
            <View>
              <Text style={style.textWelcome}>Welcome,</Text>
              <Text style={style.textNameUSer}>{user?.fullName}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleLogout}>
            <Entypo name="log-out" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    )
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    width: "100%",
    height: "20",
    backgroundColor: "blue",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  textTittle: {
    top: 20, // Ajusta este valor para cambiar la posición vertical
    left: 60, // Ajusta este valor para cambiar la posición horizontal
    fontSize: 20,
    color: "black",
    fontFamily: "sixtyfour-Regular",
    // textAlign: "center",
    // fontSize: 20,
    // color: "black",
    // fontFamily: "sixtyfour-Regular",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  textWelcome: {
    color: "white",
    fontFamily: "outfit-regular",
  },
  textNameUSer: {
    fontSize: 20,
    color: "white",
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
  modal: {
    width: "100%", // Ancho del modal
    height: "100%", // Alto del modal
    backgroundColor: "white", // Color de fondo del modal
    borderRadius: 10, // Radio de borde del modal
    justifyContent: "center", // Alinear contenido verticalmente al centro
    alignItems: "center", // Alinear contenido horizontalmente al centro
  },
  imagePerson: {
    width: 200,
    height: 200,
    marginTop: 70,
    borderRadius: 115,
    borderWidth: 4,
    borderColor: "blue",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
