// components/ModularSearchBar.js

import React from 'react';
import { Searchbar, IconButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ModularSearchBar = ({ mode }: any) => {
  const navigation = useNavigation<any>();

  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      {mode === 'bar' ? (
        <Searchbar
          placeholder="Search Here..."
          onFocus={handleSearchPress}
          style={styles.searchBar}
          value={''}
        />
      ) : (
        <IconButton icon="magnify" size={24} onPress={handleSearchPress} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  searchBar: {
    borderRadius: 10,
  },
});

export default ModularSearchBar;
