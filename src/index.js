import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>REACT NATIVE</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
