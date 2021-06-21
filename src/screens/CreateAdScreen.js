//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

// create a component
const CreateAdScreen = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Ad</Text>
      <TextInput
        label="Ad Title"
        value={name}
        mode="outlined"
        onChangeText={text => setName(text)}
      />
      <TextInput
        label="Describe what you are selling"
        value={desc}
        mode="outlined"
        numberOfLines={3}
        multiline={true}
        onChangeText={text => setDesc(text)}
      />
      <TextInput
        label="Year of purchase"
        value={year}
        mode="outlined"
        keyboardType="numeric"
        onChangeText={text => setYear(text)}
      />
      <TextInput
        label="Price in INR"
        value={price}
        mode="outlined"
        keyboardType="numeric"
        onChangeText={text => setPrice(text)}
      />
      <TextInput
        label="Your contact Number"
        value={phone}
        mode="outlined"
        keyboardType="numeric"
        onChangeText={text => setPhone(text)}
      />
      <Button icon="camera" mode="contained">
        Upload Image
      </Button>
      <Button mode="contained">Post</Button>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
  },
});

//make this component available to the app
export default CreateAdScreen;
