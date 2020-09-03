import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/screens/Main";
import HomenotLoginScreen from "./app/screens/MainNotLogin";
import LoginScreen from "./app/screens/security/Login";
import RegisterScreen from "./app/screens/security/Register";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Matchiing">
      <Stack.Screen name="Matchiing" component={HomenotLoginScreen} />
        <Stack.Screen name="Matching" component={HomeScreen} />
        <Stack.Screen name="Iniciar sesión" component={LoginScreen} />
        <Stack.Screen name="Registrate" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}