import Logo from "@components/common/Logo";
import SafeAreaComponent from "@components/common/SafeAreaComponent";
import FAQ from "@components/home/FAQ";
import HeroSection from "@components/home/HeroSection";
import Services from "@components/home/Services";
import Testimonials from "@components/home/Testimonial";
import VideoTestimonials from "@components/home/VideoTestimonial";
import LogOutButton from "@components/LogOutButton";
import TopNavigation from "@components/navigation/TopNavigation";
import { ScrollView } from "react-native";
import { View } from "react-native";
import HomeBanner from "@components/home/HomeBanner";
import QuickLinks from "@components/home/QuickLinks";
import Program from "@components/home/Program";
import UpcomingEvents from "@components/home/UpcomingEvents";
import LatestFeed from "@components/home/LatestFeed";
import { RootStackNavigationProp } from "types/stack.type";

const HomeScreen = ({ navigation, route }: RootStackNavigationProp) => {
  return (
    <SafeAreaComponent>
      <TopNavigation />
      <ScrollView>
        <Logo />
        <HomeBanner />
        <QuickLinks />
        <HeroSection />
        <Program navigation={navigation} route={route} />
        <UpcomingEvents />
        <LatestFeed />
        {/* <VideoTestimonials /> */}
        {/* <Services /> */}
        {/* <Testimonials /> */}
        <FAQ />
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 20,
          }}
        >
          {/* <LogOutButton /> */}
        </View>
      </ScrollView>
    </SafeAreaComponent>
  );
};

export default HomeScreen;
