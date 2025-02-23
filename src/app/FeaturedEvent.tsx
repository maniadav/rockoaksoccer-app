import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { commonStyles } from "./HomeCss";
import fireBall from "@images/fire-ball.png";

function FeaturedEvent({ data }: any) {
  console.log({ data });
  const { Adi, KucukAfis, EtkinlikBaslamaTarihi } = data || {};

  return (
    <View style={commonStyles.featuredEvent}>
      <View
        style={{
          width: "100%",
          // height: 180,
          marginBottom: 20,
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={KucukAfis ? { uri: KucukAfis } : fireBall}
            style={styles.image}
            resizeMode="cover" // or "contain" based on your desired effect
          />
        </View>

        {/* <View style={commonStyles.eventInfoCard}>
          <Text style={commonStyles.textsHeader}>{"Spirit of the Game"}</Text>
          <Text style={commonStyles.texts}>
            Event Date:{" "}
            {EtkinlikBaslamaTarihi != ""
              ? EtkinlikBaslamaTarihi?.split("T")[0]
                  .split("-")
                  .reverse()
                  .join(" ")
              : "2021-08-20"}
          </Text>
          <Text style={commonStyles.texts}>
            Event Time:{" "}
            {EtkinlikBaslamaTarihi != ""
              ? EtkinlikBaslamaTarihi?.split("T")[1].split(":")[0] +
                ":" +
                EtkinlikBaslamaTarihi?.split("T")[1].split(":")[1]
              : "20:00"}{" "}
          </Text>
        </View> */}
      </View>
    </View>
  );
}

export default FeaturedEvent;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 210,
    borderRadius: 20,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  image: {
    flex: 1,
    width: "80%",
    height: undefined,
    objectFit: "cover",
  },
});
