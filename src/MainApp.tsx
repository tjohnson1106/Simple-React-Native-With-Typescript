import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {}

interface State {
  name: string;
}

class MainApp extends Component {
  state = { name: "TS Example" };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello this is a {this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default MainApp;
