import { StatusBar } from "expo-status-bar";
import React from "react";
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
  ScrollView
} from "react-native";

import SessionNavbar from "./security/SessionNavbar";
import Home from "../screens/Main";
const bgImg = require("../../assets/bg/y.jpg");

export default class Main extends React.Component {
    constructor(props) {
        super(props);
      }
    
      state = {
        isLoggedIn: false
      };
    
      async componentDidMount() {
        let session = await AsyncStorage.getItem("session");
    
        if (session) {
          console.log(session)
          this.setState({
            isLoggedIn: true,
          });
        }
      }
  
  render() {
    const { navigation } = this.props;
    if(this.state.isLoggedIn === false){
        return(
            <ImageBackground source={bgImg} style={styles.backgroundApp}>   
             
            
             <SessionNavbar navigation={navigation}></SessionNavbar>
            <View style={styles.homeView}>  
            
            <View style={styles.homeView}>  
            <Text style={{ color: "#760893",   fontWeight: 'bold', fontSize: 42}}>Matching</Text>
            <Text style={styles.texto}> Bienvenidos a la aplicación #1 en citas web.  </Text>
        
            </View>
            <ScrollView  style={styles.scroll}>
            <View style={styles.homeView}>  
            
            <Text style={styles.titulos}>Matching: encuentra tu pareja ideal en nuestra aplicación.</Text>
            <Text style={styles.texto}>Cada mes, más de 5000 historias reales empiezan en Matching.</Text>
            <Image style={styles.imagenHome} source={require('../../assets/bg/home2.jpg')}></Image>
            <Text style={styles.texto}>Cada mes 210 000 conversaciones comienzan en Matching.</Text>
            <Text>{"\n"}</Text>
            <Text style={styles.titulos}>¿Por qué Matching?</Text>
            <Text style={styles.texto}>Encuentra el amor, la persona perfecta para ti.</Text>
            <Text style={styles.detalles}>Nuestros usuarios buscan crear su historia, y nosotros hacemos de todo para asegurarnos que lo consigan.</Text>
            <Image style={styles.imagenHome} source={require('../../assets/bg/home3.jpg')}></Image>
            <Text style={styles.texto}>¡Atrévete a conocer alguien ahora!</Text>
            <Text>{"\n"}</Text>
            <Text style={styles.titulos}>¿Cómo funciona Matching?</Text>
            <Text style={styles.texto}>Estás sólo a tres pasos de comenzar:</Text>
            <Image style={styles.imagenHome} source={require('../../assets/bg/home4.jpg')}></Image>
            <Text>{"\n"}</Text>
            <Text style={styles.texto}> Paso 1. Cuentános quien eres.</Text>
            <Text style={styles.detalles}> ¿Quién eres? ¿Qué te gusta hacer? ¿Cuáles son tus intereses? Hablanos sobre ti. Comparte tus fotos. Crea un álbum que refleje tu personalidad.Nuestros usuarios buscan crear su historia, y nosotros hacemos de todo para asegurarnos que lo consigan.</Text>
            <Image style={styles.imagenHome} source={require('../../assets/bg/home5.jpg')}></Image>
            <Text>{"\n"}</Text>
            <Text style={styles.texto}> Paso 2. Encuentra a la persona que estás buscando.</Text>
            <Text style={styles.detalles}>Nuestros usuarios buscan crear su historia, y nosotros hacemos de todo para asegurarnos que lo consigan.</Text>
            <Image style={styles.imagenHome} source={require('../../assets/bg/home6.jpg')}></Image>
            <Text>{"\n"}</Text>
            <Text style={styles.texto}> Paso 3. Contácta.</Text>
            <Text style={styles.detalles}> Escribe, envía fotos. Una buena forma de romper el hielo es hablar sobre los detalles que te atrajeron de su perfil o de cosas que tengan en común.</Text>
            <Text>{"\n"}</Text>
            <Text style={styles.titulos}>Testimonios</Text>
            <Text style={styles.texto}> Descubre las mejores historias de amor de Meetic con los testimonios de nuestros usuarios.</Text>
            <Image style={styles.imagenHome} source={require('../../assets/bg/pareja1.jpg')}></Image>
            <Text>{"\n"}</Text>
            <Text style={styles.texto}> Antonia y Juan.</Text>
            <Text style={styles.testimonios}>-- Gracias ha está aplicación hace 5 meses encontramos al amor de nuestras vidas. Nunca creímos que el amor se podría encontrar por internet, pero efectivamente, lo encontramos. ¡Esperamos que tengan la misma suerte que nosotros!:)</Text>
            <Image style={styles.imagenHome} source={require('../../assets/bg/pareja2.jpg')}></Image>
            <Text>{"\n"}</Text>
            <Text style={styles.texto}> Paulo y Julieth.</Text>
            <Text style={styles.testimonios}>-- Hace poco nos conocimos hemos compaginado muy bien, esperamos llevar la relación a otro nivel. ¡Suerte!</Text>
            
            <Image style={styles.imagenHome} source={require('../../assets/bg/pareja3.jpg')}></Image>
            <Text>{"\n"}</Text>
            <Text style={styles.texto}> Martha y Edward.</Text>
            <Text style={styles.testimonios}>-- Estamos realmente agradecidos con esta aplicación, ya que hace 3 años nos conocimos por aquí. Ahora tenemos una familia hermosa.</Text>
            <Image style={styles.imagenHome} source={require('../../assets/bg/pareja4.jpg')}></Image>
            <Text>{"\n"}</Text>
            <Text style={styles.texto}> Juan David y Geraldin.</Text>
            <Text style={styles.testimonios}>-- Hey!Escribimos esto una semana antes de nuestra boda, solo les queríamos comentar que está app ha sido la mejor decisión que pudimos tomar! </Text>
            
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            </View>
            </ScrollView>
            </View>
            </ImageBackground>
          );
    }else{
        return <Home navigation={navigation}></Home>
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
  homeView: {
    alignItems: "center",
    alignContent: "center",
  },
  
});