import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import FavoriteRestaurant from '../components/Favoriterestaurant';  // Import the new FavouriteRestaurant component
import { restaurants } from '../utils/Restaurants-data';  // Use restaurant data from Restaurants-data.js
import { SafeAreaView } from 'react-native-safe-area-context';

const profilePic = require('../assets/profile.png')

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Info */}
      <SafeAreaView>
        <View style={styles.profileInfo}>
          <Image 
            source={profilePic}  // Replace with actual profile image
            style={styles.profileImage}
          />
          <Text style={styles.name}>Anton Ego</Text>
          <Text style={styles.bio}>Anton Ego is a feared food critic known for his harsh reviews and high standards. Despite his stern persona, he discovers the joy of simple, heartfelt cooking.</Text>
        </View>

        {/* Favorite Restaurants Section */}
        <Text style={styles.sectionTitle}>Favorite Restaurants</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {restaurants.slice(0, 2).map((restaurant, index) => (
            <FavoriteRestaurant 
              key={index} 
              image={restaurant.image} 
              name={restaurant.name} 
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f4f6f6',  // Light grey background
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,  // Circular profile picture
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1abc9c',  // Teal color for the name
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e67e22',  // Bright Orange for section title
    marginBottom: 10,
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
});
