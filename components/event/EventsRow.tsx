import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { commonStyles } from '../../app/HomeCss';
import Card from '@/components/event/Card';

const EventsRow = ({ data, title, navigation }: any) => {
  return (
    <View>
      {data.length > 0 ? (
        <>
          <View style={commonStyles.eventListHeader}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              {title}
            </Text>
            <TouchableOpacity>
              <Text>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={commonStyles.cards}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Card
                  key={item?.id}
                  title={
                    item?.title.length > 20
                      ? item?.title.slice(0, 20) + '...'
                      : item?.title
                  }
                  location={
                    item?.eventVenue.length > 20
                      ? item?.eventVenue.slice(0, 20) + '...'
                      : item?.eventVenue
                  }
                  date={item?.eventStartDate.toString().split('T')[0]}
                  price={item?.UcretsizMi}
                  id={item?.Id}
                  eventImage={item?.smallPoster}
                  navigation={navigation}
                />
              )}
              keyExtractor={(item) => item?.Id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default EventsRow;
