import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface EventTypeTagProps {
  eventType: string;
}

const EventTypeTag = ({ eventType }: EventTypeTagProps) => {
  // Customize colors based on event type
  let backgroundColor = '#f5f5f5';
  let textColor = '#444';

  switch(eventType) {
    case 'Midterm':
      backgroundColor = '#e8f4fd';
      textColor = '#0275d8';
      break;
    case 'Term Holiday':
      backgroundColor = '#fef6e8';
      textColor = '#f0ad4e';
      break;
    case 'Adult Term':
      backgroundColor = '#e9f8f2';
      textColor = '#5cb85c';
      break;
    default:
      backgroundColor = '#f5f5f5';
      textColor = '#444';
  }

  return (
    <View style={[styles.eventTypeContainer, { backgroundColor }]}>
      <MaterialIcons name="event" size={16} color={textColor} />
      <Text style={[styles.eventTypeText, { color: textColor }]}>{eventType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  eventTypeText: {
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 14,
  },
});

export default EventTypeTag;