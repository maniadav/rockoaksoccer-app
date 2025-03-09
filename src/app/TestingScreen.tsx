import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import IconInfoRow from "@components/event/IconInfoRow";
import EventDetailHeader from "@components/event/EventDetailHeader";
import LocationMap from "@components/event/LocationMap";
import ActionButtons from "@components/event/ActionButton";
import ParticipantComp from "@components/event/ParticipantsComp";
import ShortDescription from "@components/event/ShortDescription";
import TagComp from "@components/event/TagComp";
import EventTiming from "@components/event/EventTiming";
import LongDescription from "@components/event/LongDescription";
import OrganizerInfo from "@components/event/OrganizerInfo";
import ImageGallery from "@components/event/ImageGallery";
import BookingButton from "@components/event/BookingButton";
import SafeAreaBackButton from "@components/button/SafeAreaBackButton";
import UtilityAPI from "service/utility";
import DATA from "@constants/event.data.constant";
import Loader from "@components/common/Loader";
import NoDataComponent from "@components/event/NoDataComponent";
import SCREENS from "@constants/screen.constant";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

const { width } = Dimensions.get("window");

export default function TestingScreen({ navigation }: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const [joined, setJoined] = useState<number>(1);
  const [intereseted, setIntereseted] = useState<number>(1);
  const [data, setData] = useState<any | null>(null);
  const route = useRoute<any>();
  const { id } = route.params;

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const rockOakApi = new UtilityAPI();
    try {
      setLoading(true);
      const res = await rockOakApi.fetchEventDetails(id);
      if (res && res.data) {
        setData(res.data);
        console.log(res.data);
      } else {
        console.warn("No data received!");
        setData(DATA[0]);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      setData(DATA[0]);
    } finally {
      setLoading(false);
    }
  };

  const [userStatus, setUserStatus] = useState<
    "none" | "interested" | "joined"
  >("none");

  useEffect(() => {
    userStatus === "joined" ? setJoined(2) : setJoined(1);
    userStatus === "interested" ? setIntereseted(2) : setIntereseted(1);
  }, [userStatus]);

  const joinButtonScale = useRef(new Animated.Value(1)).current;
  const interestedButtonScale = useRef(new Animated.Value(1)).current;

  const handleStatusChange = (newStatus: "interested" | "joined") => {
    // Button animation
    const buttonScale =
      newStatus === "joined" ? joinButtonScale : interestedButtonScale;

    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    if (userStatus === newStatus) {
      setUserStatus("none");
    } else {
      setUserStatus(newStatus);
    }
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {loading ? (
        <Loader />
      ) : data ? (
        <View style={styles.container}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <SafeAreaBackButton />
            <Image
              source={{ uri: data.images.landscape }}
              style={styles.mainImage}
              resizeMode="cover"
            />

            <View style={styles.detailsContainer}>
              <EventDetailHeader
                title={data.title}
                type={data.type.toUpperCase()}
                uniqueId={data.uniqueId}
              />
              <View style={styles.timeLocationContainer}>
                <IconInfoRow
                  iconName="calendar-outline"
                  text={data.timing.start}
                />

                <IconInfoRow
                  iconName="time-outline"
                  text={`${formatDate(data.timing.start)} - ${formatDate(
                    data.timing.end
                  )}`}
                  extraText={`(${data.timing.duration})`}
                />

                <IconInfoRow
                  iconName="location-outline"
                  text={data.locationDetail.location}
                />

                <Text style={styles.address}>
                  {data.locationDetail.location}
                </Text>
              </View>
              {/* EVENT MAP */}
              <LocationMap
                name={data.locationDetail.location}
                address={data.locationDetail.location}
                coordinates={{
                  longitude: data.locationDetail.lng,
                  latitude: data.locationDetail.lat,
                }}
              />
              <ActionButtons
                userStatus={userStatus}
                joinButtonScale={joinButtonScale}
                interestedButtonScale={interestedButtonScale}
                onStatusChange={handleStatusChange}
              />
              <ParticipantComp
                joined={joined} //EVENT_DATA.attendees
                interested={intereseted}
                avatars={[
                  "https://api.a0.dev/assets/image?text=person%20avatar%201&aspect=1:1&seed=1",
                  "https://api.a0.dev/assets/image?text=person%20avatar%202&aspect=1:1&seed=2",
                  "https://api.a0.dev/assets/image?text=person%20avatar%203&aspect=1:1&seed=3",
                  "https://api.a0.dev/assets/image?text=person%20avatar%204&aspect=1:1&seed=4",
                  "https://api.a0.dev/assets/image?text=person%20avatar%203&aspect=1:1&seed=3",
                ]}
              />
              {/* Short Description */}
              <ShortDescription description={data.shortDescription} />
              {/* Tags */}
              <TagComp tags={data.tags} />
              {/* Long Description */}
              <LongDescription description={data.longDescription} />
              {/* Timing Details */}
              <EventTiming
                start={data.timing.start}
                end={data.timing.end}
                duration={data.timing.duration}
              />
              {/* Organizer */}
              <OrganizerInfo
                organizer={data.organizer}
                isTrending={true}
                isFeatured={true}
                type={data.type}
              />

              {/* Image Gallery */}
              <ImageGallery
                images={[data.images.landscape]}
                title="Event Gallery"
              />
            </View>
          </ScrollView>{" "}
          {/* <SafeAreaView style={{ backgroundColor: "white" }}> */}
          <BookingButton />
          {/* </SafeAreaView> */}
        </View>
      ) : (
        <NoDataComponent onRefresh={() => navigation.navigate(SCREENS.main)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: 50,
  },
  scrollView: {
    flex: 1,
  },
  headerActions: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  shareButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#993b1f",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  mainImage: {
    width: "100%",
    height: 240,
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  typeContainer: {
    backgroundColor: "#993b1f",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 10,
  },
  typeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  titleAndTagsContainer: {
    flex: 1,
    marginRight: 12,
  },
  titleTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    marginRight: 8,
  },
  timeLocationContainer: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 8,
  },
  durationText: {
    color: "#666",
    fontSize: 14,
  },
  address: {
    fontSize: 14,
    color: "#666",
    marginLeft: 28,
    marginTop: -4,
  },
  mapContainer: {
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapPlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  mapPlaceholderText: {
    marginTop: 8,
    color: "#555",
    fontSize: 14,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 14,
    borderRadius: 8,
    flex: 1,
  },
  activeButton: {
    backgroundColor: "#993b1f",
  },
  actionButtonText: {
    fontSize: 16,
    color: "#993b1f",
    fontWeight: "600",
    marginLeft: 8,
  },
  activeButtonText: {
    color: "#fff",
  },
  attendeeSection: {
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    overflow: "hidden",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  attendeeHeader: {
    backgroundColor: "#993b1f",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  attendeeHeaderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  attendeeContent: {
    padding: 16,
  },
  attendeeAvatars: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
  attendeeAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: -10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  moreAttendees: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#993b1f",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
  },
  moreAttendeesText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  attendeeCounts: {
    flexDirection: "row",
  },
  attendeeCount: {
    marginRight: 24,
  },
  countNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  countLabel: {
    fontSize: 14,
    color: "#666",
  },
  shortDescContainer: {
    marginBottom: 16,
    backgroundColor: "#f5f2ec",
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 3,
    borderLeftColor: "#993b1f",
  },
  shortDescription: {
    fontSize: 16,
    color: "#333",
    fontStyle: "italic",
    lineHeight: 24,
  },
  tagsContainer: {
    marginBottom: 20,
  },
  tagContainer: {
    backgroundColor: "#f0ebe1",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  tagText: {
    color: "#993b1f",
    fontSize: 14,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },
  readMore: {
    color: "#993b1f",
    fontWeight: "600",
    marginTop: 8,
  },
  scheduleContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "flex-start",
  },
  scheduleDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#993b1f",
    marginTop: 4,
  },
  scheduleTimeline: {
    width: 2,
    height: 40,
    backgroundColor: "#993b1f",
    marginLeft: 5,
  },
  timelineEnd: {
    height: 0,
  },
  scheduleContent: {
    marginLeft: 12,
  },
  scheduleTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  scheduleLabel: {
    fontSize: 14,
    color: "#666",
  },
  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0ebe1",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  durationDetailText: {
    fontSize: 14,
    color: "#993b1f",
    marginLeft: 6,
    fontWeight: "500",
  },
  organizerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 12,
  },
  organizerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  organizerInfo: {
    marginLeft: 16,
    flex: 1,
  },
  organizerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 2,
  },
  organizerRole: {
    fontSize: 14,
    color: "#993b1f",
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 6,
  },
  tagBadges: {
    flexDirection: "row",
    marginTop: 10,
    flexWrap: "wrap",
  },
  tagBadge: {
    backgroundColor: "#f0ebe1",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  tagBadgeText: {
    color: "#993b1f",
    fontSize: 12,
    marginLeft: 4,
  },
  galleryContainer: {
    marginBottom: 24,
  },
  galleryList: {
    paddingRight: 16,
  },
  galleryImage: {
    width: width * 0.75,
    height: 180,
    borderRadius: 12,
    marginRight: 12,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  detailLabel: {
    fontSize: 14,
    color: "#666",
  },
  detailValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  statusBadge: {
    backgroundColor: "#f0ebe1",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    color: "#993b1f",
    fontSize: 12,
    fontWeight: "bold",
  },
});
