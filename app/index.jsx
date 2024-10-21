import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import validator from 'validator';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the home page!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
