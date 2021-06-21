import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={{paddingVertical: 30, justifyContent: 'center'}}>
      <View style={styles.box1}>
        <Text style={styles.text}>Please Login To Continue!</Text>
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
        <Button style={{marginTop: 15}} mode="contained">
          Login
        </Button>
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
