import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LogOutButton from '@/components/LogOutButton';
import ModularSearchBar from '@/components/ModularSearchbar';
import { theme } from '@/components/theme';
import { RootStackParamList } from '@/types/stack.type'; // Define your root navigation types

// Define props for EventListingScreen
type EventListingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EventListing'>;
};

const EventListingScreen: React.FC<EventListingScreenProps> = ({
  navigation,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <ImageBackground
      // source={require('../assets/images/background.jpg')}
      resizeMode="cover"
      style={styles.background}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <Image
            style={styles.image}
            source={require('../assets/images/menu.png')}
          />
          <Text style={styles.logoText}>
            Rock<Text style={styles.primaryText}>Oak</Text>
            <Text style={styles.logoTextSmall}> Soccer</Text>
          </Text>
          <Text style={styles.subheading}>Find</Text>
          <Text style={styles.trendingText}>Trending Events</Text>
          <ModularSearchBar mode="bar" />
          {/* Additional Components */}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default EventListingScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    width: 24,
    height: 24,
    marginBottom: 15,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  primaryText: {
    color: theme.colors.primary,
  },
  logoTextSmall: {
    fontSize: 16,
    color: 'black',
    textTransform: 'lowercase',
    position: 'absolute',
    left: 50,
    fontWeight: 'normal',
  },
  subheading: {
    fontWeight: 'normal',
    fontSize: 16,
    color:'gray'
  },
  trendingText: {
    fontWeight: '600',
    fontSize: 18,
    color: theme.colors.primary,
    paddingLeft: 20,
    paddingBottom: 6,
  },
});
