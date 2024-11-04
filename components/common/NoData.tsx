import SCREENS from '@/constants/screen.constant';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const NoRecord = ({ message, imagedata }: any) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>No data</Text>
        <Text style={styles.message}>
          {message || "Sorry we couldn't find data"}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(SCREENS.home);
          }}
        >
          <Text style={styles.buttonText}>Back to homepage</Text>
        </TouchableOpacity>
      </View>

      {imagedata && (
        <View style={styles.imageContainer}>
          <Image source={imagedata} style={styles.image} resizeMode="contain" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  content: {
    alignItems: 'center',
    maxWidth: '80%',
  },
  title: {
    textTransform: 'capitalize',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    color: '#4a4a4a',
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#1D4ED8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '500',
  },
  imageContainer: {
    marginTop: 20,
    maxWidth: 400,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default NoRecord;
