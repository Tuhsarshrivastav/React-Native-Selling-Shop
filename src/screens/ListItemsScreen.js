//import liraries
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Linking, Platform} from 'react-native';
import {Button, Card, Paragraph} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

// create a component
const ListItemsScreen = () => {
  const [Myitems, SetItems] = useState([]);

  const openDial = phone => {
    if (Platform.OS === 'android') {
      Linking.openURL(`tel:${phone}`);
    } else {
      Linking.openURL(`telprompt:{phone}`);
    }
  };
  const getDetails = async () => {
    try {
      const querry = await firestore().collection('ads').get();
      const result = querry.docs.map(docSnap => docSnap.data());
      SetItems(result);
    } catch (error) {}
  };

  useEffect(() => {
    getDetails();
    return () => {
      console.log('cleanUp');
    };
  }, []);

  const renderItem = item => {
    return (
      <Card style={styles.card}>
        <Card.Title title={item.name} />
        <Card.Content>
          <Paragraph>{item.desc}</Paragraph>
          <Paragraph>{item.year}</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: item.image}} />
        <Card.Actions>
          <Button>{item.price}</Button>
          <Button onPress={() => openDial()}>Call seller</Button>
        </Card.Actions>
      </Card>
    );
  };
  return (
    <View>
      <FlatList
        data={Myitems}
        keyExtractor={item => item.phone}
        renderItem={({item}) => renderItem(item)}
        inverted
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  card: {
    margin: 10,
    elevation: 2,
  },
});

//make this component available to the app
export default ListItemsScreen;
