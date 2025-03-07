import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const renderImageItem = ({ item }: { item: string }) => (
    <Image
      source={{ uri: item }}
      style={styles.galleryImage}
      resizeMode="cover"
    />
  );

  return (
    <View style={styles.galleryContainer}>
      {title && <Text style={styles.sectionTitle}>{title}</Text>}
      <FlatList
        data={images}
        renderItem={renderImageItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.galleryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  galleryList: {
    paddingRight: 16,
  },
  galleryImage: {
    width: width * 0.75,
    height: 180,
    borderRadius: 12,
    marginRight: 12,
  },
});

export default ImageGallery;
