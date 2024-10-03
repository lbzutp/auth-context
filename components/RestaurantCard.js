import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import { SafeAreaView } from 'react-native-safe-area-context';

const RestaurantCard = ({ image, name, stars, description, category }) => {
  // Function to render stars based on rating
  const renderStars = (stars) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      starsArray.push(
        <FontAwesome
          key={i}
          name={i <= stars ? 'star' : 'star-o'}
          size={16}
          color="#f1c40f"  // Yellow for stars
        />
      );
    }
    return starsArray;
  };

  return (
    <SafeAreaView>
        <View style={styles.card}>
      {/* Image at the top */}
      <Image source={image} style={styles.image} />

      {/* Restaurant Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>

        {/* Star rating */}
        <View style={styles.starsContainer}>
          {renderStars(stars)}
        </View>

        {/* Description */}
        <Text style={styles.description}>{description}</Text>

        {/* Restaurant Category */}
        <Text style={styles.category}>{category}</Text>
      </View>
    </View>
    </SafeAreaView>

  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,  // Adds shadow on Android
  },
  image: {
    width: '100%',
    height: 150,  // Adjust the height as needed
  },
  infoContainer: {
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  category: {
    fontSize: 12,
    color: '#1abc9c',  // Teal for category
    fontWeight: 'bold',
  },
});
