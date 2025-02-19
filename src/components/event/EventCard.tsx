import React from "react";
import { Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { styles } from "style/eventCard.style";
import { theme } from "../theme";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

function EventCard({ title, date, location, image, onPress }: any) {
  console.log({ image });
  return (
    <View style={styles.searchCard}>
      <Image
        source={{ uri: `${image}` }}
        style={{
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          marginBottom: 20,
          height: 200,
          // borderBottomWidth: 3,
          // borderColor: 'black'
        }}
      />
      <View
        style={{
          gap: 10,
          marginBottom: 10,
          backgroundColor: "",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "semibold", maxWidth: 200 }}>
            {title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
            }}
          >
            <FontAwesome
              name="calendar"
              size={20}
              color="black"
              style={{ color: "grey" }}
            />
            <Text style={{ color: "grey" }}>
              {date?.split("T")[0].split("-").reverse().join(" ")}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 20,
            }}
          >
            <FontAwesome
              name="map-marker"
              size={20}
              color="black"
              style={{ color: "grey" }}
            />
            <Text style={{ color: "grey" }}>
              {location.length > 30 ? location.slice(0, 30) + "..." : location}
            </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.searchButton} onPress={onPress}>
              <Text style={{ color: "white" }}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default EventCard;
