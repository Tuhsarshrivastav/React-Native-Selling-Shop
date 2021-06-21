import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = async () => {
    if (!email || !password) {
      alert('Please enter All the fields');
      return;
    }
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      console.log(result.user);
    } catch (error) {
      alert('something wet wrong please try differnt password or email');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={{paddingVertical: 30, justifyContent: 'center'}}>
      <View style={styles.box1}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.box2}>
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Password"
          value={password}
          mode="outlined"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          style={{marginTop: 15}}
        />
        <Button
          onPress={() => userLogin()}
          style={{marginTop: 15}}
          mode="contained">
          Login
        </Button>
        <TouchableOpacity style={{marginTop: 15}}>
          <Text
            style={{textAlign: 'center'}}
            onPress={() => navigation.navigate('signup')}>
            Dont have an Account ?
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  box1: {
    alignItems: 'center',
  },
  box2: {
    paddingHorizontal: 40,
    height: '50%',
  },
  text: {
    fontSize: 22,
    paddingVertical: 20,
  },
});
export default LoginScreen;
