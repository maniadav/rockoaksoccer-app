import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import filter from 'lodash.filter';
import { theme } from '@/components/theme';

const DATA = [
  { id: '1', title: 'Data Structures' },
  { id: '2', title: 'STL' },
  { id: '3', title: 'C++' },
  { id: '4', title: 'Java' },
  { id: '5', title: 'Python' },
  { id: '6', title: 'CP' },
  { id: '7', title: 'ReactJs' },
  { id: '8', title: 'NodeJs' },
  { id: '9', title: 'MongoDb' },
  { id: '10', title: 'ExpressJs' },
  { id: '11', title: 'PHP' },
  { id: '12', title: 'MySql' },
];

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);

  const searchFunction = (text: string) => {
    setSearchValue(text);
    const updatedData = filter(DATA, (item: any) => {
      const item_data = `${item.title.toUpperCase()}`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    setFilteredData(updatedData);
  };

  const iconPressHandle = () => {
    Alert.alert('Search Value', searchValue || 'No search value entered');
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search Here..."
        value={searchValue}
        onChangeText={searchFunction}
        onIconPress={iconPressHandle}
        style={styles.searchBar}
        mode="view"
        iconColor={theme.colors.primary}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    marginBottom: 10,
    borderRadius: 10,
  },
  item: {
    backgroundColor: '#f5f520',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default SearchScreen;
