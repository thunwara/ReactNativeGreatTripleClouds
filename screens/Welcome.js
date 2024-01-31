import React from 'react';
import { StatusBar } from 'expo-status-bar';

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
} from './../components/styles';

const Welcome = ({ navigation, route }) => {
  const { name, email } = route.params;
  return (
    <>
      <StatusBar style="light" />
      {/* <WelcomeImage resizeMode="cover" source={require('./../assets/pexels-aditya-aiyar.jpg')} /> */}
      <InnerContainer>
        <WelcomeContainer>
          <PageTitle welcome={true}>Hello, Ban Pin</PageTitle>
          <SubTitle>{name || 'Theewara'}</SubTitle>
          <StyledFormArea>
            {/* <Avatar resizeMode="cover" source={require('./../assets/Google-Travel.png')} /> */}
            <StyledButton onPress={() => navigation.navigate('AttractionListPage')}>
              <ButtonText>Attractions</ButtonText>
            </StyledButton>
            <StyledButton onPress={() => navigation.navigate('Login')}>
              <ButtonText>Home Stays</ButtonText>
            </StyledButton>
            <Line />
            <StyledButton onPress={() => navigation.navigate('Login')}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
