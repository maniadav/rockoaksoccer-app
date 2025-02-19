import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Heading from '../common/Heading';

const Services = () => {
  return (
    <ImageBackground
      source={require('../../../assets/svg/wave.svg')}
      style={styles.container}
    >
      <Heading
        dark
        border
        center
        heading="What We Do"
        subHeading="Save time managing advertising &amp; Content for your business."
      />
      <View style={styles.servicesRow}>
        {services.map((item, index) => (
          <View key={index} style={styles.serviceCard}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 12,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    textAlign: 'center',
    marginTop: 8,
  },
  servicesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    display: 'flex',
    width: '48%',
    marginBottom: 16,
  },
  card: {
    padding: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#5F4B8B',
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});

const services = [
  {
    title: 'Customised Training for All Ages',
    desc: 'Customized training programs tailored for both children and adults, designed to meet unique fitness goals.',
  },
  {
    title: 'State-of-the-Art Mobile Application',
    desc: 'Track your progress, access customized meal plans, monitor steps, enjoy tailored training videos, and easily book classes through our advanced mobile app.',
  },
  {
    title: 'Flexible Timetable for Busy Professionals',
    desc: 'Start your day with early morning training sessions from 6:00 - 7:00 am, designed for busy professionals looking to stay fit.',
  },
  {
    title: 'Premium Soccer Balls',
    desc: 'Experience training with official match balls from the English Premier League, La Liga, and the Champions League, offering top-level precision and performance.',
  },
  {
    title: 'Champion-Level Training Experience',
    desc: 'Train with the same balls as your favorite players. Feel the passion and excitement of using tools designed for champions.',
  },
];
