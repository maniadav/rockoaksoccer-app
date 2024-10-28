import Background from '@/components/Background';
import LogOutButton from '@/components/LogOutButton';
import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <Background>
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
        <Button title="Events" onPress={() => navigation.navigate('Events')} />
        <LogOutButton />
      </View>
    </Background>
  );
};

export default HomeScreen;
