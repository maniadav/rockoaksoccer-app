import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
// import { getEventById } from '@/api/categories';
import { FontAwesome } from '@expo/vector-icons';
import { eventDetailStyling } from './HomeCss';
// import MapView, { Marker } from 'react-native-maps';
// import { ScrollView } from 'react-native-gesture-handler';
import DATA from '@/constants/event.data.constant';
// import { RouteProp } from '@react-navigation/native';
// import { RootStackParamList } from '@/types/stack.type';
// import BackButton from '@/components/BackButton';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '@/components/BackButton';
import { getEventById } from '@/api/categories';

// type EventDetailRouteProp = RouteProp<RootStackParamList, 'EventDetail'>;

function EventDetailScreen({ route }: any) {
  const [event, setEvent] = useState<any>(DATA[0]);
  const [location, setLocation] = useState<any>({});

  const fetchData = async (id: string) => {
    const eventByID: any = await getEventById(id);
    if (eventByID) {
      setEvent(eventByID);
    } else {
      setEvent(event);
    }

    if (event?.eventStartDate) {
      setLocation(
        event.eventStartDate ? event.eventStartDate : ['41.015137', '28.979530']
      );
    } else {
      setLocation(['41.015137', '28.979530']);
    }
  };

  useEffect(() => {
    const { id } = route.params;
    fetchData(id);
  }, [route.params]);
  console.log(event);
  return (
    <ScrollView>
      <Image
        source={{ uri: `${event.smallPoster}` }}
        style={{
          top: 0,
          width: '100%',
          height: 300,
          zIndex: -1,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 30,
          left: 10,
          zIndex: 1,
        }}
      >
        <BackButton />
      </View>
      <View style={{ padding: 20 }}>
        <View style={eventDetailStyling.cardInImage}>
          <View style={eventDetailStyling.cardInCardInImage}>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
              titile-{event.title}
            </Text>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 5 }}>
              <FontAwesome name="map-marker" size={15} color="black" />
              <Text>{event.eventVenue}</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 5 }}>
              <FontAwesome name="calendar" size={15} color="black" />
            </View>
          </View>
        </View>

        <Text style={{ fontSize: 19, fontWeight: 'bold', marginTop: 20 }}>
          Etkinlik Detayı
        </Text>
        <Text style={{ fontSize: 15, marginTop: 10, fontStyle: 'italic' }}>
          {event.title}
        </Text>

        {event.artist && (
          <>
            <Text style={{ fontSize: 19, fontWeight: 'bold', marginTop: 20 }}>
              Etkinlik Sanatçısı
            </Text>
            <Text style={{ fontSize: 15, marginTop: 10 }}>{event.artist}</Text>
          </>
        )}
      </View>
    </ScrollView>
  );
}

export default EventDetailScreen;
