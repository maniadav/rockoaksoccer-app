import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LogOutButton from '@/components/LogOutButton';
import ModularSearchBar from '@/components/ModularSearchbar';
import { theme } from '@/components/theme';
import { RootStackParamList } from '@/types/stack.type'; // Define your root navigation types
import FeaturedEvent from './FeaturedEvent';
import EventsList from '../components/event/EventsRow';
import { getAllEvent, getOldEvents } from '../api/categories';
import { commonStyles } from './HomeCss';
// Define props for EventListingScreen
type EventListingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EventListing'>;
};

const EventListingScreen: React.FC<EventListingScreenProps> = ({
  navigation,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [data, setData] = useState([]);
  const [todayEvent, setTodayEvent] = useState([]);
  const [featuredEvent, setFeaturedEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [oldEvents, setOldEvents] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  const weekendEventGet = async () => {
    setTodayEvent([]);
    if (data.length === 0) return;
    const today = new Date();
    const willComeEvents = await data.filter((item: any) => {
      const eventDate = new Date(item.EtkinlikBaslamaTarihi);
      return eventDate > today;
    });
    const thisWeekEvents = willComeEvents.filter((item: any) => {
      const eventDate = new Date(item.EtkinlikBaslamaTarihi);
      const diffTime = eventDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 7;
    });
    setTodayEvent(thisWeekEvents);
  };

  const getFeaturedEvent = async () => {
    setFeaturedEvent([]);
    if (data.length === 0) return;
    const today = new Date();
    const willComeEvents = await data.filter((item: any) => {
      const eventDate = new Date(item.EtkinlikBaslamaTarihi);
      return eventDate > today;
    });
    const featuredEventData = await willComeEvents.filter((item: any) => {
      const eventDate = new Date(item.EtkinlikBaslamaTarihi);
      const diffTime: any = eventDate.getTime() > today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays >= 0 && diffDays <= 30;
    });
    let randomFeaturedEvents: any = [];

    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * featuredEventData.length);
      for (let j = 0; j <= randomFeaturedEvents.length; j++) {
        if (featuredEventData[randomNumber] === randomFeaturedEvents[j]) {
          randomNumber = Math.floor(Math.random() * featuredEventData.length);
        }
      }
      randomFeaturedEvents.push(featuredEventData[randomNumber]);
    }

    setFeaturedEvent(randomFeaturedEvents);
  };
  const fetchData = async () => {
    const allData: any = await getAllEvent();
    await setData(allData);
  };

  useEffect(() => {
    fetchData();
    weekendEventGet();
    getFeaturedEvent();
  }, []);

  useEffect(() => {
    weekendEventGet();
    getFeaturedEvent();
    const oldEvents: any = getOldEvents();
    setOldEvents(oldEvents);
  }, [data]);

  useEffect(() => {
    if (todayEvent.length > 0 && featuredEvent.length > 0) {
      setLoading(false);
    }
  }, [todayEvent, featuredEvent]);

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

          <ScrollView>
            <Text style={styles.logoText}>
              Rock<Text style={styles.primaryText}>Oak</Text>
              <Text style={styles.logoTextSmall}> Soccer</Text>
            </Text>
            <Text style={styles.subheading}>Find</Text>
            <Text style={styles.trendingText}>Trending Events</Text>
            <ModularSearchBar mode="bar" />

            <View style={commonStyles.firstView}>
              <FeaturedEvent data={featuredEvent[0]} />
            </View>
            <View style={commonStyles.secondView}>
              <EventsList
                title={'Popular Events'}
                data={oldEvents}
                navigation={navigation}
              />
              <EventsList
                title={'Trending Events'}
                data={todayEvent}
                navigation={navigation}
              />
              <EventsList
                title={'Events Near You'}
                data={featuredEvent}
                navigation={navigation}
              />
            </View>
          </ScrollView>
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
    color: 'gray',
  },
  trendingText: {
    fontWeight: '600',
    fontSize: 18,
    color: theme.colors.primary,
    paddingLeft: 20,
    paddingBottom: 6,
  },
});
