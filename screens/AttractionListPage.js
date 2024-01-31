// AttractionListPage.js

import React from 'react';
import { View } from 'react-native';
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
import { Header } from 'react-native/Libraries/NewAppScreen';

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
