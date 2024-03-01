import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Screen/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo"; //libreria para la autenticacion con gmail
import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_ZXhjaXRlZC1jYWxmLTM1LmNsZXJrLmFjY291bnRzLmRldiQ">
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <Header />
            <Body />
            <Footer />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
      <StatusBar style="auto" />
    </ClerkProvider>
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
