import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { cssInterop } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import { formatDate } from '@/helpers/convert';
// import BookingButton from './BookingButton';

const StyledView = cssInterop(View, { className: 'style' });
const StyledImage = cssInterop(Image, { className: 'style' });
const StyledTouchableOpacity = cssInterop(TouchableOpacity, {
  className: 'style',
});

const EventCard = ({ item, hideButton }: any) => {
  const navigation = useNavigation<any>();

  return (
    <StyledView className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
      <StyledImage
        source={{ uri: item.image }}
        className="absolute w-full h-full object-cover transition-transform duration-300 transform rounded-t-2xl"
      />

      <StyledTouchableOpacity
        onPress={() =>
          navigation.navigate('EventDetails', { id: item.uniqueId })
        }
        className="absolute inset-0 flex items-center justify-center bg-red-950 bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <Text className="text-white text-xl">View Details</Text>
        <svg
          className="ml-2 w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      </StyledTouchableOpacity>

      <StyledView className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></StyledView>

      <StyledTouchableOpacity className="absolute right-0 top-0 p-2 flex-row items-center">
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </StyledTouchableOpacity>

      <StyledView className="absolute w-full flex-row justify-between items-center p-4">
        <View>
          <Text className="text-white text-xl font-bold">{item.title}</Text>
          <Text className="text-gray-300 text-sm">{`Published on ${formatDate(
            item.date
          )}`}</Text>
          <View className="flex-row items-center text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Text className="pl-1 text-sm">2 Days ago</Text>
          </View>
        </View>
        {/* {!hideButton && <BookingButton uniqueID={item.uniqueId} />} */}
      </StyledView>
    </StyledView>
  );
};

export default EventCard;
