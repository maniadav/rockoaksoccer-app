import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TopNavHeader = ({ title }: any) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleGoBack()}
        style={styles.backButton}
      >
        <Image
          style={styles.image}
          source={require("../../../assets/images/arrow_back.png")}
        />
      </TouchableOpacity>

      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    // marginBottom: 10,
  },
  backButton: {
    position: "absolute",
    padding: 8,
    zIndex: 2,
  },
  image: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    textAlign: "center",
  },
});

export default TopNavHeader;
