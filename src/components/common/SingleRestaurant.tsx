import * as React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';

interface ISingleRestaurant {
  restaurant: any;
}

const SingleRestaurant = ({restaurant: r}: ISingleRestaurant) => (
  <View style={styles.singleRestaurantStyles}>
    <View style={styles.imageContainer}>
      <Image source={{uri: r.image_url}} style={styles.imageStyle} />
    </View>
    <Text style={styles.rName}>{r.name}</Text>
    <Text>
      {r.rating} Stars, {r.review_count} reviews
    </Text>
  </View>
);

const styles = StyleSheet.create({
  singleRestaurantStyles: {
    marginLeft: 15,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imageContainer: {},
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
  rName: {
    fontWeight: 'bold',
  },
});

export default SingleRestaurant;
