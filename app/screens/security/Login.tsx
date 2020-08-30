import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  SafeAreaView,
  Button,
  AsyncStorage,
  Linking,
  Dimensions,
} from "react-native";

import md5 from "md5";

const bgImg = require("../../../assets/bg/mobile_bg_2.jpg");

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    correo: "",
    password: "",
    url: "http://192.168.0.2:3000/login",
  };

  async onLogin() {
    const u = this.state.correo;
    const p = md5(this.state.password);
    fetch(this.state.url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo: u,
        password: p,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.error) {
          Alert.alert("Advertencia", "Datos inválidos.");
        } else {
          this.state.correo = "";
          this.state.password = "";
          AsyncStorage.setItem("session", JSON.stringify(data));
          this.props.navigation.push("Matching");
        }
      })

      .catch((err) => {
        Alert.alert("Advertencia", "Datos inválidos.");
      });
  }

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={bgImg} style={styles.backgroundApp}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.titleText}>Iniciar sesión</Text>
          <Text style={{ color:"white",fontSize: 18 }}>Por favor, introduce los datos requeridos correctamente.{"\n"}</Text>
      
          <TextInput
            value={this.state.correo}
            keyboardType="default"
            onChangeText={(correo) => this.setState({ correo })}
            placeholder="Correo electrónico"
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={"Contraseña"}
            secureTextEntry={true}
            placeholderTextColor="gray"
            style={styles.input}
          />
          <Text>{"\n"}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onLogin.bind(this)}
          >
            <Text style={styles.buttonText}> Ingresar </Text>
            
          </TouchableOpacity>
          <Text style ={{color:"#FFFCB8",fontSize: 17,  borderColor: "black"}}onPress={() => this.props.navigation.push("Registrate")}> ¡Registrate ahora! </Text>
          <Text style={{color:"#FFFCB8", fontSize:17,textAlign:"right",borderColor: "black"}}onPress={() => this.props.navigation.push("Iniciar sesión")}> ¿Olvidaste tu contraseña? </Text>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundApp: {
    flex: 1,
    width: Dimensions.get("window").width ,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 60,
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFCB8",
    fontWeight: 'bold',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFFCB8",
    width: 300,
    height: 45,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#FDF994",
  },
  buttonText: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    color:"#4A0685"
  },
  input: {
    width: 400,
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
  },
});