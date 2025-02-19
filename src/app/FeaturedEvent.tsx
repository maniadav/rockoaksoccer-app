import React from "react";
import { Image, Text, View } from "react-native";
import { commonStyles } from "./HomeCss";
import humanRunningImg from "@images/human-running.png";

function FeaturedEvent({ data }: any) {
  console.log({ data });
  const { Adi, KucukAfis, EtkinlikBaslamaTarihi } = data || {};

  return (
    <View style={commonStyles.featuredEvent}>
      <View
        style={{
          width: "100%",
          height: 180,
          marginBottom: 40,
        }}
      >
        {/* <img src={require(`./assets/images/foot-player.png`)} alt={"imageName"} />{" "} */}
        <Image
          source={KucukAfis ? { uri: KucukAfis } : humanRunningImg}
          style={{
            width: "100%",
            height: 220,
            borderRadius: 20,
            alignContent: "flex-start",
          }}
        />
        <View style={commonStyles.eventInfoCard}>
          <Text style={commonStyles.textsHeader}>{"Spirit of the Game"}</Text>
          {/* <Text style={commonStyles.texts}>
            Event Date:{' '}
            {EtkinlikBaslamaTarihi != ''
              ? EtkinlikBaslamaTarihi?.split('T')[0]
                  .split('-')
                  .reverse()
                  .join(' ')
              : '2021-08-20'}
          </Text>
          <Text style={commonStyles.texts}>
            Event Time:{' '}
            {EtkinlikBaslamaTarihi != ''
              ? EtkinlikBaslamaTarihi?.split('T')[1].split(':')[0] +
                ':' +
                EtkinlikBaslamaTarihi?.split('T')[1].split(':')[1]
              : '20:00'}{' '}
          </Text> */}
        </View>
      </View>
    </View>
  );
}

export default FeaturedEvent;
