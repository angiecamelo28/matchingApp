import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";

//import SessionNavbar from "./security/SessionNavbar";
 //<SessionNavbar navigation={navigation}></SessionNavbar>
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
          <Text>Cargando perfiles... por favor espere.</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.perfilesView}>
         
          <Text style={{ alignContent: "",color: "#860CF8",   fontWeight: 'bold', fontSize: 25 }}>Descubrir</Text>
          <FlatList
            style={styles.flatList}
            data={this.state.perfiles}
            renderItem={({ item }) => (
              <View style={styles.perfilViewContent}>
                <TouchableHighlight
                  onPress={() => {
                    Alert.alert("Imagen seleccionada", `Perfil: ${item.nombre}`);
                  }}
                >
                  <Image
                    source={{
                      width: 200,
                      height: 150,
                      uri: `http://192.168.0.2:3000/files/1/${item.imagenes[0].id}`,
                       
                    }}
                  />
                </TouchableHighlight>
                <Text style={styles.perfilName}>{item.nombre}</Text>
                
                <Text>Pais: {item.pais.Nombre}</Text>
                <Text>Ciudad: {item.ciudad.Nombre}</Text>
              </View>
            )}
          ></FlatList>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  perfilViewContent: {
    borderColor: "gray",
    borderWidth: 2, 
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  perfilName: {
    fontSize: 18,
    color: "#860CF8",
    fontWeight: 'bold'
  },
  perfilesView: {
    alignItems: "center",
    alignContent: "center",
    flex: 2,
  },
  dataViewLoading: {
    alignItems: "center",
    alignContent: "center",
    flex: 1,
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
    width: 100,
    height: 150,
  },
  separator: {
    height: 4,
    backgroundColor: "#CEAFEC",
    width: Dimensions.get("window").width / 2,
  },
});