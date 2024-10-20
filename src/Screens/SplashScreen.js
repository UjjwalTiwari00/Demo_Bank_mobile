import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#001D68" barStyle="light-content" />
      <View style={styles.backgroundColor} />
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
  },
  backgroundColor: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#040273",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  logo: {
    width: width * 0.7,
    height: height * 0.6,
    zIndex: 2,
  },
});