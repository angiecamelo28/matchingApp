import { StatusBar } from "expo-status-bar";
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Colors, Card, BottomNavigation, Banner } from 'react-native-paper';
import { Platform } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  Image,
  Dimensions,
  TouchableHighlight,
  ImageBackground,
} from "react-native";

import SessionNavbar from "./security/SessionNavbar";
import { ScrollView } from "react-native-gesture-handler";
const bgImg = require("../../assets/bg/y.jpg");

export default class Main extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      
      loading: false,
      perfiles: [],
      url:
        'http://192.168.0.2:3000/perfil?filter={"include":[{"relation":"pais"},{"relation":"ciudad"},{"relation":"imagenes"}]}',
    };
  }

  componentDidMount = () => {
    this.getPerfiles();
  };

  getPerfiles = () => {
    this.setState({ loading: true });
    console.log()
    fetch(this.state.url)
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          perfiles: data,
          loading: false,
        });
      })
      .catch((err) => {
        Alert.alert("Error", "Ha ocurrido un error cargando los perfiles.");
      });
  };

  render() {
    const { navigation } = this.props;
    if (this.state.loading) {
      return (
        <View style={styles.dataViewLoading}>
          <Text>{"\n"}</Text>
          <Text style={{fontSize: 20, color: "#760893",fontWeight: 'bold'}}>Cargando perfiles... </Text>
          <Text style={{fontSize: 20, color: "#760893",fontWeight: 'bold'}}>Por favor espere.</Text>
          <ActivityIndicator style={styles.cargando} animating={true} color={"#760893"} size={'large'} />
        </View>
      );
      
    } 
    
    
    else {
      return (
        <ImageBackground source={bgImg} style={styles.backgroundApp}>
          
          <SessionNavbar navigation={navigation}></SessionNavbar>
        <View style={styles.perfilesView}>
        <Text>{"\n"}</Text>
        <Text style={{ color: "#760893",   fontWeight: 'bold', fontSize: 42}}>Descubrir</Text>
          
          <FlatList
            style={styles.flatList}
            data={this.state.perfiles}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.perfilViewContent}>
                <TouchableHighlight
                  onPress={() => {
                    Alert.alert("Imagen seleccionada", `Perfil: ${item.nombre}`);
                  }}
                >
                  
                  <Image
                    source={{
                      width: 175,
                      height: 150,
                      uri: `http://192.168.0.2:3000/files/1/${item.imagenes[0].id}`,
                       
                    }}
                  />
                </TouchableHighlight>
                <Text style={styles.perfilName}>{item.nombre}</Text>
                
                <Text>País: {item.pais.Nombre}</Text>
                <Text>Ciudad: {item.ciudad.Nombre}</Text>
                <Icon style={styles.searchIcon}  name= "ios-heart"  size={28} color="#CF1010"/>
              </View>
              
            )}
          ></FlatList>
        </View>
        </ImageBackground>
      );
    }
  }

  
}

const styles = StyleSheet.create({
  perfilViewContent: {
    borderColor: "white",
    borderWidth: 2, 
    borderRadius: 5,
    margin: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 190,
    height: 270,
  },
  perfilName: {
    fontSize: 18,
    color: "#760893",
    fontWeight: 'bold'
  },
  perfilesView: {
    alignItems: "center",
    alignContent: "center",
    flex: 1
  },
  dataViewLoading: {
    backgroundColor: "white",
    alignItems: "center",
    alignContent: "center",
    flex: 1,
    
  },
  HomeView: {
    alignItems: "center",
    alignContent: "center",
    flex: 1
  },
  button: {
    alignSelf: "center",
    alignContent: "flex-start",
  },
  itemTitle: {
    padding: 10,
    fontSize: 25,
    height: 44,
    fontWeight: "bold",
  },
  flatList: {
    alignContent: "center",
    textAlign: "center",
    alignSelf: "center",
    
  },
  img: {
    width: 90,
    height: 160,
  },
  backgroundApp: {
    flex: 1,
     width: Dimensions.get("window").width ,
  },
  searchIcon: {
    padding: 10,
    alignSelf: "center",
},
  cargando: {
    margin: 150,
    alignItems: "center",
    justifyContent: "center"

  },
  scroll:{
    backgroundColor:"white",
    marginStart:20,
    marginEnd:15,
    marginVertical:12,
    alignContent: "center",
    alignSelf: "center",
  },
});