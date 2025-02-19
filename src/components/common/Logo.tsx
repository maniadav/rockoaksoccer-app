import COLOUR from '@constants/colour.constant';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View>
      <Text style={styles.logoText}>
        Rock<Text style={styles.primaryText}>Oak</Text>
        <Text style={styles.logoTextSmall}> Soccer</Text>
      </Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    marginBottom: 15,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  primaryText: {
    color: COLOUR.primary,
  },
  logoTextSmall: {
    fontSize: 16,
    color: 'black',
    textTransform: 'lowercase',
    position: 'absolute',
    left: 50,
    fontWeight: 'normal',
  },
});
