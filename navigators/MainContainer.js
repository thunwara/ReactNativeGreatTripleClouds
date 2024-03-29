import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingScreen';
import AttractionListScreen from '../screens/AttractionListScreen';

//Screen names
const homeName = 'Home';
const detailsName = 'Details';
const settingsName = 'Settings';
const attractionList = 'Attractions';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (rn == attractionList) {
              iconName = focused ? 'list' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { paddingVertical: 10, paddingHorizontal: 20, height: 70 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen
          name={attractionList}
          component={AttractionListScreen}
          options={{ headerTitle: 'Custom Header Title' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
