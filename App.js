//App.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// react navigation stack
import RootStack from './navigators/RootStack';

//appLoading
import AppLoading from 'expo-app-loading';

//async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

//credentials context
import { CredentialContext } from './components/CredentialsContext';

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState('');

  const checkLoginCredentials = () => {
    AsyncStorage.getItem('FlowerCribCredentials')
      .then((result) => {
        if (result !== null) {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }
      })
      .catch((error) => console.log(error));
  };

  if (!appReady) {
    return <AppLoading startAsync={checkLoginCredentials} onFinish={() => setAppReady(true)} onError={console.warn} />;
  }

  return (
    <CredentialContext.Provider value={{ storedCredentials, setStoredCredentials }}>
      <RootStack />
    </CredentialContext.Provider>
  );
}
