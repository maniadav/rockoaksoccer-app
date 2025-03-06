import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  let badgeStyle = {};
  let textStyle = {};
  let iconName = '';
  
  switch(status) {
    case 'Confirmed':
      badgeStyle = styles.confirmedBadge;
      textStyle = styles.confirmedText;
      iconName = 'check-circle';
      break;
    case 'Pending':
      badgeStyle = styles.pendingBadge;
      textStyle = styles.pendingText;
      iconName = 'clock';
      break;
    case 'Completed':
      badgeStyle = styles.completedBadge;
      textStyle = styles.completedText;
      iconName = 'check-double';
      break;
    case 'Canceled':
      badgeStyle = styles.canceledBadge;
      textStyle = styles.canceledText;
      iconName = 'times-circle';
      break;
  }

  return (
    <View style={[styles.statusBadge, badgeStyle]}>
      <FontAwesome5 name={iconName} size={10} style={[textStyle, {marginRight: 4}]} />
      <Text style={[styles.statusText, textStyle]}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
  },
  confirmedBadge: {
    backgroundColor: 'rgba(46, 204, 113, 0.9)',
  },
  pendingBadge: {
    backgroundColor: 'rgba(243, 156, 18, 0.9)',
  },
  completedBadge: {
    backgroundColor: 'rgba(52, 152, 219, 0.9)',
  },
  canceledBadge: {
    backgroundColor: 'rgba(231, 76, 60, 0.9)',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  confirmedText: {
    color: 'white',
  },
  pendingText: {
    color: 'white',
  },
  completedText: {
    color: 'white',
  },
  canceledText: {
    color: 'white',
  },
});

export default StatusBadge;