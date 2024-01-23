import * as React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import useResult from '../hooks/useResult.ts';

interface IRestaurantDetailsScreenProps {}

const RestaurantDetailsScreen = ({}: IRestaurantDetailsScreenProps) => {
  const [result] = useResult();

  if (!result)
    return (
      <>
        <Text>No result Found</Text>
      </>
    );

  // const {id} = route.params;
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={{uri: result.image_url}} style={styles.image} />
      </View>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.name}>{result.name}</Text>
          <Text>
            {result.rating} stars, {result.review_count} reviews
          </Text>
          <Text>Expensive Scale: {result.price}</Text>

          <View style={styles.textContainer}>
            <Text style={styles.textBold}>Categories:</Text>
            {result.categories.map((cat: any) => (
              <Text>- {cat.title}</Text>
            ))}
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textBold}>Location Coordinates:</Text>
            <Text>Latitude: {result.coordinates.latitude}</Text>
            <Text>Longitude: {result.coordinates.longitude}</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textBold}>Transactions:</Text>
            {result.transactions.map((tr: any) => (
              <Text>- {tr}</Text>
            ))}
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textBold}>Address:</Text>
            {result.location.display_address.map((addr: any) => (
              <Text>{addr}</Text>
            ))}
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textBold}>Phone:</Text>
            <Text>{result.display_phone}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',

    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 250,
  },
  name: {
    // textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textContainer: {
    marginVertical: 5,
  },
  textBold: {
    fontWeight: 'bold',
  },
});

export default RestaurantDetailsScreen;
