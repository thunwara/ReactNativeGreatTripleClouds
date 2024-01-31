import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// screens
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import AttractionListPage from './screens/AttractionListPage';

// react navigation stack
import RootStack from './navigators/RootStack';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text>hello world</Text>
    //   <StatusBar style="auto" />
    // </View>
    <AttractionListPage />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });