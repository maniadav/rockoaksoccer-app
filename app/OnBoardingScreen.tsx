import React from 'react';
import { View, Text } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Slider from './(tabs)/Slider2';

const OnBoardingScreen = ({ navigation }: any) => {
  return (
    <Background>
      {/* <Slider /> */}

      <Button
        mode="contained"
        onPress={() => navigation.navigate('SignInScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('SignUpScreen')}
      >
        Sign Up
      </Button>
    </Background>
  );
};

export default OnBoardingScreen;
