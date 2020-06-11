import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinA: props.coinA,
      coinB: props.coinB,
      coinB_value: 0,
      convertedValue: 0,
    };

    this.converter = this.converter.bind(this);
  }

  converter() {}

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
          onChangeText={(coinB_value) => this.setState({ coinB_value })}
        />

        <TouchableOpacity style={styles.btn} onPress={this.converter}>
          <Text style={styles.btnText}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.convertedValue}>{this.state.convertedValue}</Text>
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
