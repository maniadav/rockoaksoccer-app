import COLOUR from '@/constants/colour.constant';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Example() {
  return (
    <View style={styles.overlay}>
      {/* <View style={styles.overlayContent}>
        <View style={styles.overlayContentTop}>
          <Text style={styles.overlayContentPriceBefore}>$399</Text>
          <Text style={styles.overlayContentPrice}>$299/mo</Text>
        </View>
        <Text style={styles.overlayContentTotal}>30% discount applied</Text>
      </View> */}

      <TouchableOpacity
        onPress={() => {
          // handle onPress
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>Book Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  overlayContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  overlayContentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 2,
  },
  overlayContentPriceBefore: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
    color: '#8e8e93',
    marginRight: 4,
    textDecorationLine: 'line-through',
    textDecorationColor: '#8e8e93',
  },
  overlayContentPrice: {
    fontSize: 21,
    lineHeight: 26,
    fontWeight: '700',
    color: '#000',
  },
  overlayContentTotal: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#4c6cfd',
    textDecorationLine: 'underline',
    textDecorationColor: '#4c6cfd',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLOUR.primary,
    borderColor: '#007aff',
    width: 300
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: 'white',
  },
});
