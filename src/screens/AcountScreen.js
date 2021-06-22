import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native-paper';

const AcountScreen = () => {
  return (
    <View style={{alignItems: 'center', height: '100%',justifyContent:'center'}}>
      <Text style={{fontSize: 22}}>{auth().currentUser.email}</Text>
      <Button
        onPress={() => auth().signOut()}
        style={{marginTop: 15}}
        mode="contained">
        Logout
      </Button>
    </View>
  );
};

export default AcountScreen;
