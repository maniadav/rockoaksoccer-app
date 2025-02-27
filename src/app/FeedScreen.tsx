import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import SafeAreaComponent from "@components/common/SafeAreaComponent";
import TopNavHeader from "@components/navigation/TopNavHeader";
import BlogRow from "@components/feed/BlogRow";
import ImageFeed from "@components/feed/ImageFeed";

const FeedScreen = () => {
  // Create a data array for the main FlatList
  const sections = [
    { id: '1', type: 'blog', component: BlogRow },
    { id: '2', type: 'image', component: ImageFeed },
  ];

  const renderItem = ({ item }) => {
    const Component = item.component;
    return <Component />;
  };

  return (
    <SafeAreaComponent>
      <TopNavHeader title="Your Feed" />
      <FlatList
        data={sections}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
    </SafeAreaComponent>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    gap: 20,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  blogItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
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
