import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/screens/Main";
import LoginScreen from "./app/screens/security/Login";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Matching" component={HomeScreen} />
        <Stack.Screen name="Iniciar sesión" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}