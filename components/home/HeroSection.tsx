import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation
import SCREENS from '@/constants/screen.constant';
import SafeAreaComponent from '../common/SafeAreaComponent';
import COLOUR from '@/constants/colour.constant';

const HeroSection = () => {
  const heroItems = [
    'Join Rock Oak Soccer School for expert-led soccer training',
    'Develop your skills through our dynamic and engaging training programs',
    'Open to athletes of all ages and backgrounds',
    'Customised training for every skill level, from beginner to advanced',
    'Train at a top-tier facility with cutting-edge equipment',
  ];

  const navigation = useNavigation<any>();

  return (
    <View style={styles.heroSection}>
      <Image
        source={require('../../assets/images/players.png')} 
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Future Star Soccer Program</Text>
        <Text style={styles.subHeading}>
          Start your soccer journey with Rock Oak Soccer School! Take your game
          to the next level with our experienced coaches and premium facility!
        </Text>
        <Text style={styles.whyJoinText}>Why Join Us?</Text>
        <View style={styles.listContainer}>
          {heroItems.map((item, index) => (
            <View style={styles.listItem} key={index}>
              <Text style={styles.listItemText}>✓ {item}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.finalText}>
          Join us at
          <Text style={styles.boldText}> Rock Oak Soccer School</Text> and take
          your soccer skills to the next level!
        </Text>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(SCREENS.signIn)} // Assuming 'Login' is your route name
          >
            <Text style={styles.buttonText}>Book Now →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  heroSection: {
    padding: 16,
    backgroundColor: '#F4F4F4',
    color: COLOUR.primary,
    borderRadius: 20,
    margin: 8,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
  },
  whyJoinText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  listContainer: {
    marginTop: 10,
  },
  listItem: {
    marginBottom: 10,
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  finalText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#993B1F',
  },
  button: {
    width: 200,
    backgroundColor: '#993B1F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
    marginLeft: 16,
  },
});

export default HeroSection;
