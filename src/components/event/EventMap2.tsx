"use client";
import COLOUR from "@constants/colour.constant";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { formatDate } from "helpers/convert";
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

type LocationDetail = {
  location: string;
  lat: number;
  lng: number;
};

type MapComponentProps = {
  locationDetail: LocationDetail;
  date: string | number | Date;
  title?: string;
  description?: string;
  contactEmail?: string;
  contactPhone?: string;
};

const MapComponent = ({
  locationDetail,
  date,
  title = "Event Location",
  description = "Our platform is trusted by organizations worldwide to boost productivity, streamline operations, and enhance customer experiences.",
  contactEmail = "care@rockoak.com",
  contactPhone = "+91 23494 34993",
}: MapComponentProps) => {
  const { location, lat, lng } = locationDetail;

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${contactEmail}`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${contactPhone}`);
  };

  const handleOpenMaps = () => {
    const url = Platform.select({
      ios: `maps:0,0?q=${lat},${lng}`,
      android: `geo:0,0?q=${lat},${lng}(${location})`,
    });

    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailCard}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="event" size={24} color="white" />
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.detailTitle}>Event Date & Time</Text>
            <Text style={styles.detailText}>{formatDate(date)}</Text>
          </View>
        </View>

        <View style={styles.detailCard}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="location-on" size={24} color="white" />
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.detailTitle}>Event Location</Text>
            <Text style={styles.detailText}>{location}</Text>
          </View>
        </View>

        <View style={styles.detailCard}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="email" size={24} color="white" />
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.detailTitle}>Email Coordinator</Text>
            <TouchableOpacity
              style={styles.contactButton}
              onPress={handleEmailPress}
            >
              <Text style={styles.contactText}>{contactEmail}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.detailCard}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="phone" size={24} color="white" />
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.detailTitle}>Call Coordinator</Text>
            <TouchableOpacity
              style={styles.contactButton}
              onPress={handleEmailPress}
            >
              <Text style={styles.contactText}>{contactPhone}</Text>
            </TouchableOpacity>
          </View>
        </View>
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

export default MapComponent;
