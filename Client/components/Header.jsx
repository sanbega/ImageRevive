import {
  View,
  Text,
  StyleSheet,
  Image,
  // TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-react"; // Librería para obtener la información del usuario a través de una URL
import { Feather } from "@expo/vector-icons"; //libreria para iconos https://icons.expo.fyi/Index
import { Entypo } from "@expo/vector-icons"; //libreria para iconos https://icons.expo.fyi/Index
import { useNavigation } from "@react-navigation/native";
import { useClerk } from "@clerk/clerk-react";
import Login from "../Screen/LoginScreen/Login";

export default function Header() {
  const { user, isLoading } = useUser(); //funcion para traer informacion del usuario
  const navigation = useNavigation();
  const { signOut } = useClerk();

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
            <Image source={{ uri: user?.imageUrl }} style={style.userImage} />
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
// barra de busqueda
{
  /* <View style={style.searchBarContainer}>
<TextInput placeholder="Search" style={style.textInput} />
<Feather
  name="search"
  size={27}
  color="black"
  style={style.searchbtn}
/>
</View> */
}
const style = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    width: 1000,
    backgroundColor: "blue",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
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
    fontFamily: "titanOne-Regular",
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
  // searchBarContainer: {
  //   marginTop: 15,
  //   display: "flex",
  //   flexDirection: "row",
  //   gap: 10,
  //   marginBottom: 10,
  // },
  // searchbtn: {
  //   backgroundColor: "white",
  //   padding: 10,
  //   borderRadius: 8,
  // },
});
