import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Alert, Button, AsyncStorage, VirtualizedList, View, Dimensions } from "react-native";
import{ Appbar} from 'react-native-paper';

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
          this.props.navigation.push("Matchiing");
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
      return <View>
        <Appbar.Header style={{backgroundColor:'#760893', height: 60}}>
            <Appbar.Content title="Matching" subtitle={`Bienvenido, ${this.state.name}!`} />
            
            <Appbar.Action icon="heart-outline" onPress={() => this.props.navigation.push("Matching")} />
            <Appbar.Action icon="text" onPress={() => this.props.navigation.push("Publicaciones")} />
            <Appbar.Action icon="message-outline" onPress={() => this.props.navigation.push("Mensajes")} />
            <Appbar.Action icon="logout" onPress={this.signOut } />
          </Appbar.Header>
          <View style={styles.sesionView}>
          </View>
          </View>
    } else {
      return (
        <View>
        <Appbar.Header style={{backgroundColor:'#760893', height: 60}}>
            <Appbar.Content title="Matching" subtitle={"Empieza ahora mismo!"}/>
            <Appbar.Action icon="account-details" onPress={() => this.props.navigation.push("Registrate")} />
            <Appbar.Action icon="account-details" onPress={() => this.props.navigation.push("Matchiing")} />
            <Appbar.Action icon="login" onPress={() => this.props.navigation.push("Iniciar sesión")} />
          </Appbar.Header>
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
  loginView: {
    flex: 1,
    alignItems: "center",
    marginBottom: 50,
    zIndex: 1,
  },
  sesion:{
    fontWeight : "100",
        fontSize:17,
        color:"#F10085",
  },
  sesionView: {
    alignItems: "flex-start",
    alignContent: "flex-start"
  }
});
