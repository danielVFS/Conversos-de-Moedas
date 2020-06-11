import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Converter from "./src/components/Converter";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Converter coinA="USD" coinB="BRL" />
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
});
