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

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignup = async () => {
    if (!email || !password) {
      alert('Please enter All the fields');
      return;
    }
    try {
      const result = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
    } catch (error) {
      alert('something wet wrong please try differnt password or email');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={{paddingVertical: 20, justifyContent: 'center'}}>
      <View style={styles.box1}>
        <Text style={styles.text}>Signup</Text>
      </View>
      <View style={styles.box2}>
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          onChangeText={text => setEmail(text)}
          style={{marginTop: 15}}
        />
        <TextInput
          label="Password"
          value={password}
          mode="outlined"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          style={{marginTop: 15}}
        />
        <TouchableOpacity>
          <Button
            onPress={() => userSignup()}
            style={{marginTop: 15}}
            mode="contained">
            Signup
          </Button>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 15}}
          onPress={() => navigation.navigate('login')}>
          <Text style={{textAlign: 'center'}}>Already Have an account?</Text>
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
    paddingVertical: 10,
  },
});
export default SignupScreen;
