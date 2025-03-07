"use client";
import COLOUR from "@constants/colour.constant";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Platform,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

type locationProps = {
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
};

const LocationMap = ({ name, address, coordinates }: locationProps) => {
  const handleOpenMaps = () => {
    const url = Platform.select({
      ios: `maps:0,0?q=${coordinates.latitude},${coordinates.longitude}`,
      android: `geo:0,0?q=${coordinates.latitude},${coordinates.longitude}(${address})`,
    });

    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
            }}
            title={address}
          />
        </MapView>

        <TouchableOpacity
          style={styles.directionsButton}
          onPress={handleOpenMaps}
        >
          <Ionicons name="navigate-circle" size={20} color="white" />
          <Text style={styles.directionsText}>Get Directions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create<any>({
  container: {
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 20,
  },
  header: {
    padding: 20,
    backgroundColor: COLOUR.light,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLOUR.dark,
    textAlign: "center",
  },
  description: {
    marginTop: 8,
    textAlign: "center",
    // color: COLOUR.primary,
    lineHeight: 20,
  },
  mapContainer: {
    height: 250,
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  directionsButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: COLOUR.primary,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  directionsText: {
    color: "white",
    fontWeight: "600",
    marginLeft: 4,
  },
  detailsContainer: {
    padding: 20,
  },
  detailCard: {
    flexDirection: "row",
    backgroundColor: COLOUR.light,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLOUR.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  detailContent: {
    flex: 1,
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: COLOUR.primary,
    marginBottom: 4,
  },
  detailText: {
    fontSize: 14,
    color: COLOUR.text,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 16,
    color: COLOUR.dark,
  },
  contactContainer: {
    backgroundColor: COLOUR.light,
    borderRadius: 12,
    padding: 16,
  },
  contactButton: {
    // flexDirection: "row",
    // alignItems: "center",
    // paddingVertical: 8,
  },
  contactText: {
    // marginLeft: 12,
    fontSize: 16,
    color: COLOUR.secondary,
  },
});

export default LocationMap;
