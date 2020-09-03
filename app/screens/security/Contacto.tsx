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

const bgImg = require("../../../assets/bg/r.jpg");

export default class Contacto extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    nombre: "",
    correo: "",
    celular :"",
    asunto :"",
    mensaje: "",
    type: "1",
  };

  

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={bgImg} style={styles.backgroundApp}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.titleText}>Contacto</Text>
          <Text style={{ color:"white",fontSize: 18 }}>Por favor, introduce los datos requeridos correctamente.{"\n"}</Text>
      
          <TextInput
            value={this.state.nombre}
            keyboardType="default"
            onChangeText={(nombre) => this.setState({ nombre })}
            placeholder="Nombre"
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TextInput
            value={this.state.correo}
            keyboardType="default"
            onChangeText={(correo) => this.setState({ correo })}
            placeholder="Correo electrónico"
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TextInput
            value={this.state.celular}
            onChangeText={(celular) => this.setState({ celular})}
            placeholder={"Celular"}
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TextInput
            value={this.state.asunto}
            onChangeText={(asunto) => this.setState({ asunto})}
            placeholder={"Asunto"}
            placeholderTextColor="gray"
            style={styles.asunto}
          />
          <TextInput
            value={this.state.mensaje}
            onChangeText={(mensaje) => this.setState({ mensaje})}
            placeholder={"Mensaje"}
            placeholderTextColor="gray"
            style={styles.mensaje}
          />
          <Text>{"\n"}</Text>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}> Enviar</Text>
            
          </TouchableOpacity>
         
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
  asunto: {
    width: 400,
    fontSize: 20,
    height: 80,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
  },
  mensaje: {
    width: 400,
    fontSize: 20,
    height: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
  },
});