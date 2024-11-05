import COLOUR from '@/constants/colour.constant';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileCard() {
  return (
    <View>
      <View style={styles.cardContainer}>
        <Image
          source={require('../../assets/images/background.jpg')}
          style={styles.image}
        />
        <Text style={styles.proBadge}>PRO</Text>
        <Image
          style={styles.roundImage}
          source={{ uri: 'https://randomuser.me/api/portraits/women/79.jpg' }}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>Ricky Park</Text>
        <Text style={styles.location}>New York</Text>
        <Text style={styles.description}>
          User interface designer and {'\n'} front-end developer
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.primaryButton, styles.ghostButton]}>
            <Text style={[styles.buttonText, styles.ghostButtonText]}>
              Following
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    maxWidth: '100%',
    height: 200,
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOpacity: 0.75,
    // shadowRadius: 10,
    // shadowOffset: { width: 0, height: 10 },
    position: 'relative',
  },
  image: {
    top: 0,
    width: '100%',
    height: '60%',
    zIndex: -1,
    backgroundColor: 'black',
  },
  proBadge: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    backgroundColor: COLOUR.primary,
    color: 'white',
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  roundImage: {
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: COLOUR.primary,
    padding: 7,
    position: 'absolute',
    // top: '50%',
    bottom: 0,
    zIndex: 1,
  },
  details: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  name: {
    fontSize: 18,
    color: 'black',
    marginVertical: 10,
  },
  location: {
    fontSize: 12,
    color: '#B3B8CD',
    textTransform: 'uppercase',
    marginBottom: 5,
    fontWeight: 600,
  },
  description: {
    fontSize: 14,
    color: '#B3B8CD',
    textAlign: 'center',
    lineHeight: 21,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  primaryButton: {
    backgroundColor: '#03BFCB',
    borderWidth: 1,
    borderColor: '#03BFCB',
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginHorizontal: 5,
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#231E39',
    fontWeight: '500',
    fontSize: 16,
  },
  ghostButtonText: {
    color: '#02899C',
  },
});
