import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const BlogDetail = () => {
  // Retrieve slug from the route using useLocalSearchParams
  const { slug } = useLocalSearchParams<{ slug: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blog: {slug}</Text>
      <Text style={styles.content}>
        You are reading the blog post titled "{slug}". This content can be dynamically fetched based on the slug.
      </Text>
    </View>
  );
};

export default BlogDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    color: '#333',
  },
});
