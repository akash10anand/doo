import React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';

import Home from './src/screens/home';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
