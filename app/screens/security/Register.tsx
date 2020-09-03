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
  View,
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
      hijos:false,
      fumador:false,
      bebedor:false,
      intereses:"",
      paisId:"",
      ciudadId:"",
      url: "http://192.168.0.2:3000/perfil",
    };
    
    async onRegister() {
      const n = this.state.nombre;
      const c = this.state.correo;
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
          correo: c,
          phone: p,
          sexo: "Masculino",
          fechaNacimiento: f,
          nivelEscolaridad: ne,
          estadoCivil: "Soltero",
          orientacionSexual: "Heterosexual",
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
            console.log(data);
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
            this.state.hijos = false;
            this.state.fumador = false;
            this.state.bebedor = false;
            this.state.intereses = "";
            this.state.paisId = "";
            this.state.ciudadId = "";
            AsyncStorage.setItem("session", JSON.stringify(data));
            Alert.alert("Bienvenido/a a Matching", "Bienvenido a nuestra comunidad, esperamos que encuentres todo lo que buscas. ¡A disfrutar!.");
        
            this.props.navigation.push("Iniciar sesión");
            Alert.alert("Credentials", `correo: ${c} - nombre: ${n}`);
          }
        })
  
        .catch((err) => {
          console.log(err);
          Alert.alert("Advertencia", "Datos inválidos.");
          });
    }
  
    render() {
      const { navigation } = this.props;
      return (
        
        <ImageBackground source={bgImg} style={styles.backgroundApp}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Registrate</Text>
            <Text style={{ color:"white",fontSize: 18 }}>Por favor, introduce los datos requeridos correctamente.{"\n"}</Text>
            <ScrollView> 
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
             
            <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.paisId}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({paisId: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Colombia" value="5f2d9fb7271b3c1e88ba50f4" />  
                    <Picker.Item label="México" value="5f2f76f2c145453a883eee7b" />  
                    <Picker.Item label="Bolivia" value="5f2c869d7d918327a03f215b" />  
            </Picker> 

            <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.ciudadId}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({ciudadId: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Bogotá" value="5f2c89bf7d918327a03f2167" />  
                    <Picker.Item label="Cali" value="5f2c89cf7d918327a03f2168" />  
                    <Picker.Item label="Medellín" value="5f2c89dd7d918327a03f2169" />  
                    <Picker.Item label="Ciudad de México" value="5f2c8a837d918327a03f2172" /> 
                    <Picker.Item label="Tijuana" value="5f2c8ab57d918327a03f2178" />  
                    <Picker.Item label="Guadalajara" value="5f2c8a987d918327a03f2174" />  
                    <Picker.Item label="La Paz" value="5f2c8adb7d918327a03f2179" />  
                    <Picker.Item label="Sucre" value="5f2c8b267d918327a03f217c" /> 
            </Picker> 
            
            <View style={styles.checkboxContainer}>
            <CheckBox
              value={this.state.hijos}
              onValueChange={(hijos) => this.setState({ hijos })}
              style={styles.checkbox}
             />
              <Text style={styles.label}>¿Tienes hijos?</Text>
              </View>

              <View style={styles.checkboxContainer}>
              <CheckBox
              value={this.state.fumador}
              onValueChange={(fumador) => this.setState({ fumador })}
              style={styles.checkbox}
             />
              <Text style={styles.label}>¿Eres fumador?</Text>
              </View>

              <View style={styles.checkboxContainer}>
              <CheckBox
              value={this.state.bebedor}
              onValueChange={(bebedor) => this.setState({ bebedor })}
              style={styles.checkbox}
             />
              <Text style={styles.label}>¿Eres bebedor?</Text>
              </View>

            <TouchableOpacity
              style={styles.button}
              onPress={this.onRegister.bind(this)}
            >
              <Text style={styles.buttonText}> Ingresar </Text>
            </TouchableOpacity>
            <Text style ={{color:"#FFFCB8",fontSize: 17,  borderColor: "black", alignSelf: "center",}}onPress={() => this.props.navigation.push("Iniciar sesión")}> ¿Ya tienes cuenta? Inicia sesión </Text>
            </ScrollView>
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
      alignSelf: "center",
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
        color: 'black',  
        justifyContent: 'center', 
        borderRadius: 50, 
        backgroundColor: "#fff",
        marginVertical:10
        
    }  ,
    checkbox: {
      alignSelf: "center",
      borderColor: "white",
    },
    label: {
      margin: 6,
      color: 'white', 
      fontSize: 16,
      fontWeight: 'bold',
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
  });