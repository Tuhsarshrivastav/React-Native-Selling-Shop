//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
// create a component
const ListItemsScreen = () => {
  const items = [
    {
      name: 'R1',
      year: '2020',
      phone: '123456789',
      image:
        'https://news.maxabout.com/wp-content/uploads/2019/07/2020-Yamaha-R1-Blue.jpg',
      desc: 'world 1st crossplain engine bike',
    },
  ];

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
          <Button>200</Button>
          <Button>Call seller</Button>
        </Card.Actions>
      </Card>
    );
  };
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item.phone}
        renderItem={({item}) => renderItem(item)}
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
