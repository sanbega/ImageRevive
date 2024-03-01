import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
// import ConectionComponents from "../../components/ConectionComponents";
import App from "../../App";

export default function HeaderModalScreen() {
  const { user } = useUser();
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate(App); // Reemplaza 'Home' con el nombre de la pantalla principal
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        // padding: 20,
        paddingTop: 40,
      }}
    >
      <View style={{ padding: 20, paddingTop: 30, backgroundColor: "blue" }}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onPress={handleBackPress}
          // onPress={handleBackPress}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="arrow-back" size={30} color={"white"} />
            <Text
              style={{
                fontFamily: "titanOne-Regular",
                fontSize: 30,
                color: "white",
                marginLeft: 10, // Espacio entre el icono y el texto
              }}
            >
              Profile
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            backgroundColor: "blue",
          }}
        >
          <Image
            source={{ uri: user.imageUrl }}
            style={{ width: 90, height: 90, borderRadius: 99 }}
          />
          <Text
            style={{
              fontSize: 26,
              marginTop: 8,
              fontFamily: "titanOne-Regular",
              color: "white",
            }}
          >
            {user.fullName}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
