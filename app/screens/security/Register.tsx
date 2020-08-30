import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
  Picker,
  CheckBox,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const bgImg = require("../../../assets/bg/r.jpg");

export default class Register extends React.Component {
    constructor(props) {
      super(props);
    }
    state = {
      nombre:"",
      correo: "",
      phone: "",
      sexo: "",
      fechaNacimiento:"",
      nivelEscolaridad :"",
      estadoCivil: "",
      orientacionSexual: "",
      ocupacion:"",
      hijos:"",
      fumador:"",
      bebedor:"",
      intereses:"",
      paisId:"",
      ciudadId:"",
      url: "http://192.168.0.2:3000/perfil",
    };
    
    async onRegister() {
      const n = this.state.nombre;
      const u = this.state.correo;
      const p = this.state.phone;
      const s = this.state.sexo;
      const f = this.state.fechaNacimiento;
      const ne = this.state.nivelEscolaridad;
      const ec = this.state.estadoCivil;
      const os = this.state.orientacionSexual;
      const o = this.state.ocupacion;
      const h = this.state.hijos;
      const fm = this.state.fumador;
      const i= this.state.intereses;
      const pI = this.state.paisId;
      const cI= this.state.ciudadId;

      fetch(this.state.url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: n,
          correo: u,
          phone: p,
          sexo: s,
          fechaNacimiento: f,
          nivelEscolaridad: ne,
          estadoCivil: ec,
          orientacionSexual: os,
          ocupacion:o,
          hijos: h,
          fumador: fm,
          intereses: i,
          paisId: pI,
          ciudadId: cI
        }),
      })
        .then((data) => data.json())
        .then((data) => {
          if (data.error) {
            Alert.alert("Advertencia", "Datos inválidos.");
          } else {
            this.state.nombre = "";
            this.state.correo = "";
            this.state.phone = "";
            this.state.sexo = "";
            this.state.fechaNacimiento = "";
            this.state.nivelEscolaridad = "";
            this.state.estadoCivil = "";
            this.state.orientacionSexual = "";
            this.state.ocupacion = "";
            this.state.hijos = "";
            this.state.fumador = "";
            this.state.bebedor = "";
            this.state.intereses = "";
            this.state.paisId = "";
            this.state.ciudadId = "";
            AsyncStorage.setItem("session", JSON.stringify(data));
            this.props.navigation.push("Iniciar sesión");
          }
        })
  
        .catch((err) => {
          Alert.alert("Advertencia", "Datos inválidos.");
        });
    }
  
    render() {
      const { navigation } = this.props;
      return (
        <ScrollView> 
        <ImageBackground source={bgImg} style={styles.backgroundApp}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Registrate</Text>
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
              value={this.state.phone}
              keyboardType="default"
              onChangeText={(phone) => this.setState({ phone })}
              placeholder="Teléfono"
              placeholderTextColor="gray"
              style={styles.input}
            />
            <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.sexo}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({sexo: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Masculino" value="Masculino" />  
                    <Picker.Item label="Femenino" value="Femenino" />  
            </Picker>  

            <TextInput
              value={this.state.fechaNacimiento}
              keyboardType="default"
              onChangeText={(fechaNacimiento) => this.setState({ fechaNacimiento })}
              placeholder="Fecha de nacimiento"
              placeholderTextColor="gray"
              style={styles.input}
            />
            <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.nivelEscolaridad}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({nivelEscolaridad: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Educación Básica" value="Educación Básica" />  
                    <Picker.Item label="Educación Media" value="Educación Media" />  
                    <Picker.Item label="Educación Superior" value="Educación Superior" />  
            </Picker>  
            <Text>{"\n"}</Text>
            <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.estadoCivil}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({estadoCivil: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Soltero" value="Soltero" />  
                    <Picker.Item label="Unión libre" value="Unión libre" />  
                    <Picker.Item label="Separado" value="Separado" />  
                    <Picker.Item label="Divorciado" value="Divorciado" />  
                    <Picker.Item label="Viudo" value="Viudo" /> 
                    
            </Picker>  
            <Text>{"\n"}</Text>
            <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.orientacionSexual}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({orientacionSexual: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Heterosexual" value="Heterosexual" />  
                    <Picker.Item label="Homosexual" value="Homosexual" />  
                    <Picker.Item label="Bisexual" value="Bisexual" />  
            </Picker>  
            
            <TextInput
              value={this.state.ocupacion}
              keyboardType="default"
              onChangeText={(ocupacion) => this.setState({ ocupacion })}
              placeholder="Ocupación"
              placeholderTextColor="gray"
              style={styles.input}
            />
            
              

            <Text>{"\n"}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.onRegister.bind(this)}
            >
              <Text style={styles.buttonText}> Ingresar </Text>
            </TouchableOpacity>
            <Text style ={{color:"#FFFCB8",fontSize: 17,  borderColor: "black"}}onPress={() => this.props.navigation.push("Iniciar sesión")}> ¿Ya tienes cuenta? Inicia sesión </Text>
          </SafeAreaView>
        </ImageBackground>
        </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    backgroundApp: {
      flex: 1,
      width: Dimensions.get("window").width ,
    },
    container: {
      flex: 10,
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
    textStyle:{  
      margin: 24,  
      fontSize: 25,  
      fontWeight: 'bold',  
      textAlign: 'center',  
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
      fontSize: 15,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: "white",
      backgroundColor: "#fff",
      marginVertical: 10,
      borderRadius: 10,
    },
    pickerStyle:{  
        height: 45,  
        width: 400,  
        color: 'gray',  
        justifyContent: 'center', 
        borderRadius: 10, 
        backgroundColor: "#fff",
        
    }  ,
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },

  });