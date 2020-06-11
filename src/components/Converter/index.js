import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";

import api from "../../services/api";

export default class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinA: props.coinA,
      coinB: props.coinB,
      coinA_value: 0,
      convertedValue: 0,
    };

    this.converter = this.converter.bind(this);
  }

  async converter() {
    let from_to = this.state.coinA + "_" + this.state.coinB;

    const response = await api.get(
      `convert?q=${from_to}&compact=ultra&apiKey=d8148018a3851e72d0e5`
    );

    let price = response.data[from_to];

    let result = price * parseFloat(this.state.coinA_value);

    this.setState({ convertedValue: result.toFixed(2) });
    Keyboard.dismiss();
  }

  render() {
    const { coinA, coinB } = this.props;

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/coin.png")} />

        <Text style={styles.title}>
          {coinA} para {coinB}
        </Text>

        <TextInput
          placeholder="Valor a ser convertido"
          placeholderTextColor="#f9a23c"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(coinA_value) => this.setState({ coinA_value })}
        />

        <TouchableOpacity style={styles.btn} onPress={this.converter}>
          <Text style={styles.btnText}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.convertedValue}>
          {this.state.convertedValue === 0 ? "" : this.state.convertedValue}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: -50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f9a23c",
  },
  input: {
    width: 280,
    height: 45,
    textAlign: "center",
    borderRadius: 0,
    borderColor: "#f9a23c",
    color: "#f9a23c",
    borderWidth: 2,
    marginTop: 15,
    fontSize: 20,
  },
  btn: {
    width: 150,
    height: 45,
    marginTop: 15,
    backgroundColor: "#F9A23C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btnText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  convertedValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f9a23c",
    marginTop: 30,
  },
});
