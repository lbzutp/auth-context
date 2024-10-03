import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const RestaurantDetailsScreen = ({ route, navigation }) => {
  // Access the restaurant details passed via navigation
  const { image, name, description, category, stars, location, contactInfo, schedule } = route.params;

  // State to track if restaurant is favorited
  const [isFavorited, setIsFavorited] = useState(false);

  // Toggle favorite status
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  // Set the header button using useLayoutEffect
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FontAwesome
          name={isFavorited ? 'star' : 'star-o'}  // Toggle between filled and outlined star
          size={24}
          color={isFavorited ? '#f1c40f' : '#ccc'}  // Yellow when favorited, grey when unfavorited
          onPress={toggleFavorite}  // Toggle favorite status
          style={{ marginRight: 15 }}  // Add some right margin
        />
      ),
    });
  }, [navigation, isFavorited]);

  return (
    <View style={styles.container}>
      {/* Restaurant Image */}
      <Image source={image} style={styles.image} />

      {/* Restaurant Name */}
      <Text style={styles.name}>{name}</Text>

      {/* Star Rating */}
      <View style={styles.starsContainer}>
        {Array.from({ length: 5 }).map((_, i) => (
          <FontAwesome
            key={i}
            name={i < stars ? 'star' : 'star-o'}
            size={16}
            color="#f1c40f"
          />
        ))}
      </View>

      {/* Category */}
      <Text style={styles.category}>{category}</Text>

      {/* Description */}
      <Text style={styles.description}>{description}</Text>

      {/* Additional Information */}
      <View style={styles.additionalInfo}>
        <Text style={styles.infoTitle}>Location:</Text>
        <Text style={styles.infoText}>{location}</Text>

        <Text style={styles.infoTitle}>Contact Information:</Text>
        <Text style={styles.infoText}>{contactInfo}</Text>

        <Text style={styles.infoTitle}>Schedule:</Text>
        <Text style={styles.infoText}>{schedule}</Text>
      </View>
    </View>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f6f6',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1abc9c',
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e67e22',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  additionalInfo: {
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
});
