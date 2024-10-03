import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FavoriteRestaurant = ({ image, name }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default FavoriteRestaurant;

const styles = StyleSheet.create({
  card: {
    width: 120,  // Smaller card width
    marginRight: 15,  // Adds space between cards in horizontal scroll
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,  // Adds shadow on Android
  },
  image: {
    width: '100%',
    height: 80,  // Smaller image height
  },
  name: {
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
