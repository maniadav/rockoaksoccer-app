import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import filter from 'lodash.filter';
import { theme } from '@/components/theme';
import DATA from '@/constants/event.data.constant';
import EventCard from '@/components/event/EventCard';
import { useNavigation } from 'expo-router';
import { styles } from '@/style/categories.style';
import { getAllEvent, getEventById } from '@/api/categories';
import SCREENS from '@/constants/screen.constant';

// const DATA = [
//   { id: '1', title: 'Data Structures' },
//   { id: '2', title: 'STL' },
//   { id: '3', title: 'C++' },
//   { id: '4', title: 'Java' },
//   { id: '5', title: 'Python' },
//   { id: '6', title: 'CP' },
//   { id: '7', title: 'ReactJs' },
//   { id: '8', title: 'NodeJs' },
//   { id: '9', title: 'MongoDb' },
//   { id: '10', title: 'ExpressJs' },
//   { id: '11', title: 'PHP' },
//   { id: '12', title: 'MySql' },
// ];

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);
  const navigation = useNavigation<any>();

  const [data, setEvents] = useState<any>(DATA);

  // useEffect(() => {
  //   const data = getAllEvent();
  //   setFilteredData(data);
  // }, []);

  const searchFunction = (text: string) => {
    setSearchValue(text);

    const updatedData = filter(DATA, (item: any) => {
      const item_data = `${item.title.toUpperCase()}`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    console.log(text, updatedData);
    setFilteredData(updatedData);
  };

  const iconPressHandle = () => {
    const eventsByID: any = getEventById(searchValue) || null;
    eventsByID ? setEvents([eventsByID]) : setEvents([]);
    Alert.alert('Search Value', searchValue || 'No search value entered');
  };

  const handlClearIconPress = () => {
    setEvents(DATA);
  };

  console.log({ data }, data.length);
  return (
    <View style={styles.categoryContainer}>
      <Searchbar
        placeholder="Search Here..."
        value={searchValue}
        onChangeText={searchFunction}
        onIconPress={iconPressHandle}
        mode="view"
        iconColor={theme.colors.primary}
        onClearIconPress={handlClearIconPress}
        style={{ marginBottom: 20 }}
      />
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({ item }: any) => (
            <EventCard
              title={item.title}
              image={item.smallPoster}
              date={item.eventStartDate}
              location={item.eventVenue}
              onPress={() =>
                navigation.navigate(SCREENS.eventDetail, { id: item?.id })
              }
            />
          )}
          keyExtractor={(item) => `${item?.id}`}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default SearchScreen;
