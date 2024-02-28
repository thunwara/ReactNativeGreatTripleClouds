// AttractionDetailScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const AttractionDetailScreen = ({ route }) => {
  // Access attraction details from route params
  const { attraction } = route.params;

  return (
    <View>
      <Text>Attraction Detail Screen</Text>
      <Text>Name: {attraction.name}</Text>
      <Text>Description: {attraction.description}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default AttractionDetailScreen;