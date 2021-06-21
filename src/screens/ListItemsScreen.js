//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
  return (
    <View>
      <Text>ListItemsScreen</Text>
    </View>
  );
};

// define your styles
// const styles = StyleSheet.create({

// });

//make this component available to the app
export default ListItemsScreen;
