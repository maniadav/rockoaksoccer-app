import React, { useEffect, useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Easing,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

type SlideItemProps = {
  item: {
    image: any;
    title: string;
    description: string;
  };
};

const SlideItem = ({ item }: SlideItemProps) => {
  const translateYImage = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.timing(translateYImage, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  }, [translateYImage]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.image}
        resizeMode="cover"
        style={[
          styles.image,
          {
            transform: [{ translateY: translateYImage }],
          },
        ]}
      />
      <View style={styles.content}>
        <View style={styles.textContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    paddingHorizontal: 40,
    bottom: 250,
    position: 'absolute',
  },
  textContent: {
    width: 250,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'black',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
});
