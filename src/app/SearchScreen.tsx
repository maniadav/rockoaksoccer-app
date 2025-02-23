import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import filter from "lodash.filter";
import { theme } from "@components/theme";
import { EventDraft } from "@constants/event.data.constant";
import EventCard from "@components/event/EventCard";
import { useNavigation } from "expo-router";
import { styles } from "style/categories.style";
import { getAllEvent, getEventById } from "@api/categories";
import SCREENS from "@constants/screen.constant";
import SafeAreaComponent from "@components/common/SafeAreaComponent";
import TopNavHeader from "@components/navigation/TopNavHeader";

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigation = useNavigation<any>();

  const [data, setEvents] = useState<any>(EventDraft);

  useEffect(() => {
    const data = getAllEvent();
    console.log(data);
    setEvents(data);
  }, []);

  const searchFunction = (text: string) => {
    setSearchValue(text);

    const updatedData = filter(EventDraft, (item: any) => {
      const item_data = `${item.title.toUpperCase()}`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    console.log(text, updatedData);
    setEvents(updatedData);
  };

  const iconPressHandle = () => {
    const eventsByID: any = getEventById(searchValue) || null;
    eventsByID ? setEvents([eventsByID]) : setEvents([]);
    setEvents(eventsByID);
    // Alert.alert('Search Value', searchValue || 'No search value entered');
  };

  const handlClearIconPress = () => {
    setEvents(EventDraft);
  };

  return (
    <SafeAreaComponent>
      <TopNavHeader title="Search" />
      <View style={styles.categoryContainer}>
        <Searchbar
          placeholder="Search Here..."
          value={searchValue}
          onChangeText={searchFunction}
          onIconPress={iconPressHandle}
          mode="bar"
          iconColor={theme.colors.primary}
          onClearIconPress={handlClearIconPress}
          style={{ marginBottom: 20 }}
        />
        {data?.length ? (
          <FlatList
            data={data}
            renderItem={({ item, index }: any) => (
              <EventCard
                title={item.title}
                image={item.image}
                date={item.date}
                location={item.location}
                onPress={() =>
                  navigation.navigate(SCREENS.eventDetail, { id: item?.id })
                }
              />
            )}
            keyExtractor={(item, index) => `${item?.id}-${index}`}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View></View>
        )}
      </View>
    </SafeAreaComponent>
  );
};

export default SearchScreen;
