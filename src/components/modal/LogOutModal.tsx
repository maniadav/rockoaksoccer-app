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

const CustomModal = () => {
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
    <View>
      <TopNavHeader title="Sign Out" />
      <View
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          paddingTop: 50,
          paddingHorizontal: 10,
        }}
      >
        <Text style={styles.modalText}>Are you sure you want to logout?</Text>
        <View
          style={{
            width: "100%",
            display: "flex",
            gap: 20,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <ButtonComp
            rounded
            title="Sign Out"
            leftIcon={<MaterialIcons name="cancel" size={24} color="white" />}
            onPress={() => handleLogOut()}
          />

          <ButtonComp
            rounded
            bgColor="red"
            title="Cancel"
            leftIcon={<MaterialIcons name="cancel" size={24} color="white" />}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center", // Centers the modal vertically
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Adds a semi-transparent overlay
  },
  modalContainer: {
    // width: "80%", // Modal width
    // height: 300, // Adjust height here
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default CustomModal;
