import * as React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import SingleRestaurant from '../common/SingleRestaurant.tsx';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeParamList} from '../../types';

interface IResultsListProps {
  title: string;
  results: any[];
}

const ResultsList = ({title, results}: IResultsListProps) => {
  const navigation: NavigationProp<HomeParamList> = useNavigation();

  if (!results.length) return null;

  return (
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
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', {id: item.id})}>
            <SingleRestaurant restaurant={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

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
