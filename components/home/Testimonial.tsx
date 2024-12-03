// components/Testimonials.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Heading from '../common/Heading'; // Assuming you have a Heading component
import COLOUR from '@/constants/colour.constant';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, ABC Inc.',
    testimonial:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    initials: 'JD',
  },
  {
    id: 2,
    name: 'Winter Doe',
    position: 'CTO, XYZ Corp.',
    testimonial:
      'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User-generated content in real-time will have multiple touchpoints for offshoring.',
    initials: 'WD',
  },
  {
    id: 3,
    name: 'John Wick',
    position: 'Product Manager, Fake Corp.',
    testimonial:
      'Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
    initials: 'JW',
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(2);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev >= testimonials.length ? 1 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev <= 1 ? testimonials.length : prev - 1
    );
  };

  return (
    <View style={styles.container}>
      <Heading
        heading="Testimonial"
        border={true}
        subHeading="We believe in customer satisfaction!!"
        dark
      />
      <View style={styles.testimonialContainer}>
        <View style={styles.rightPanel}>
          {testimonials.map((testimonial) => (
            <View
              key={testimonial.id}
              style={
                activeTestimonial === testimonial.id
                  ? styles.testimonialActive
                  : styles.testimonialHidden
              }
            >
              <Text style={styles.name}>{testimonial.name}</Text>
              <Text style={styles.position}>{testimonial.position}</Text>
              <Text style={styles.testimonial}>{testimonial.testimonial}</Text>
            </View>
          ))}

          <View style={styles.initialsContainer}>
            {testimonials.map((testimonial) => (
              <TouchableOpacity
                key={testimonial.id}
                onPress={() => setActiveTestimonial(testimonial.id)}
                style={[
                  styles.initialButton,
                  activeTestimonial === testimonial.id
                    ? styles.initialButtonActive
                    : styles.initialButtonInactive,
                ]}
              >
                <Text style={styles.initials}>{testimonial.initials}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.leftPanel}>
          <Text style={styles.title}>What Our Students Say!</Text>
          <View style={styles.navButtons}>
            <TouchableOpacity
              onPress={prevTestimonial}
              style={styles.navButton}
            >
              <Text style={styles.navText}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={nextTestimonial}
              style={styles.navButton}
            >
              <Text style={styles.navText}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: 'darkgray',
    fontWeight: '600',
  },
  testimonialContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  leftPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3c3c3c',
    textAlign: 'center',
    marginBottom: 24,
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
  },
  navButton: {
    backgroundColor: COLOUR.primary,
    borderRadius: 50,
    padding: 10,
  },
  navText: {
    color: 'white',
    fontSize: 24,
  },
  rightPanel: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  testimonialActive: {
    display: 'flex',
  },
  testimonialHidden: {
    display: 'none',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  position: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 16,
  },
  testimonial: {
    fontSize: 18,
    color: '#2c3e50',
    fontStyle: 'italic',
  },
  initialsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  initialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  initialButtonActive: {
    backgroundColor: COLOUR.primary,
  },
  initialButtonInactive: {
    backgroundColor: '#95a5a6',
  },
  initials: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Testimonials;
