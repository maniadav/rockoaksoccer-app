
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import {
    MaterialIcons,
    AntDesign,
} from "@expo/vector-icons";
export default function UpcomingEvents() {

    const eventsData = [
        {
            id: "1",
            date: "MAR 15, 2025",
            title: "Season Opener",
            location: "Rock Oak Fields",
        },
        {
            id: "2",
            date: "APR 10, 2025",
            title: "Holiday Training Camp",
            location: "Central Park",
        },
        {
            id: "3",
            date: "MAY 22, 2025",
            title: "Junior Tournament",
            location: "Rock Oak Fields",
        },
    ];

    return (
        // {/* Events Section */ }
        <View style={styles.eventsSection} >
            <Text style={styles.sectionTitle}>UPCOMING EVENTS</Text>
            <View style={styles.redDivider} />

            {
                eventsData.map((event) => (
                    <TouchableOpacity key={event.id} style={styles.eventCard}>
                        <View style={styles.eventDateBox}>
                            <Text style={styles.eventDate}>{event.date}</Text>
                        </View>
                        <View style={styles.eventDetails}>
                            <Text style={styles.eventTitle}>{event.title}</Text>
                            <View style={styles.eventLocation}>
                                <MaterialIcons name="location-on" size={16} color="#888" />
                                <Text style={styles.eventLocationText}>{event.location}</Text>
                            </View>
                        </View>
                        <AntDesign name="right" size={18} color="#888" />
                    </TouchableOpacity>
                ))
            }

            <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllText}>VIEW FULL CALENDAR</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    eventsSection: {
        padding: 20,
        marginTop: 20,
        backgroundColor: "white",
        alignItems: "center",
    },
    eventCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        padding: 15,
        marginVertical: 8,
        width: "100%",
    },
    eventDateBox: {
        width: 80,
        marginRight: 15,
    },
    eventDate: {
        color: "#666",
        fontSize: 12,
        fontWeight: "bold",
    },
    eventDetails: {
        flex: 1,
    },
    eventTitle: {
        fontSize: 16,
        color: "#222",
        fontWeight: "600",
        marginBottom: 5,
    },
    eventLocation: {
        flexDirection: "row",
        alignItems: "center",
    },
    eventLocationText: {
        color: "#888",
        fontSize: 13,
        marginLeft: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#222",
        textAlign: "center",
    },
    redDivider: {
        width: 60,
        height: 3,
        backgroundColor: "#d32f2f",
        marginVertical: 10,
    },
    viewAllButton: {
        borderWidth: 2,
        borderColor: '#222',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    viewAllText: {
        color: '#222',
        fontWeight: 'bold',
        fontSize: 14,
    },
})