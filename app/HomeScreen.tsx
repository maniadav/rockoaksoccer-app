import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <Text>Home Screen</Text>
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
        title="Go to Login"
        onPress={() => navigation.navigate('SignInScreen')}
      />
    </View>
  );
};

export default HomeScreen;
