import React from "react";
import Slider from "@components/onboarding/Slider";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const OnBoardingScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) => {
  return <Slider navigation={navigation} />;
};

export default OnBoardingScreen;
