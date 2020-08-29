import React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';

import Home from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    // <NavigationContainer>
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
