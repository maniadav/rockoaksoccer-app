import React from 'react';
import { Image, Text, View } from 'react-native';
import { commonStyles } from './HomeCss';

function FeaturedEvent({ data }: any) {
  console.log({ data });
  const { Adi, KucukAfis, EtkinlikBaslamaTarihi } = data || {};

  return (
    <View style={commonStyles.featuredEvent}>
      <View
        style={{
          width: '100%',
          height: 180,
          marginBottom: 40,
        }}
      >
        <Image
          source={
            KucukAfis
              ? { uri: KucukAfis }
              : require('../assets/images/featured.png')
          }
          style={{
            width: '100%',
            height: 220,
            borderRadius: 20,
          }}
        />
        <View style={commonStyles.eventInfoCard}>
          <Text style={commonStyles.textsHeader}>
            {'Music of the Spheres'}
          </Text>
          <Text style={commonStyles.texts}>
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
          </Text>
        </View>
      </View>
    </View>
  );
}

export default FeaturedEvent;
