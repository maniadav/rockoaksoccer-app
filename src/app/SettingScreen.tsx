import { StyleSheet, ScrollView, Alert } from "react-native";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import SafeAreaComponent from "@components/common/SafeAreaComponent";
import TopNavHeader from "@components/navigation/TopNavHeader";
import { SettingSection, SettingItem } from "@components/setting/SettingComp";
import SCREENS, { MODALS } from "@constants/screen.constant";
import { RootStackNavigationProp } from "types/stack.type";
import { useState } from "react";
import { renderModalContent } from "@components/modal/ModalRenderComp";
import PopUpModal from "@components/modal/PopUpModal";

export default function SettingsScreen({
  navigation,
}: RootStackNavigationProp) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleNavigation = (route: any) => {
    if (!route) {
      Alert.alert("Comping Soon..");
      return;
    }
    navigation.navigate(route);
  };

  return (
    <SafeAreaComponent>
      <TopNavHeader title="Setting" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <SettingSection title="Account">
          <SettingItem
            title="2-F Authentication"
            icon={<MaterialIcons name="security" size={24} color="#4A90E2" />}
            onPress={() => handleNavigation(null)}
          />
          <SettingItem
            title="Log Out"
            icon={<MaterialIcons name="logout" size={24} color="#FF9500" />}
            onPress={() => setActiveModal(MODALS.logOut)}
          />
          <SettingItem
            title="Delete Account"
            icon={
              <MaterialIcons name="delete-forever" size={24} color="#FF3B30" />
            }
            onPress={() => handleNavigation(null)}
          />
        </SettingSection>

        <SettingSection title="Preferences">
          <SettingItem
            title="Manage Notifications"
            icon={<Ionicons name="notifications" size={24} color="#4A90E2" />}
            onPress={() => handleNavigation(null)}
          />
          <SettingItem
            title="Booking History"
            icon={<FontAwesome5 name="history" size={22} color="#34C759" />}
            onPress={() => handleNavigation(SCREENS.booking)}
          />
          <SettingItem
            title="User Preferences"
            icon={<MaterialIcons name="settings" size={24} color="#5856D6" />}
            onPress={() => handleNavigation(null)}
          />
        </SettingSection>

        <SettingSection title="Profile">
          <SettingItem
            title="View Profile"
            icon={<MaterialIcons name="person" size={24} color="#4A90E2" />}
            onPress={() => handleNavigation(SCREENS.profile)}
          />
          <SettingItem
            title="Edit Profile"
            icon={<MaterialIcons name="edit" size={24} color="#FF9500" />}
            onPress={() => handleNavigation(MODALS.editProfile)}
          />
        </SettingSection>
        <PopUpModal
          activeModal={activeModal}
          onClose={() => setActiveModal(null)}
        >
          {renderModalContent(activeModal || "", () => setActiveModal(null))}
        </PopUpModal>
      </ScrollView>
    </SafeAreaComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  contentContainer: {
    padding: 16,
  },
});
