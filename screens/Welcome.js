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

const Welcome = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeImage resizeMode="cover" source={require('./../assets/pexels-aditya-aiyar.jpg')} />
      <InnerContainer>
        <WelcomeContainer>
          <PageTitle welcome={true}>Hello Thunwara</PageTitle>
          <SubTitle>where do you wanna go?</SubTitle>
          <SubTitle>mtheewara@gmail.com</SubTitle>
          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/Google-Travel.png')} />
            <Line />
            <StyledButton onPress={() => {}}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
