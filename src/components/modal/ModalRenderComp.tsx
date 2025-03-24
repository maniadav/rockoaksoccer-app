import {
  View,
  Text,
  Pressable,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { MODALS } from "@constants/screen.constant";
import LogOutPopupComp from "./LogOutPopupComp";

export const renderModalContent = (
  activeModal: string,
  closeModal: ((event: GestureResponderEvent) => void) | null | undefined
) => {
  console.log({ activeModal });
  switch (activeModal) {
    case "info":
      return (
        <View>
          <View style={[styles.modalHeader, { backgroundColor: "#007AFF" }]}>
            <Text style={[styles.modalTitle, { color: "white" }]}>
              Information
            </Text>
            <Pressable onPress={closeModal}>
              <MaterialIcons name="close" size={24} color="white" />
            </Pressable>
          </View>
          <Text style={styles.modalText}>
            This is an informational modal with important details about your
            application. You can find more information here about various
            features and functionality.
          </Text>
        </View>
      );

    case "success":
      return (
        <View>
          <View style={[styles.modalHeader, { backgroundColor: "#34C759" }]}>
            <Text style={[styles.modalTitle, { color: "white" }]}>
              Success!
            </Text>
            <Pressable onPress={closeModal}>
              <MaterialIcons name="close" size={24} color="white" />
            </Pressable>
          </View>
          <View style={styles.modalContent}>
            <Ionicons
              name="checkmark-circle"
              size={60}
              color="#34C759"
              style={styles.modalIcon}
            />
            <Text style={styles.modalText}>
              Your action has been completed successfully! Everything worked as
              expected.
            </Text>
          </View>
        </View>
      );

    case MODALS.logOut:
      return <LogOutPopupComp closeModal={closeModal} />;

    default:
      return null;
  }
};

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalContent: {
    alignItems: "center",
    padding: 20,
  },
  modalIcon: {
    marginBottom: 15,
  },
  modalText: {
    marginBottom: 20,
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    padding: 20,
    textAlign: "center",
  },
});
