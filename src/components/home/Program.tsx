import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import SCREENS from "@constants/screen.constant";
import { RootStackNavigationProp } from "types/stack.type";

const { width } = Dimensions.get("window");
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';



export default function Program({ navigation }: RootStackNavigationProp) {
  const programsData = [
    {
      id: "1",
      title: "JUNIOR PROGRAM",
      image:
        "https://api.a0.dev/assets/image?text=young%20children%20soccer%20training%20outdoors&aspect=1:1&seed=111",
      ageGroups: "Ages 5-12",
      description: "Building fundamentals & having fun",
    },
    {
      id: "2",
      title: "ADULT TRAINING",
      image:
        "https://api.a0.dev/assets/image?text=teenage%20soccer%20players%20in%20training&aspect=1:1&seed=222",
      ageGroups: "Ages 13-16",
      description: "Develop skills & tactics",
    },
    {
      id: "3",
      title: "WEEKEND SOCIALS",
      image:
        "https://api.a0.dev/assets/image?text=advanced%20soccer%20training%20drills%20teens&aspect=1:1&seed=333",
      ageGroups: "Ages 16-18",
      description: "Advanced training for serious players",
    },
  ];
  return (
    <View style={styles.programsSection}>
      <Text style={styles.sectionTitle}>OUR PROGRAMS</Text>
      <View style={styles.redDivider} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.programsScroll}
      >
        {programsData.map((program) => (
          <TouchableOpacity key={program.id} style={styles.programCard}>
            <Image
              source={{ uri: program.image }}
              style={styles.programImage}
            />
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              style={styles.programGradient}
            >
              <Text style={styles.programTitle}>{program.title}</Text>
              <Text style={styles.programAges}>{program.ageGroups}</Text>
              <Text style={styles.programDesc}>{program.description}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.viewAllButton}
        onPress={() => navigation.navigate(SCREENS.pricing)}
      >
        <Text style={styles.viewAllText}>See the Pricing</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  programsSection: {
    padding: 20,
    marginTop: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
  programsScroll: {
    marginTop: 15,
    marginBottom: 20,
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
  programCard: {
    width: width * 0.7,
    height: 200,
    marginRight: 15,
    borderRadius: 8,
    overflow: "hidden",
  },
  programImage: {
    width: "100%",
    height: "100%",
  },
  programGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
  programTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  programAges: {
    color: "white",
    fontSize: 13,
    marginBottom: 5,
  },
  programDesc: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
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
});
