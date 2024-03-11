//RootStack.js

import React from 'react';

import { Colors } from '../components/styles';
const { primary, tertiary } = Colors;

// react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';
import Welcome from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import AttractionListPage from '../screens/AttractionListScreen';

const Stack = createNativeStackNavigator();

//credentials context
import { CredentialContext } from '../components/CredentialsContext';

const RootStack = () => {
  return (
    <CredentialContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTintColor: tertiary,
              headerTransparent: true,
              headerTitle: '',
              headerLeftContainerStyle: {
                paddingLeft: 20,
              },
            }}
            initialRouteName="Login"
          >
            {storedCredentials ? (
              <Stack.Screen option={{ headerTintColor: primary }} name="Welcome" component={Welcome} />
              // <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="AttractionListPage" component={AttractionListPage} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialContext.Consumer>
  );
};

export default RootStack;
