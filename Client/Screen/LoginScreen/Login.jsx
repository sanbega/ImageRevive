import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={style.container}>
      <Text style={style.textTittle}>ImageReVive</Text>
      <Animated.Image
        source={require("../../assets/images/persons.png")}
        style={[style.loginImage, { transform: [{ rotate: spin }] }]}
      />
      <TouchableOpacity style={style.button} onPress={onPress}>
        <Text style={style.textButton}>Let's go</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textTittle: {
    textAlign: "center",
    fontSize: 50,
    color: "black",
    fontFamily: "sixtyfour-Regular",
  },
  subContainer: {
    width: "100%",
    backgroundColor: "red",
    height: "100%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  loginImage: {
    width: 230,
    height: 230,
    marginTop: 70,
    borderRadius: 115,
    borderWidth: 4,
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  button: {
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 20,
    margin: 40,
  },
  textButton: {
    textAlign: "center",
    fontSize: 17,
    color: "white",
    fontFamily: "sixtyfour-Regular",
  },
});
