import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/Signup';
import CreateAdScreen from './screens/CreateAdScreen';
import ListItemsScreen from './screens/ListItemsScreen';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'deepskyblue',
  },
};
const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="blue" />
        {/* <LoginScreen /> */}
        {/* <SignupScreen/> */}
        {/* <CreateAdScreen/> */}
        <ListItemsScreen />
      </PaperProvider>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
export default App;
