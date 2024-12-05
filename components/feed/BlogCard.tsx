import COLOUR from '@/constants/colour.constant';
import SCREENS from '@/constants/screen.constant';
import { navigation } from '@/utils/navigation.utils';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BlogCard = ({ blog }: any) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={require('../../assets/images/pic3.jpg')}
      />
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <View style={styles.flexSpacer} />
          <View>
            <Text style={styles.meta}>
              By {blog.author} | {blog.minRead} min read | {blog.postedDate}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <View style={{ width: '80%' }}>
                <Text style={styles.title}>{blog.title}</Text>
              </View>

              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLOUR.primary,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  // onPress={() => router.push(`/blog/${blog.slug}`)}
                  onPress={() => {
                    alert(`You tapped ${SCREENS.blog}`);
                    navigation.push(SCREENS.blog, { id: blog.slug });
                  }}
                >
                  <Text style={{ color: 'white' }}>View </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 350,
    height: '95%',
    // marginVertical: 10,
    alignSelf: 'center',
    backgroundColor: '#000',
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    color: '#ccc',
    fontSize: 14,
  },
  image: {
    width: 400,
    height: 400,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  authorName: {
    color: '#ccc',
    fontSize: 14,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    marginTop: 2,
  },
  flexSpacer: {
    flex: 1,
  },
  listContainer: {
    gap: 20,
    paddingHorizontal: 10,
  },
  blogItem: {
    width: 250,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  meta: {
    fontSize: 14,
    color: '#888',
  },
  link: {
    color: '#318bfb',
    fontWeight: '500',
    marginTop: 5,
  },
});
