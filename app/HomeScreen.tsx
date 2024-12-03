import Logo from '@/components/common/Logo';
import SafeAreaComponent from '@/components/common/SafeAreaComponent';
import HeroSection from '@/components/home/HeroSection';
import Services from '@/components/home/Services';
import LogOutButton from '@/components/LogOutButton';
import { ScrollView } from 'react-native';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaComponent>
      <ScrollView>
        <Logo />
        <HeroSection />
        <Services />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <Button
            title="Go to Event 1234"
            onPress={() => navigation.navigate('event/1234')}
          />
          <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('ProfileScreen')}
          />
          <Button
            title="Go to Sign Up"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
          <Button
            title="event listing"
            onPress={() => navigation.navigate('EventListingScreen')}
          />
          <Button
            title="Events"
            onPress={() => navigation.navigate('Events')}
          />
          <LogOutButton />
        </View>
      </ScrollView>
    </SafeAreaComponent>
  );
};

export default HomeScreen;
