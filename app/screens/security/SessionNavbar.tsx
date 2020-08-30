import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Alert, Button, AsyncStorage, VirtualizedList, View, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class SessionNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoggedIn: false,
    name: "",
  };

  async componentDidMount() {
    let session = await AsyncStorage.getItem("session");

    if (session) {
      this.setState({
        isLoggedIn: true,
        name: JSON.parse(session).data.correo,
      });
    }
  }

  signOut = () => {
    Alert.alert("Cerrar sesión.", "¿Deseas cerrar la sesión?", [
      {
        text: "Sí.",
        onPress: () => {
          AsyncStorage.removeItem("session");
          this.setState({
            isLoggedIn: false,
            name: "",
          });
        },
      },
      {
        text: "No.",
      },
    ]);
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Text onPress={this.signOut}>Bienvenido, {this.state.name}</Text>;
    } 
    
    else {
      return (
        <View style={styles.container}>
          <View style={styles.buttonView}>
          <Button
          color="#760893"
          title="Regístrate"
          onPress={() => this.props.navigation.push("Registrate")}
        />
        </View>
        <View style={styles.buttonView}>
        <Button 
          color="#760893"
          title="Conéctate"
          onPress={() => this.props.navigation.push("Iniciar sesión")}
        />
        </View>
        </View>
        
      );
    }
  }
}

const styles = StyleSheet.create({
 
  

  buttonView: {
    padding: 10,
  },
  container: {
    flex:0.5,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
});
