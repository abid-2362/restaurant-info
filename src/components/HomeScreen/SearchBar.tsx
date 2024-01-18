import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => (
  <View style={styles.background}>
    <Text>Search Bar</Text>
    <Text>
      <AntDesign name={'search1'} style={{color: 'red', fontSize: 50}} />
    </Text>
  </View>
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    // borderWidth: 1,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default SearchBar;
