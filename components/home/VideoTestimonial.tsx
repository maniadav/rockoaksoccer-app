import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { ResizeMode, Video } from 'expo-av';
// import LinearGradient from 'react-native-linear-gradient';
import Heading from '../common/Heading';

const VideoTestimonials = () => {
  const videoRef = useRef<Video>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen && videoRef.current) {
      videoRef.current.playAsync();
    } else if (videoRef.current) {
      videoRef.current.pauseAsync();
    }
  }, [modalOpen]);

  return (
    <View style={styles.content}>
      <Heading
        dark
        heading="Testimonial"
        subHeading="We believe in our players!!"
      />
      <View style={styles.grid}>
        <TouchableOpacity
          onPress={() => setModalOpen(true)}
          style={styles.thumbnailContainer}
        >
          {/* <View
            style={{
              position: 'absolute',
              width: 100,
              height: 100,
              borderRadius: 100,
              backgroundColor: 'black',
            }}
          ></View> */}
          <Image
            style={styles.image}
            source={require('../../assets/images/pic3.jpg')}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.title}>How our students feel</Text>
          <Text style={styles.description}>
            At RockOak Soccer, we are committed to fostering not only skill
            development but also personal growth and social connections. Our
            program offers engaging and diverse training sessions that help
            young players build confidence, stay fit, and enjoy the camaraderie
            of team sports.
            {'\n'} {'\n'}
            <Text style={styles.quote}>
              "Every Sunday, I get to play matches, improve my skills, and make
              new friends. It's a great place to be."
            </Text>
            {'\n'}— Mustapha, Rock Oak Soccer Student
            {'\n'}
            {'\n'}
            <Text style={styles.quote}>
              "I love training with the same balls as my favorite players! It
              makes me feel like I’m part of something big. The training keeps
              me mentally and physically fit."
            </Text>
            {'\n'}— Tyce Naraidoo, Rock Oak Soccer Student
          </Text>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* <Video
              ref={videoRef}
              source={{ uri: 'https://example.com/videos/testimonial.mov' }}
              style={styles.video}
              useNativeControls
              resizeMode={ResizeMode.COVER}
            /> */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalOpen(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 8,
    display: 'flex',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  gradientBackground: {
    padding: 4,
    borderRadius: 8,
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subheading: {
    fontSize: 18,
    marginVertical: 8,
    color: '#555',
  },
  grid: {
    // flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: 'transparent',
    backgroundColor: 'linear-gradient(to right, black, red)', // Adjust this as needed
    padding: 4,
  },
  description: {
    fontSize: 18,
    color: '#333',
    marginTop: 16,
  },
  quote: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#555',
  },
  thumbnailContainer: {
    marginTop: 16,
    width: '100%',
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContainer: {
    width: '90%',
    height: '80%',
    backgroundColor: '#000',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#f00',
    padding: 8,
    borderRadius: 20,
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default VideoTestimonials;
