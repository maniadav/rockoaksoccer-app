import { View, StyleSheet } from "react-native";

const ImageCarouselIndicator = ({ images, activeIndex }: any) => {
  return (
    <View style={styles.indicatorContainer}>
      {images?.map((_: any, index: number) => (
        <View
          key={index}
          style={[
            styles.indicator,
            {
              backgroundColor:
                index === activeIndex ? "#fff" : "rgba(255, 255, 255, 0.4)",
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 2,
  },
});

export default ImageCarouselIndicator;
