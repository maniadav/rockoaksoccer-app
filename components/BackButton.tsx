import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function BackButton({ goBack }: any) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/arrow_back.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Black with 30% opacity
    borderRadius: 4,
    padding: 5,
    zIndex: 1000,
    flex: 1,
  },
  image: {
    width: 24,
    height: 24,
  },
});
