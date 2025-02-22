import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const ImageCard = ({ post }: any) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };
  const heartIcon = liked ? "heart" : "hearto";
  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image
          source={{ uri: post.profileImage }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>{post.username}</Text>
      </View>
      <Image source={{ uri: post.postImage }} style={styles.postImage} />
      <View style={styles.footer}>
        <View
          style={{
            height: 40,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={toggleLike}>
            <AntDesign
              name={heartIcon}
              size={24}
              color={liked ? "red" : "black"}
            />
          </TouchableOpacity>
          <Text style={styles.likes}>{likesCount} likes</Text>
        </View>

        <Text style={styles.caption}>{post.caption}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: 350,
    height: 600,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
    paddingRight: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  postImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    borderRadius: 10,
  },
  footer: {
    padding: 10,
  },
  likes: {
    fontWeight: "bold",
    marginTop: 5,
  },
  caption: {
    marginTop: 5,
    fontWeight: 700,
  },
});

export default ImageCard;
