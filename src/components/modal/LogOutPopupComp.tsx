import ButtonComp from "@components/common/ButtonComp";
import LogOutButton from "@components/LogOutButton";
import TopNavHeader from "@components/navigation/TopNavHeader";
import {
  CommonActions,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { removeAsyncStorageValue } from "@utils/localStorage";
import { LOCALSTORAGE } from "@constants/storage.constant";
import SCREENS from "@constants/screen.constant";
import { StackNavigationProp } from "@react-navigation/stack";

const LogOutPopupComp = ({ closeModal }: any) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleLogOut = async () => {
    try {
      await removeAsyncStorageValue(LOCALSTORAGE.LOGGED_IN_USER);
      await removeAsyncStorageValue(LOCALSTORAGE.MFA_ACCESS_TOKEN);
      // force re-render
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: SCREENS.signIn }],
        })
      );
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Something went wrong while logging out. Please try again.");
    }
  };

  return (
    <View style={styles.modalContent}>
      <View style={styles.modalIcon}>
        <MaterialIcons name="logout" size={50} color="#007AFF" />
      </View>

      <Text style={styles.modalTitle}>Sign Out</Text>
      <Text style={styles.modalText}>Are you sure you want to logout?</Text>

      <View style={styles.buttonContainer}>
        <ButtonComp
          rounded
          title="Sign Out"
          leftIcon={<MaterialIcons name="logout" size={24} color="white" />}
          onPress={handleLogOut}
        />

        <ButtonComp
          rounded
          bgColor="#FF3B30"
          title="Cancel"
          leftIcon={<MaterialIcons name="cancel" size={24} color="white" />}
          onPress={closeModal}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  modalContent: {
    backgroundColor: "white",
    width: "85%",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
  },
  modalIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#F0F8FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: "center",
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    width: "100%",
  },
});

export default LogOutPopupComp;
