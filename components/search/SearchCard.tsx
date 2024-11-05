import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

export default function SearchCard() {
  const navigation = useNavigation<any>();

  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
  };
  return (
    <TouchableOpacity style={styles.card} onPress={handleSearchPress}>
      <View style={styles.cardInner}>
        {/* <Text style={styles.label}>Search for your favourite food</Text> */}
        <View style={styles.container}>
          <View style={styles.icon}>
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#657789"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <Circle cx="11" cy="11" r="8" />
              <Line x1="21" y1="21" x2="16.65" y2="16.65" />
            </Svg>
          </View>
          <View style={styles.inputContainer}>
            {/* <TextInput
              placeholder="Search events.."
              placeholderTextColor="#6d7f8f"
              style={styles.input}
            /> */}
            <Text style={styles.input}>Search events..</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 1,
    borderRadius: 10,
    backgroundColor: 'rgb(238,232,245)',
    overflow: 'hidden',
    // width: 380,
    shadowColor: '#c8d8e7',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 12,
    marginTop: 4,
    marginBottom: 10,
  },
  cardInner: {
    padding: 16,
    backgroundColor: 'rgb(238,232,245)',
    borderRadius: 10,
  },
  label: {
    fontFamily: 'Hind',
    color: '#3c4b66',
    marginBottom: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    minWidth: 46,
    // minHeight: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // marginRight: 12,
    // backgroundColor: '#e3edf7',
    shadowColor: '#c8d8e7',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    // color:'red'
  },
  inputContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  input: {
    // backgroundColor: '#e3edf7',
    // padding: 16,
    borderRadius: 10,
    fontFamily: 'Orbitron',
    fontSize: 16,
    fontWeight: '500',
    color: 'rgb(82,79,86)',
  },
});
