import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Animated,
} from "react-native";
import { useState, useRef, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";

interface PopUpModalProps {
  activeModal: string | null;
  children?: React.ReactNode;
  onClose?: () => void;
  heading?: string;
}

export default function PopUpModal({
  activeModal,
  children,
  onClose,
  heading,
}: PopUpModalProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (activeModal !== null) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [activeModal]);

  const closeModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => onClose?.());
  };

  if (activeModal === null) return null;

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={activeModal !== null}
      onRequestClose={closeModal}
    >
      <Pressable style={styles.modalOverlay} onPress={closeModal}>
        <Pressable>
          <Animated.View
            style={[
              styles.modalView,
              {
                opacity: fadeAnim,
                transform: [
                  {
                    translateY: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            {heading && (
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  borderBottomWidth: 0.5,
                  borderColor: "#ddd",
                  padding: 20,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 600 }}>{heading}</Text>
                <Pressable style={styles.closeButton} onPress={closeModal}>
                  <MaterialIcons name="close" size={24} color="#666" />
                </Pressable>
              </View>
            )}
            {children}
          </Animated.View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 16,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 1,
    padding: 5,
  },
});
