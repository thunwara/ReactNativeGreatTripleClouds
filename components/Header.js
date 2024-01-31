// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // You can import other icons as needed

import { Colors } from './styles'; // Make sure to adjust the import based on your actual file structure

const Header = ({ username, currentPage, onProfilePress }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' }}>
      <TouchableOpacity onPress={onProfilePress}>
        {/* Assume you have a user image, replace 'userImage.jpg' with the actual image path */}
        <Image source={require('./images/userImage.jpg')} style={{ width: 30, height: 30, borderRadius: 15 }} />
      </TouchableOpacity>
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{currentPage}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 10 }}>{username}</Text>
        <TouchableOpacity onPress={() => console.log('Notifications button pressed')}>
          <AntDesign name="bells" size={24} color={Colors.tertiary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Settings button pressed')}>
          <AntDesign name="setting" size={24} color={Colors.tertiary} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
