import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/Signup';
import CreateAdScreen from './screens/CreateAdScreen';
import ListItemsScreen from './screens/ListItemsScreen';
import AcountScreen from './screens/AcountScreen';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'deepskyblue',
  },
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'create') {
            iconName = 'plus-circle';
          } else if (route.name === 'account') {
            iconName = 'user';
          }
          // You can return any component that you like here!
          return (
            <View style={{marginTop: 5}}>
              <Feather name={iconName} size={30} color={color} />
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={ListItemsScreen}
        options={{title: ''}}
      />
      <Tab.Screen
        name="create"
        component={CreateAdScreen}
        options={{title: ''}}
      />
      <Tab.Screen
        name="account"
        component={AcountScreen}
        options={{title: ''}}
      />
    </Tab.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const [user, setUser] = useState('');
  useEffect(() => {
    auth().onAuthStateChanged(userExist => {
      if (userExist) {
        setUser(userExist);
      } else {
        setUser('');
      }
    });
  }, []);
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="blue" />
        <Navigation />
      </PaperProvider>
    </>
  );
};
export default App;
