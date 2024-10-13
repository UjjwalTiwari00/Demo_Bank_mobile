import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundColor} />
      <StatusBar backgroundColor="#001D68" barStyle="light-content" />
      <Image
        source={require("../assets/BgIcon.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.overlay} />

      <Image
        source={require("../assets/icon.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    position: "relative",

    marginTop: 20,
  },
  backgroundColor: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: "#040273",
  },
  backgroundImage: {
    position: "absolute",
    width: width, // Fills the screen width
    height: height, // Fills the screen height
    top: 0, // Start from top
    left: 0, // Start from left
    opacity: 0.2, // Slight opacity for the background image
  },
  logo: {
    width: width * 0.7, // 40% of the screen width for the logo
    height: height * 0.6, // 20% of the screen height for the logo
    zIndex: 2, // Ensures the logo is above the background
    marginTop: height * 1,
  },
});
