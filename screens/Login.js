import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle
} from './../components/styles';

const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('/Users/thunwara/ReactNativeGreatTripleClouds/assets/favicon.png')}/>
                <PageTitle>WePlan</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;