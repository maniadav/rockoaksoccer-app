import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ShimmerEffect from "./ShimmerEffect";

const { width } = Dimensions.get("window");

interface FlexiEventCardShimmerProps {
  grid?: boolean;
  index?: number;
}

const FlexiEventCardShimmer: React.FC<FlexiEventCardShimmerProps> = ({
  grid,
}) => {
  const cardStyle = grid
    ? [styles.card, styles.doubleGridCard, { marginLeft: 4 }]
    : styles.card;

  const imageHeight = grid ? 120 : 160;

  return (
    <View style={cardStyle}>
      <ShimmerEffect style={[styles.imageContainer, { height: imageHeight }]} />
      <View style={styles.cardContent}>
        <ShimmerEffect style={styles.titleShimmer} />
        <ShimmerEffect style={styles.typeShimmer} />
        <View style={styles.infoContainer}>
          <ShimmerEffect style={styles.infoShimmer} />
          <ShimmerEffect style={styles.infoShimmer} />
        </View>
        <ShimmerEffect style={styles.countShimmer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fbfaf2",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "black",
    borderWidth: 0.5,
    borderColor: "#ddd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: "hidden",
  },
  doubleGridCard: {
    width: (width - 32) / 2,
    marginBottom: 12,
  },
  imageContainer: {
    width: "100%",
    height: 160,
  },
  cardContent: {
    padding: 12,
  },
  titleShimmer: {
    height: 20,
    borderRadius: 4,
    marginBottom: 12,
  },
  typeShimmer: {
    height: 24,
    width: 60,
    borderRadius: 4,
    marginBottom: 12,
  },
  infoContainer: {
    gap: 8,
    marginBottom: 12,
  },
  infoShimmer: {
    height: 16,
    borderRadius: 4,
    width: "70%",
  },
  countShimmer: {
    height: 16,
    width: "50%",
    borderRadius: 4,
    marginTop: 10,
  },
});

export default FlexiEventCardShimmer;
