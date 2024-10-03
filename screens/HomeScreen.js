import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import { restaurants } from '../utils/Restaurants-data';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {restaurants.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('RestaurantDetails', {
              image: restaurant.image,
              name: restaurant.name,
              description: restaurant.description,
              category: restaurant.category,
              stars: restaurant.stars,
              location: restaurant.location,       // Pass location
              contactInfo: restaurant.contactInfo, // Pass contact info
              schedule: restaurant.schedule,       // Pass schedule
            })
          }
        >
          <RestaurantCard
            image={restaurant.image}
            name={restaurant.name}
            stars={restaurant.stars}
            description={restaurant.description}
            category={restaurant.category}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f4f6f6',  // Light grey background
  },
});
