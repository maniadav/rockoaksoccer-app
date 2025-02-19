import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ProfileScreen() {
  // Fetching the dynamic 'id' from the route
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg">Event ID: {id}</Text>
    </View>
  );
}
