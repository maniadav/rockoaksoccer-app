import TopNavHeader from "@components/navigation/TopNavHeader";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";

// const LogOutModal = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={{ flex: 1, height: 100, backgroundColor: "black" }}>
//       <TopNavHeader title="Log Out" />
//       {/* <Text style={{ fontSize: 30 }}>This is a modal!</Text>
//       <Button onPress={() => navigation.goBack()} title="Dismiss" /> */}
//     </View>
//   );
// };

// export default LogOutModal;

const CustomModal = ({ visible, onClose }: any) => {
  const navigation = useNavigation();
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>This is a modal</Text>
          <Button onPress={() => navigation.goBack()} title="Dismiss" /> 
        </View>
      </View>
    </Modal>
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
    width: "80%", // Modal width
    height: 300, // Adjust height here
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
