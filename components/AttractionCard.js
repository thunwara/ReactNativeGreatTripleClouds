// AttractionCard.js

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const AttractionCard = ({ name, description, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Image source={image} style={{ width: 100, height: 100 }} />
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AttractionCard;
