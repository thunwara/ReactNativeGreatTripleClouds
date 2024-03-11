//WelcomeScreen.js

import React, { useContext } from 'react';
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
} from '../components/styles';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//credentials context
import { CredentialContext } from '../components/CredentialsContext';

const Welcome = ({ navigation, route }) => {
  //context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialContext);
  const { name, email } = storedCredentials;

  const ClearLogin = () => {
    AsyncStorage.removeItem('flowerCribCredentials')
      .then(() => {
        setStoredCredentials('');
      })
      .catch((error) => console.log(error));
  };

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
            <StyledButton onPress={() => navigation.navigate('AttractionListPage')}>
              <ButtonText>Home Stays</ButtonText>
            </StyledButton>
            <Line />
            <StyledButton onPress={ClearLogin}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
