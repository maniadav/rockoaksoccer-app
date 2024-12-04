import Logo from '@/components/common/Logo';
import SafeAreaComponent from '@/components/common/SafeAreaComponent';
import FAQ from '@/components/home/FAQ';
import HeroSection from '@/components/home/HeroSection';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonial';
import VideoTestimonials from '@/components/home/VideoTestimonial';
import LogOutButton from '@/components/LogOutButton';
import TopNavigation from '@/components/navigation/TopNavigation';
import { ScrollView } from 'react-native';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaComponent>
      <ScrollView>
        <Logo />
        <HeroSection />
        <VideoTestimonials />
        <Services />
        <Testimonials />
        <FAQ />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <LogOutButton />
        </View>
      </ScrollView>
    </SafeAreaComponent>
  );
};

export default HomeScreen;
