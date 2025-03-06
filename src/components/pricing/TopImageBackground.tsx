import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import RunningImg from "@images/leg_ball.jpg";
import BackButton from "@components/BackButton";

const TopImageBackground = () => {
  return (
    <View style={styles.heroSection}>
      <View
        style={{
          padding: 30,
          position: "absolute",
          top: 50,
          left: 20,
          backgroundColor: "black",
        }}
      >
        <BackButton />
      </View>

      <Image source={RunningImg} style={styles.heroImage} resizeMode="cover" />
      <View style={styles.heroContent}>
        <Text style={styles.heroText}>Join Our Elite Soccer Program</Text>
        <Text style={styles.heroSubtext}>
          Professional Training for All Ages
        </Text>
      </View>
    </View>
  );
};

export default TopImageBackground;

const styles = StyleSheet.create({
  heroSection: {
    width: "100%",
    height: 360,
    marginBottom: 24,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderBottomWidth: 2,
    borderColor: "#993b1f",
  },
  heroContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 28,
    paddingBottom: 32,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  heroText: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  heroSubtext: {
    color: "#f0e6d6",
    fontSize: 16,
    letterSpacing: 0.3,
  },
});
