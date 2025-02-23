import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BlogCard from "@components/feed/BlogCard";
import COLOUR from "@constants/colour.constant";

const BlogRow = () => {
  const blogPosts = [
    {
      title: "Understanding React Native Navigation",
      author: "John Doe",
      minRead: 5,
      postedDate: "2024-11-28",
      slug: "react-native-navigation",
    },
    {
      title: "Building a Blog with Expo Router",
      author: "Jane Smith",
      minRead: 8,
      postedDate: "2024-11-29",
      slug: "expo-router-blog",
    },
    {
      title: "10 Tips for Writing Clean JavaScript Code",
      author: "Alex Johnson",
      minRead: 7,
      postedDate: "2024-11-30",
      slug: "clean-javascript-tips",
    },
  ];

  return (
    <View style={{ width: "100%", height: 350, paddingHorizontal: 12 }}>
      <Text style={styles.title}>Blog Content</Text>
      <View style={styles.container}>
        <FlatList
          data={blogPosts}
          keyExtractor={(item) => item.slug}
          horizontal
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => <BlogCard blog={item} />}
        />
      </View>
    </View>
  );
};

export default BlogRow;

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
