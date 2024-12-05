import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ModularSearchBar from '@/components/ModularSearchbar';
import { theme } from '@/components/theme';
import { RootStackParamList } from '@/types/stack.type';
import FeaturedEvent from './FeaturedEvent';
import EventsRow from '../components/event/EventsRow';
import { getAllEvent } from '../api/categories';
import { commonStyles } from './HomeCss';
import EventCard from '@/components/event/EventCard';
import SCREENS from '@/constants/screen.constant';
import SearchCard from '@/components/search/SearchCard';
import SafeAreaComponent from '@/components/common/SafeAreaComponent';

type EventListingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EventListing'>;
};

const EventListingScreen: React.FC<EventListingScreenProps> = ({
  navigation,
}: any) => {
  const [data, setData] = useState([]);
  const [todayEvent, setTodayEvent] = useState([]);
  const [featuredEvent, setFeaturedEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  const weekendEventGet = async () => {
    if (data.length === 0) return;
    const today = new Date();
    const thisWeekEvents = data.filter((item: any) => {
      const eventDate = new Date(item.EtkinlikBaslamaTarihi);
      return (
        eventDate > today &&
        (eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) <= 7
      );
    });
    setTodayEvent(thisWeekEvents);
  };

  const fetchData = async () => {
    const allData: any = await getAllEvent();
    setData(allData);
  };

  useEffect(() => {
    fetchData();
    weekendEventGet();
  }, []);

  useEffect(() => {
    if (todayEvent.length > 0 && featuredEvent.length > 0) {
      setLoading(false);
    }
  }, [todayEvent, featuredEvent]);

  return (
    <SafeAreaComponent>
      <FlatList
        style={{ padding: 4 }}
        data={data}
        renderItem={({ item }: any) => (
          <EventCard
            title={item.title}
            image={item.image}
            date={item.date}
            location={
              item?.location.length > 30
                ? item?.location.slice(0, 30) + '...'
                : item?.location
            }
            onPress={() =>
              navigation.navigate(SCREENS.eventDetail, {
                id: item?.uniqueId,
              })
            }
          />
        )}
        keyExtractor={(item: any) => `${item?.uniqueId}`}
        ListHeaderComponent={
          <>
            <Text style={styles.logoText}>
              Rock<Text style={styles.primaryText}>Oak</Text>
              <Text style={styles.logoTextSmall}> Soccer</Text>
            </Text>
            <Text style={styles.subheading}>Find</Text>
            <Text style={styles.trendingText}>Trending Events</Text>
            {/* <ModularSearchBar mode="bar" /> */}
            <SearchCard />
            <View style={commonStyles.firstView}>
              <FeaturedEvent data={featuredEvent[0]} />
            </View>
            {/* <EventsRow
                  title="Popular Events"
                  data={data}
                  navigation={navigation}
                /> */}
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaComponent>
  );
};

export default EventListingScreen;

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 50,
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
