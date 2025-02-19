import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import SafeAreaComponent from '@components/common/SafeAreaComponent';
import TopNavHeader from '@components/navigation/TopNavHeader';
import { Link } from 'expo-router';
import EventsRow from '@components/event/EventsRow';
import data from '@constants/slider.data.constant';

const BlogDetailScreen = () => {
  const blogPosts = [
    {
      title: 'Understanding React Native Navigation',
      author: 'John Doe',
      minRead: 5,
      postedDate: '2024-11-28',
      slug: 'react-native-navigation',
    },
    {
      title: 'Building a Blog with Expo Router',
      author: 'Jane Smith',
      minRead: 8,
      postedDate: '2024-11-29',
      slug: 'expo-router-blog',
    },
    {
      title: '10 Tips for Writing Clean JavaScript Code',
      author: 'Alex Johnson',
      minRead: 7,
      postedDate: '2024-11-30',
      slug: 'clean-javascript-tips',
    },
  ];

  return (
    <SafeAreaComponent>
      <TopNavHeader title="Your Feed" />
      <View style={styles.container}>

        <FlatList
          data={blogPosts}
          keyExtractor={(item) => item.slug}
          contentContainerStyle={{ gap: 20 }}
          renderItem={({ item }) => (
            <View style={styles.blogItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.meta}>
                By {item.author} | {item.minRead} min read | {item.postedDate}
              </Text>
              <Link href={`/blog/${item.slug}`} style={styles.link}>
                Read More
              </Link>
              <Link href={`/blog/${item.slug}`}>View user details</Link>
            </View>
          )}
        />
        {/* </ScrollView> */}
      </View>
    </SafeAreaComponent>
  );
};

export default BlogDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  blogItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  meta: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  link: {
    fontSize: 16,
    color: '#318bfb',
    marginTop: 5,
  },
});
