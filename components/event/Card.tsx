import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { commonStyles } from '@/app/HomeCss';

import { FontAwesome } from '@expo/vector-icons';
import SCREENS from '@/constants/screen.constant';

function Card({ title, location, date, id, navigation, eventImage }: any) {
  const goToDetailPage = () => {
    navigation.navigate(SCREENS.eventDetail, { id: id, title: title });
  };
  console.log({ eventImage });
  return (
    <View style={commonStyles.homeCard}>
      <View
        style={{
          height: 120,
        }}
      >
        <Image
          source={{
            uri: `${eventImage}`,
          }}
          style={{
            borderRadius: 4,
            width: '100%',
            height: '100%',
            maxHeight: '100%',
            resizeMode: 'stretch',
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: 10,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            gap: 10,
          }}
        >
          <View style={commonStyles.cardDetailText}>
            <FontAwesome name="map-marker" size={15} color="black" />
            <Text>{location}</Text>
          </View>
          <View style={commonStyles.cardDetailText}>
            <FontAwesome name="calendar" size={15} color="black" />
            <Text>{date?.split('-').reverse().join(' ')}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={commonStyles.cardDetailsButton}
        onPress={goToDetailPage}
      >
        <Text style={{ color: 'white', fontSize: 10 }}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Card;
