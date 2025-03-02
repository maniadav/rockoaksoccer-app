
import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert } from "react-native";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "@constants/screen.constant";
import { getAsyncStorageValue } from "@utils/localStorage";
import { LOCALSTORAGE } from "@constants/storage.constant";
export default function QuickLinks() {
    {/* Quick Links */ }
    const navigation = useNavigation<any>();


    //if the user is already logged in

    const onPressed = async () => {
        const storedUser = await getAsyncStorageValue(
            LOCALSTORAGE.LOGGED_IN_USER,
            true
        );
        // console.log({ storedUser });
        // const { email: userEmail, password: userPassword } = storedUser || {};
        console.log(storedUser);
        if (storedUser.email !== null && storedUser.password !== null) {
            alert("Already Registered ")
        } else {
            navigation.navigate(SCREENS.signUp)
        }
    }

    const makeCall = async () => {
        const phoneNumber = "tel:0430029221";

        try {
            const supported = await Linking.canOpenURL(phoneNumber);

            if (supported) {
                await Linking.openURL(phoneNumber);
            } else {
                Alert.alert("Error", "Calling is not supported on this device.");
            }
        } catch (error) {
            console.error("Error opening dialer:", error);
            Alert.alert("Error", "Failed to open dialer.");
        }
    };

    //get the user detail if already in the local storage
    return (
        <View style={styles.quickLinksContainer}>
            <TouchableOpacity style={styles.quickLink} onPress={() => onPressed()}>
                <View
                    style={[styles.quickLinkIcon, { backgroundColor: "#d32f2f" }]}
                >
                    <FontAwesome5 name="user-plus" size={18} color="white" />
                </View>
                <Text style={styles.quickLinkText}>REGISTER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickLink}>
                <View
                    style={[styles.quickLinkIcon, { backgroundColor: "#388e3c" }]}
                >
                    <Ionicons name="calendar" size={20} color="white" />
                </View>
                <Text style={styles.quickLinkText}>SCHEDULE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickLink}>
                <View
                    style={[styles.quickLinkIcon, { backgroundColor: "#1976d2" }]}
                >
                    <MaterialIcons name="location-on" size={20} color="white" />
                </View>
                <Text style={styles.quickLinkText}>FIELDS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickLink} onPress={() => makeCall()}>
                <View
                    style={[styles.quickLinkIcon, { backgroundColor: "#f57c00" }]}
                >
                    <MaterialIcons name="contact-support" size={20} color="white" />
                </View>
                <Text style={styles.quickLinkText}>CONTACT</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    quickLinksContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 15,
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    quickLink: {
        alignItems: "center",
        flex: 1,
    },
    quickLinkIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
    },
    quickLinkText: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#333",
    },
})