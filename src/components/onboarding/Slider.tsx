import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import data from "../../constants/slider.data.constant";
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";
import { ParamListBase } from "@react-navigation/native";
import SCREENS from "@constants/screen.constant";
import { StackNavigationProp } from "@react-navigation/stack";
import ButtonComp from "@components/common/ButtonComp";
import COLOUR from "@constants/colour.constant";

type ViewableItemsChangedProps = {
  viewableItems: Array<{
    index: number | null;
  }>;
};

const { width, height } = Dimensions.get("screen");

const Slider = ({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(
    ({ viewableItems }: ViewableItemsChangedProps) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setIndex(viewableItems[0].index);
      }
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      <View style={styles.content}>
        <Pagination data={data} scrollX={scrollX} index={index} />
        <ButtonComp
          borderRadius={20}
          bgColor={COLOUR.primary || ""}
          title={"Sign In"}
          onPress={() => navigation.navigate(SCREENS.signIn)}
        />
        <ButtonComp
          borderRadius={20}
          bgColor={COLOUR.primary || ""}
          title={"Sign Up"}
          onPress={() => navigation.navigate(SCREENS.signUp || "")}
        />
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingHorizontal: 70,
    paddingBottom: 50,
  },
});
