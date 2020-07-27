import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Colors } from '../utils/colors';

const Home = () => {
  const text = 'My Home';
  return (
    <View style={styles.container}>
      {/* <Text style={styles}>{text}</Text> */}
      <View style={styles.view1} />
      <View style={styles.view2} />
      <View style={styles.view3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.dark,
  },
  view1: {
    height: 100,
    width: 100,
    borderRadius: 6,
    backgroundColor: Colors.red,
  },
  view2: {
    height: 100,
    width: 100,
    backgroundColor: Colors.blue,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 10,
  },
  view3: {
    height: 100,
    width: 100,
    backgroundColor: Colors.green,
  },
});

export default Home;
