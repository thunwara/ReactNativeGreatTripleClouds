// AppHeader.js from ChatGPT

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Octicons, Ionicons, Fontisto } from '@expo/vector-icons'; // You can import other icons as needed

import { Colors } from './styles'; // Make sure to adjust the import based on your actual file structure

const Header = (props) => {
  return (
    <View style={{ marginLeft: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{props.name}</Text>
    </View>
  );
};

export default Header;
