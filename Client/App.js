import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Screen/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo"; //libreria para la autenticacion con gmail
import { NavigationContainer } from "@react-navigation/native";
import ConectionComponents from "./components/ConectionComponents";

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_ZXhjaXRlZC1jYWxmLTM1LmNsZXJrLmFjY291bnRzLmRldiQ">
      <NavigationContainer>
        <View style={styles.container}>
          <SignedIn>
            <ConectionComponents />
          </SignedIn>
          <SignedOut>
            <Login />
          </SignedOut>
        </View>
        <StatusBar style="auto" />
      </NavigationContainer>
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
