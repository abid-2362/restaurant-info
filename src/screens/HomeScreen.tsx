import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchBar from '../components/HomeScreen/SearchBar.tsx';
import {useState} from 'react';
const HomeScreen = () => {
  const [query, setQuery] = useState('');
  return (
    <View style={styles.screen}>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSearch={() => console.log(`search the restaurant: ${query}`)}
      />
      <Text>{query}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default HomeScreen;
