import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export interface NavigationBarProps {
  title: string;
  callback?: () => any;
}
const NavigationBar = ({ callback, title }: NavigationBarProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.btnBack}
      >
        <Image
          style={styles.image}
          source={require('../../assets/images/arrow_back.png')}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  navigationBar: {
    // backgroundColor: '#fff',
    flexDirection: 'row',
    height: 44,
    width: '100%',
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  btnBack: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
  },
});
