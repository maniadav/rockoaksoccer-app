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
                  key={item?.uniqueId}
                  title={
                    item?.title.length > 20
                      ? item?.title.slice(0, 20) + '...'
                      : item?.title
                  }
                  location={
                    item?.location.length > 20
                      ? item?.location.slice(0, 20) + '...'
                      : item?.location
                  }
                  date={item?.date.toString().split('T')[0]}
                  id={item?.uniqueId}
                  eventImage={item?.image}
                  navigation={navigation}
                />
              )}
              keyExtractor={(item) => item?.uniqueId}
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
