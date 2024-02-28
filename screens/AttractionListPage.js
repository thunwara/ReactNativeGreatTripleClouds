// AttractionListPage.js

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Header from '../components/Header';
import AttractionList from '../components/AttractionList';


import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
  StyledContainer,
} from './../components/styles';

const AttractionListPage = ({ attractions, navigation }) => {
  const handleAttractionPress = (attractionId) => {
    // Implement navigation to the individual attraction page
    // using the 'attractionId' and the 'navigation' prop.
    console.log(`Pressed on attraction with ID ${attractionId}`);
  };

  // Sample data
  const attractionsData = [
    {
      id: 1,
      name: 'Ban Pin Waterfall',
      description: 'A beautiful natural waterfall in Ban Pin.',
      image: require('/Users/thunwara/Desktop/coding/ReactNativeGreatTripleClouds/assets/banpin-station.jpg'), // Assume you have this image in your project
    },
    {
      id: 2,
      name: 'Local Cuisine Experience',
      description: 'Explore local flavors and cuisines in Ban Pin.',
      image: require('/Users/thunwara/Desktop/coding/ReactNativeGreatTripleClouds/assets/banpin-station.jpg'), // Assume you have this image in your project
    },
  ];

  const handleProfilePress = () => {
    // Implement navigation to the profile page
    // using the 'navigation' prop.
    console.log('Pressed on profile');
  };

  const Stack = createStackNavigator();

  const username = 'JohnDoe'; // Replace with actual username

  return (
    <>

      <Header username={username} currentPage="Attraction List" onProfilePress={handleProfilePress} />
      <InnerContainer>
        <StyledContainer>
          <PageTitle>AttractionListPage</PageTitle>
          <AttractionList attractions={attractionsData} onAttractionPress={handleAttractionPress} />
        </StyledContainer>
      </InnerContainer>
    </>
  );
};

export default AttractionListPage;
