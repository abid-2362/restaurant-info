import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import SingleRestaurant from '../common/SingleRestaurant.tsx';

interface IResultsListProps {
  title: string;
  results: any[];
}

const ResultsList = ({title, results}: IResultsListProps) => (
  <View style={styles.container}>
    <View style={styles.headerTextContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.ml}>{results.length} restaurants</Text>
    </View>
    <FlatList
      data={results}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={result => result.id}
      renderItem={({item}) => <SingleRestaurant restaurant={item} />}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  headerTextContainer: {
    marginBottom: 10,
  },
  ml: {
    marginLeft: 15,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});

export default ResultsList;
