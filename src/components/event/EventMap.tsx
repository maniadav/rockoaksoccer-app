'use client';
import { formatDate } from 'helpers/convert';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapComponent = ({ locationDetail, date }: any) => {
  const { location, lat, lng } = locationDetail;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Event Location</Text>
        <Text style={styles.description}>
          Our platform is trusted by organizations worldwide to boost
          productivity, streamline operations, and enhance customer experiences.
        </Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={styles.eventTitle}>Keep Your Eyes On!</Text>
          <Text style={styles.addressTitle}>Event Address</Text>
          <Text style={styles.address}>{location}</Text>
          <Text style={styles.whenTitle}>When?</Text>
          <Text style={styles.when}>{formatDate(date)}</Text>
          <Text style={styles.queryTitle}>Have a query?</Text>
          <Text style={styles.query}>Email: care@rockoak.com</Text>
          <Text style={styles.query}>Phone: +91 23494 34993</Text>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: lat, longitude: lng }}
              title={location}
            />
          </MapView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    marginTop: 8,
    textAlign: 'center',
    color: '#666',
  },
  detailsContainer: {
    flex: 1,
    marginTop: 16,
  },
  details: {
    flex: 1,
    padding: 16,
  },
  eventTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 12,
  },
  address: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },
  whenTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 12,
  },
  when: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },
  queryTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 12,
  },
  query: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },
  mapContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    marginLeft: 8,
    height: 300,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapComponent;
