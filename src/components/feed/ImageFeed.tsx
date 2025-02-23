import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import ImageCard from "./ImageCard";
import COLOUR from "@constants/colour.constant";

const posts = [
  {
    id: "1",
    username: "john_doe",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    postImage: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
    likes: 120,
    caption: "Enjoying the beauty of nature!",
  },
  {
    id: "2",
    username: "jane_smith",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    postImage: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
    likes: 340,
    caption: "Exploring new places!",
  },
  {
    id: "3",
    username: "mike_ross",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    postImage: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
    likes: 215,
    caption: "Delicious food makes everything better!",
  },
];

const ImageFeed = () => {
  return (
    <View
      style={{
        width: "100%",
        // height: 350,
        paddingRight: 12,
        paddingTop: 20,
      }}
    >
      <Text style={styles.title}>User Post</Text>
      <View style={styles.container}>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ImageCard post={item} />}
          showsVerticalScrollIndicator={false}
          horizontal
        />
      </View>
    </View>
  );
};

export default ImageFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: COLOUR.primary,
    paddingBottom: 6,
    borderLeftWidth: 8,
    borderColor: "black",
    paddingLeft: 16,
  },
  meta: {
    fontSize: 14,
    color: "#777",
    marginVertical: 5,
  },
  link: {
    fontSize: 16,
    color: "#318bfb",
    marginTop: 5,
  },
});
