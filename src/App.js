import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LoginScreen from './screens/LoginScreen';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="blue" />
      <LoginScreen />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
export default App;
