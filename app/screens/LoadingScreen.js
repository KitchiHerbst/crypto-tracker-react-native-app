import React from "react";
import { View, StyleSheet, Text } from "react-native";

function LoadingScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.name}>Crypto-Tracker</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 100,
    backgroundColor: "tomato",
    marginBottom: 200,
    borderRadius: 10,
    // alignContent: 'center'
  },
  name: {
    fontSize: 45,
    textAlign: "center",
    paddingTop: 20,
  },
});

export default LoadingScreen;
