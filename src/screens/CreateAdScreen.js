//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
// create a component
const CreateAdScreen = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');
  const postData = async () => {
    if (!name || !desc || !year || !price || !phone) {
      alert('Please enter All the fields');
      return;
    }
    try {
      await firestore().collection('ads').add({
        name,
        desc,
        year,
        price,
        phone,
        image:
          'https://news.maxabout.com/wp-content/uploads/2019/07/2020-Yamaha-R1-Blue.jpg',
        uid: auth().currentUser.uid,
      });
      alert('Posted Successfully');
      setName('');
      setDesc('');
      setYear('');
      setPrice('');
      setPhone('');
    } catch (error) {
      alert('something went wrong.try agian');
    }
  };
  const openCamera = async () => {
    try {
      await launchImageLibrary({quality: 0.5}, fileobj => {
        const uploadTask = storage()
          .ref()
          .child(`/items/?${Date.now()}`)
          .putFile(fileobj.uri);
        uploadTask.on(
          'state_changed',
          snapshot => {
            var progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (progress == 100) {
              alert('uploaded');
            }
          },
          error => {
            alert('something went wrong');
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              setImage(downloadURL);
            });
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
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
      <Button onPress={() => openCamera()} icon="camera" mode="contained">
        Upload Image
      </Button>
      <Button
        disabled={image ? false : true}
        onPress={() => postData()}
        mode="contained">
        Post
      </Button>
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
