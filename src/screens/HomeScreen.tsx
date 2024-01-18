import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchBar from '../components/HomeScreen/SearchBar.tsx';
const HomeScreen = () => (
  <View style={styles.screen}>
    <SearchBar />
    <Text>Home Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default HomeScreen;
