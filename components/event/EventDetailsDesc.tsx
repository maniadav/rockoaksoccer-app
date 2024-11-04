import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import DATA from '@/constants/event.data.constant';
import { formatDate, hexToRgba } from '@/helpers/convert';
import DateSVG from '../svg/DateSVG';
import PinSVG from '../svg/PinSVG';
import { DaysLeft } from '@/helpers/function';
import COLOUR from '@/constants/colour.constant';
interface CardProps {
  title: string;
  date: string;
}

const Card: React.FC<CardProps> = () => {
  return (
    <View style={styles.cardMediaBody}>
      <View style={styles.bodyTop}>
        <View style={styles.icons}>
          <DateSVG />
          <Text style={styles.subtle}>{DaysLeft(DATA[0].timing.start)}</Text>
        </View>
        <View style={styles.icons}>
          <Svg fill="#888888" height={18} width={18} viewBox="0 0 24 24">
            <Path d="M0 0h24v24H0z" fill="none" />
            <Path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
          </Svg>
          <Svg fill="#888888" height={20} width={20} viewBox="0 0 24 24">
            <Path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            <Path d="M0 0h24v24H0z" fill="none" />
          </Svg>
        </View>
      </View>
      <Text style={styles.heading}>{DATA[0].title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardMediaBody: {
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 10,
    padding: 20,
    height: 100,
    flex: 1,
    justifyContent: 'center',
  },
  bodyTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtle: {
    fontSize: 14,
    color: '#535353',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',
    gap: 2,
  },
  heading: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  supportingBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  subtleRight: {
    fontSize: 14,
    color: '#535353',
  },
  reveal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  link: {
    fontSize: 14,
    color: '#EB0EC7',
  },
});

export default Card;
