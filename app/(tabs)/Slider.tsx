import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import data from './data';

const { width, height } = Dimensions.get('window');

const ImageCarousel = () => {
  const scrollRef = useRef();
  let currentIndex = 0;

  const onScrollEnd = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(scrollPosition / width);
    currentIndex = newIndex % data.length;
  };

  const renderImages = () => {
    return data.map((item, index) => (
      <View key={index} style={styles.carouselItem}>
        <View style={styles.text}>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
        {/* <Image source={item.image} style={styles.image} resizeMode="cover" /> */}
      </View>
    ));
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      onMomentumScrollEnd={onScrollEnd}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      // ref={scrollRef}
    >
      {renderImages()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  carouselItem: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width,
    height,
    position: 'absolute',
  },
  text: {
    position: 'absolute',
    bottom: '35%',
    left: '5%',
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ImageCarousel;
