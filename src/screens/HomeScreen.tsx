import * as React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import SearchBar from '../components/HomeScreen/SearchBar.tsx';
import {useState} from 'react';
import useResults from '../hooks/useResults.ts';
import ResultsList from '../components/HomeScreen/ResultsList.tsx';

const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price = '$') => {
    return results.filter(result => result.price === price);
  };

  return (
    <View style={styles.screen}>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSearch={() => searchApi(query)}
      />
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$$')}
          title={'Cost Effective'}
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title={'Bit Pricier'}
        />
        <ResultsList
          results={filterResultsByPrice('$$$$')}
          title={'Big Spender'}
        />
        {errorMessage && <Text>{errorMessage}</Text>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 10,
  },
});

export default HomeScreen;
