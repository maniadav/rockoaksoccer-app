
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
export default function LatestFeed() {

    const newsData = [
        {
            id: "1",
            image:
                "https://api.a0.dev/assets/image?text=soccer%20team%20celebrating%20win%20trophy&aspect=16:9&seed=444",
            title: "U16 TEAM WINS REGIONAL CHAMPIONSHIP",
            date: "FEBRUARY 26, 2025",
            description:
                "Our U16 team claimed victory in the regional finals with an impressive 3-1 win.",
        },
        {
            id: "2",
            image:
                "https://api.a0.dev/assets/image?text=new%20soccer%20equipment%20and%20facilities&aspect=16:9&seed=555",
            title: "NEW TRAINING FACILITIES NOW OPEN",
            date: "FEBRUARY 20, 2025",
            description:
                "We're excited to announce the opening of our new state-of-the-art training facilities.",
        },
    ];
    return (
        <View style={styles.newsSection} >
            <Text style={styles.sectionTitle}>LATEST FEEDS</Text>
            <View style={styles.redDivider} />

            {
                newsData.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.newsCard}>
                        <Image source={{ uri: item.image }} style={styles.newsImage} />
                        <View style={styles.newsContent}>
                            <Text style={styles.newsTitle}>{item.title}</Text>
                            <Text style={styles.newsDate}>{item.date}</Text>
                            <Text style={styles.newsDesc}>{item.description}</Text>
                            <TouchableOpacity style={styles.readMoreButton}>
                                <Text style={styles.readMoreText}>READ MORE</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))
            }

            <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllText}>VIEW ALL NEWS</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    newsSection: {
        padding: 20,
        marginTop: 20,
        backgroundColor: "white",
        alignItems: "center",
    },
    newsCard: {
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        overflow: "hidden",
        marginBottom: 20,
        width: "100%",
    },
    newsImage: {
        width: "100%",
        height: 180,
    },
    newsContent: {
        padding: 15,
    },
    newsTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 5,
    },
    newsDate: {
        fontSize: 12,
        color: "#888",
        marginBottom: 10,
    },
    newsDesc: {
        fontSize: 14,
        color: "#444",
        marginBottom: 15,
        lineHeight: 20,
    },
    readMoreButton: {
        alignSelf: "flex-start",
    },
    readMoreText: {
        color: "#d32f2f",
        fontWeight: "bold",
        fontSize: 14,
    },
    viewAllButton: {
        borderWidth: 2,
        borderColor: "#222",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    viewAllText: {
        color: "#222",
        fontWeight: "bold",
        fontSize: 14,
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
})