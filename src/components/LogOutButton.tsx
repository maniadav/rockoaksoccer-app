import React from "react";
import Button from "./Button";
import { LOCALSTORAGE } from "@constants/storage.constant"; // Ensure the path is correct
import { removeAsyncStorageValue } from "@utils/localStorage";

import SCREENS from "@constants/screen.constant";
import { useNavigation } from "expo-router";

export default function LogOutButton() {
  const navigation = useNavigation<any>();
  const handleLogOut = async () => {
    try {
      await removeAsyncStorageValue(LOCALSTORAGE.LOGGED_IN_USER);
      await removeAsyncStorageValue(LOCALSTORAGE.MFA_ACCESS_TOKEN);
      navigation.navigate(SCREENS.signIn);
      alert("You have been logged out successfully.");
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Something went wrong while logging out. Please try again.");
    }
  };

  return (
    <Button mode="contained" onPress={handleLogOut}>
      Sign Out
    </Button>
  );
}
