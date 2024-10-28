import React, { useEffect, useState } from 'react';
import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native';
import { getEventById } from '@/api/categories';
import { FontAwesome } from '@expo/vector-icons';
import { eventDetailStyling } from './HomeCss';
// import MapView, { Marker } from 'react-native-maps';
import { ScrollView } from 'react-native-gesture-handler';
import DATA from '@/constants/event.data.constant';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/stack.type';

type EventDetailRouteProp = RouteProp<RootStackParamList, 'EventDetail'>;

function EventDetail({ route }: any) {
  const [event, setEvent] = useState<any>(DATA[0]);
  const [location, setLocation] = useState<any>({});

  useEffect(() => {
    const data = async () => {
      const { id } = route.params;
      // const event = await getEventById(id);
      const event = DATA[0];
      setEvent(event);
      if (event?.eventStartDate) {
        setLocation(
          event.eventStartDate
            ? event.eventStartDate
            : ['41.015137', '28.979530']
        );
      } else {
        setLocation(['41.015137', '28.979530']);
      }
    };
    data();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ width: '100%' }}>
          <View style={eventDetailStyling.imageContainer}>
            <Image
              source={{ uri: `${event.KucukAfis}` }}
              style={eventDetailStyling.img}
            />
            <View style={eventDetailStyling.cardInImage}>
              <View style={eventDetailStyling.cardInCardInImage}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}
                >
                  {event.Adi}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    marginTop: 5,
                  }}
                >
                  <FontAwesome name="map-marker" size={15} color="black" />
                  <Text>{event.EtkinlikMerkezi}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    marginTop: 5,
                  }}
                >
                  <FontAwesome name="calendar" size={15} color="black" />
                  <Text>
                    {event.EtkinlikBaslamaTarihi &&
                      event.EtkinlikBaslamaTarihi.toString().split('T')[0] +
                        ' ' +
                        event.EtkinlikBaslamaTarihi.toString()
                          .split('T')[1]
                          .slice(0, 5)}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    marginTop: 5,
                  }}
                >
                  {event.UcretsizMi && (
                    <>
                      <FontAwesome name="money" size={15} color="black" />
                      <Text style={{ fontWeight: 'bold' }}>
                        {event.UcretsizMi && 'Ücretsiz'}
                      </Text>
                    </>
                  )}
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: 19,
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft: 20,
              }}
            >
              Etkinlik Detayı
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
                fontStyle: 'italic',
              }}
            >
              {event.KisaAciklama}
            </Text>
            {event.artist && (
              <>
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: 'bold',
                    marginTop: 20,
                    marginHorizontal: 20,
                  }}
                >
                  Etkinlik Sanatçısı
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  {event?.artist}
                </Text>
              </>
            )}
          </View>

          {/* <View
            style={{
              marginVertical: 60,
              marginBottom: 100,
              alignItems: 'center',
              borderRadius: 50,
              overflow: 'hidden',
              shadowColor: 'black',
              shadowOffset: {
                width: 10,
                height: 2,
              },
              shadowOpacity: 0.7,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            {event.eventStartDate ? (
              <MapView
                style={{
                  width: Dimensions.get('window').width,
                  height: 200,
                  borderRadius: 20,
                }}
                region={
                  location && {
                    latitude: parseFloat(location['Enlem']),
                    longitude: parseFloat(location['Boylam']),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }
                }
                zoomEnabled={true}
                zoomControlEnabled={true}
                minZoomLevel={10}
                maxZoomLevel={20}
              >
                <Marker
                  coordinate={
                    location && {
                      latitude: parseFloat(location['Enlem']),
                      longitude: parseFloat(location['Boylam']),
                    }
                  }
                  title="Marker"
                />
              </MapView>
            ) : (
              <MapView
                style={{
                  width: Dimensions.get('window').width,
                  height: 200,
                  borderRadius: 20,
                }}
                region={
                  location && {
                    latitude: 19.058776,
                    longitude: 72.8856,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }
                }
                zoomEnabled={true}
                zoomControlEnabled={true}
                minZoomLevel={10}
                maxZoomLevel={20}
              >
                <Marker
                  coordinate={
                    location && {
                      latitude: 19.058776,
                      longitude: 72.8856,
                    }
                  }
                  title="Marker"
                />
              </MapView>
            )}
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EventDetail;
