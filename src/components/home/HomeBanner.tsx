import { View, Text, ScrollView, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "@constants/screen.constant";

const carouselData = [
    {
        id: '1',
        image: 'https://api.a0.dev/assets/image?text=soccer%20field%20with%20players%20training%20youth%20program&aspect=16:9&seed=123',
        title: 'DEVELOPMENT PROGRAM',
        subtitle: 'Learn, grow and have fun with our expert coaches',
    },
    {
        id: '2',
        image: 'https://api.a0.dev/assets/image?text=kids%20playing%20soccer%20match%20on%20green%20field&aspect=16:9&seed=456',
        title: 'REGISTER NOW',
        subtitle: 'Join our 2025 season today',
    },
    {
        id: '3',
        image: 'https://api.a0.dev/assets/image?text=soccer%20coach%20training%20young%20players%20outdoor&aspect=16:9&seed=789',
        title: 'ELITE TRAINING',
        subtitle: 'Take your skills to the next level',
    },

]

const { width, height } = Dimensions.get('window')
export default function HomeBanner() {
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const navigation = useNavigation<any>();



    //useEffect to handle the carousel

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % carouselData.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return <View style={styles.carouselContainer}>
        <ImageBackground
            source={{ uri: carouselData[activeSlide].image }}
            style={styles.carouselImage}
        >
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.7)']}
                style={styles.carouselGradient}
            >
                <View style={styles.carouselContent}>
                    <Text style={styles.carouselTitle}>{carouselData[activeSlide].title}</Text>
                    <Text style={styles.carouselSubtitle}>{carouselData[activeSlide].subtitle}</Text>
                    <TouchableOpacity style={styles.carouselButton} onPress={() => navigation.navigate(SCREENS.feed)}>
                        <Text style={styles.carouselButtonText} >LEARN MORE</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.dotsContainer}>
                    {carouselData.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                { backgroundColor: index === activeSlide ? '#fff' : 'rgba(255, 255, 255, 0.5)' }
                            ]}
                        />
                    ))}
                </View>
            </LinearGradient>
        </ImageBackground>
    </View>
}


const styles = StyleSheet.create({
    carouselContainer: {
        width: width,
        height: height * 0.4,
        marginTop: 10
    },
    carouselImage: {
        width: '100%',
        height: '100%',
    },
    carouselGradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        padding: 20,
    },
    carouselContent: {
        marginBottom: 20,
    },
    carouselTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    carouselSubtitle: {
        color: 'white',
        fontSize: 16,
        marginBottom: 15,
    },
    carouselButton: {
        backgroundColor: "#993b1f",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    carouselButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },



})

