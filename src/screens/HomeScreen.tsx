import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchBar from '../components/HomeScreen/SearchBar.tsx';
import {useState} from 'react';
import useResults from '../hooks/useResults.ts';

const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View style={styles.screen}>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSearch={() => searchApi(query)}
      />
      <Text>We have found {results.length} results</Text>
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default HomeScreen;
