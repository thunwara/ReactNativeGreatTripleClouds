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
import { CredentialsContext } from '../components/CredentialsContext';

const RootStack = () => {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: 'red' }}>
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
          >
            {storedCredentials ? (
              <Stack.Screen
                options={{
                  headerTintColor: primary,
                }}
                name="Welcome"
                component={Welcome}
              />
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
};

export default RootStack;
