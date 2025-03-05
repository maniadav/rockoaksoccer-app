import React, { useEffect, useState } from "react";
import DATA from "@constants/event.data.constant";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@components/BackButton";
import { getEventById } from "@api/categories";
import EventDetailsDesc from "@components/event/EventDetailsDesc";
import BookingButton from "@components/button/BookingButton";
import ContentView from "@components/event/ContentView";
import { formatDate } from "helpers/convert";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { EventData } from "types/event.type";
import Loader from "@components/common/Loader";
import NoData from "@components/common/NoData";
import EventMap from "@components/event/EventMap";

function EventDetailScreen({ route }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<EventData | null>(null);

  useEffect(() => {
    fetchEventDetails();
  }, [route.param]);

  const fetchEventDetails = async () => {
    const { id } = route.params;
    // const rockOakApi = new UtilityAPI();
    setIsLoading(true);
    try {
      // const res = await rockOakApi.fetchEventDetails(params.slug);
      const eventByID = (await getEventById(id)) || null;
      setData(eventByID);
    } catch (error) {
      console.error("Fetching events failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const eventData = data || DATA[0];

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : eventData ? (
        <View style={{ flex: 1 }}>
          <ScrollView>
            <Image
              source={{ uri: `${eventData.image.landscape}` }}
              style={styles.image}
            />
            <View style={styles.backButtonContainer}>
              <BackButton />
            </View>
            <View style={styles.eventDetailsContainer}>
              <EventDetailsDesc
                title={eventData.image.landscape}
                date={eventData.timing.start}
              />
            </View>
            <View style={styles.contentContainer}>
              <ContentView
                title="Published On"
                description={formatDate(eventData.timing.start)}
              />
              <ContentView title="Tags" tagData={eventData.tags} />
              <ContentView
                title="Location"
                description={eventData.locationDetail?.location || ""}
              />
              <ContentView
                title="About the Event"
                subTitle={eventData.timing.duration}
                description={eventData.shortDescription}
              />
              <ContentView
                title="About the Organizer"
                subTitle={eventData.organizer?.role}
                description={eventData.organizer?.name}
              />
            </View>
            <EventMap
              locationDetail={eventData.locationDetail}
              date={eventData.timing.start}
            />
          </ScrollView>
          <SafeAreaView style={styles.safeAreaView}>
            <BookingButton />
          </SafeAreaView>
        </View>
      ) : (
        <View style={styles.noDataContainer}>
          <NoData />
        </View>
      )}
    </View>
  );
}

export default EventDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  image: {
    top: 0,
    width: "100%",
    height: 300,
    zIndex: -1,
  },
  backButtonContainer: {
    position: "absolute",
    top: 30,
    left: 10,
    zIndex: 1,
  },
  eventDetailsContainer: {
    position: "absolute",
    top: 220,
    left: 20,
    right: 20,
    zIndex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  safeAreaView: {
    backgroundColor: "white",
  },
  noDataContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 20,
  },
  noDataText: {
    fontSize: 16,
    color: "gray",
  },
});
