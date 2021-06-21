import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView behavior="position" style={{paddingVertical: 20 ,justifyContent:'center'}}>
      <View style={styles.box1}>
        <Text style={styles.text}>Please Signup To Continue!</Text>
      </View>
      <View style={styles.box2}>
        <TextInput
          label="Name"
          value={name}
          mode="outlined"
          onChangeText={text => setName(text)}
        />
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          secureTextEntry={true}
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
        <Button style={{marginTop: 15}} mode="contained">
          Signup
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
    paddingVertical: 10,
  },
});
export default SignupScreen;
