import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const BottomTabNavigator = () => {
  const navigation = useNavigation<any>();
  const currentRoute =
    navigation.getState().routes[navigation.getState().index]?.name;

  const getTabColor = (screenName: string) => {
    return currentRoute === screenName ? 'rgb(230,62,85)' : 'black';
  };

  console.log({ currentRoute });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Ionicons
          name="home-outline"
          size={24}
          color={getTabColor('HomeScreen')}
        />
        <Text style={{ color: getTabColor('HomeScreen') }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('ProfileScreen')}
      >
        <Ionicons
          name="person-outline"
          size={24}
          color={getTabColor('ProfileScreen')}
        />
        <Text style={{ color: getTabColor('ProfileScreen') }}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('EventListingScreen')}
      >
        <FontAwesome6
          name="soccer-ball"
          size={24}
          color={getTabColor('EventListingScreen')}
        />
        <Text style={{ color: getTabColor('EventListingScreen') }}>Event</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('SettingScreen')}
      >
        <Ionicons
          name="settings-outline"
          size={24}
          color={getTabColor('SettingScreen')}
        />
        <Text style={{ color: getTabColor('SettingScreen') }}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    // borderRadius: 20,
    paddingVertical: 10,
    elevation: 5,
  },
  tab: {
    alignItems: 'center',
  },
});

export default BottomTabNavigator;
