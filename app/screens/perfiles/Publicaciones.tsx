import { StatusBar } from "expo-status-bar";
import React from "react";

import{ Appbar} from 'react-native-paper';
import SessionNavbar from "../security/SessionNavbar";
import {
    StyleSheet,
    Text,
    View,
    Alert,
    FlatList,
    ImageBackground,
    Image,
    Dimensions,
    TouchableHighlight,
    AsyncStorage,
    ScrollView,
    TouchableOpacity,
    TextInput,
  } from "react-native";

  const bgImg = require("../../../assets/bg/y.jpg");
  import Home from "../../screens/Main";

export default class Publicaciones extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoggedIn: true,
    name: "",
    publicacion: "",
  };

  

  

  render() {
    const { navigation } = this.props;
    if(this.state.isLoggedIn === true){
    
        return(
            <ImageBackground source={bgImg} style={styles.backgroundApp}>   
             
            
             <SessionNavbar navigation={navigation}></SessionNavbar>
            <View style={styles.homeView}>  
            
            <View style={styles.homeView}>  
            <Text style={{ color: "#760893",   fontWeight: 'bold', fontSize: 42}}>Publicaciones</Text>
        
            </View>
            <ScrollView  style={styles.scroll}>
            <View style={styles.homeView}> 
            <Text>{"\n"}</Text>
            <View style={styles.view}>
            <TextInput
            value={this.state.publicacion}
            onChangeText={(publicacion) => this.setState({ publicacion})}
            placeholder={"¿Qué estás pensando?"}
            placeholderTextColor="gray"
            style={styles.publicacion}
          /> 
          </View>
            
            
            <Text>{"\n"}</Text>
            <View style={styles.view}>
            <Text style={styles.detalles}> Marzo 15 del 2020</Text>
            <Text style={styles.testimonios}>-- Quiero salir a correr, pero también quiero seguir en mi cama:(.</Text>
            </View>
            <Text>{"\n"}</Text>
            <View style={styles.viewImagen}>
            <Text style={styles.detalles}> Abril 01 del 2020</Text>
            <Image style={styles.imagenHome} source={require('../../../assets/bg/publicacion2.jpg')}></Image>
            </View>
            <Text>{"\n"}</Text>
            <View style={styles.view}>
            <Text style={styles.detalles}> Marzo 15 del 2020</Text>
            <Text style={styles.testimonios}>-- Me encantan los días lluviosos y oscuros. #Plan Arrunchis</Text>
            </View>
            <Text>{"\n"}</Text>
            <View style={styles.viewImagen}>
            <Text style={styles.detalles}> Enero 20 del 2020</Text>
            <Image style={styles.imagenHome} source={require('../../../assets/bg/publicacion1.jpg')}></Image>
            </View>
            <Text>{"\n"}</Text>
            <View style={styles.view}>
            <Text style={styles.detalles}> Enero 02 del 2020</Text>
            <Text style={styles.testimonios}>--Que buen día para tomar el sol! Día de playa aproximandose. </Text>
            </View>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            </View>
            </ScrollView>
            </View>
            </ImageBackground>
          );
            }
   
   
}
}


const styles = StyleSheet.create({
  imagenHome: {
    height:250,
    width: 400,
    marginTop:30,
    paddingEnd:30,
    padding: 10,
    borderColor: "black",
    paddingLeft:10,
    borderWidth: 2,
  },
  view:{
    borderColor: "black",
    paddingLeft:10,
    paddingVertical:20,
    borderWidth: 2,
  },
  viewImagen:{
    borderColor: "black",
    paddingLeft:10,
    paddingVertical:20,
    borderWidth: 2,
  },
  backgroundApp: {
    flex: 1,
     width: Dimensions.get("window").width ,
    
  },
  scroll:{
    backgroundColor:"white",
    marginStart:20,
    marginEnd:15,
    marginVertical:12,
    alignContent: "center",
    alignSelf: "center",
  },

  titulos:{
    alignItems: "center",
    justifyContent: "center",
    color: "#760893",
    fontWeight: 'bold',
    fontSize: 22,
    marginStart:5,
    padding: 10,
    
  },
  texto:{
    color: "black",
    fontWeight: 'bold',
    fontSize: 18,
    marginStart:18,
    padding: 10,
  },
  testimonios:{
    color: "black",
    fontWeight: 'bold',
    fontSize: 16,
    marginStart:20,
    borderColor: "black",
    paddingLeft:10,
    borderWidth: 2,
    marginEnd:15,
    alignItems: "center",
    justifyContent: "center",
  },
  detalles:{
    color: "black",
    fontSize: 14,
    marginStart:18,
    alignItems: "center",
    justifyContent: "center",
    
  },
  publicacion: {
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
  homeView: {
    alignItems: "center",
    alignContent: "center",
  },
  
});