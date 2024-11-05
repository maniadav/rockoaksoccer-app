import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ProfileScreen = ({ navigation }: any) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <View>
          <Text>Profile Screen</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});
