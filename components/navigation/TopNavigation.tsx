import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackSVG from '../svg/BackSVG';

const TopNavigation = ({ title }: any) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleGoBack}
        style={styles.backButton}
        activeOpacity={0.7} // Sets feedback on press
      >
        <BackSVG height={25} width={25} />
      </TouchableOpacity>
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
    zIndex: 1,
    backgroundColor: '#fff', // Optional: background color to separate the top bar
  },
  backButton: {
    left: 10,
    position: 'absolute',
    padding: 8,
    zIndex: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    zIndex: 1,
  },
});

export default TopNavigation;
