import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import { useNavigation } from '@react-navigation/native';
import { getRestaurants } from '../utils/db';

const HomeScreen =  () => {
  const navigation = useNavigation();
  const [fetchedRestaurants, setFetchedRestaurants] = useState([]); // aqui se guardan los restaurantes
  const [loading, setLoading] = useState(true); // Estado de carga

  // use efect se usa ya que el pedido a la base de datos es asincronico
  // y se necesita esperar a que se termine de cargar para poder mostrar los datos
  // por eso se usa el useEffect
  // NO INTENTEN VOLVER EL HomeScreen UN COMPONENTE ASYNCRONO. ROMPE EL CODIGO
  useEffect(() => {
    async function fetchRestaurants() { // <-- llamar como quieran
      const restaurants = await getRestaurants();
      setFetchedRestaurants(restaurants);
      setLoading(false);
    }
    fetchRestaurants(); // <-- llamar como quieran
  }, []);

  // Una pantalla de carga mientras se cargan los datos
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading restaurants...</Text>
      </View>
    );
  }

  // Renderizar la lista de restaurantes
  return (
    <ScrollView style={styles.container}>
      {fetchedRestaurants.length === 0 ? (
        <Text>No restaurants available</Text> // No hay restaurantes disponibles
      ) : (
        fetchedRestaurants.map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('RestaurantDetails', {
                //image: restaurant.image,  // comente la imagen por simplicidad
                name: restaurant.name,
                description: restaurant.description,
                category: restaurant.category,
                stars: restaurant.stars,
                location: restaurant.location,       // Pass location
                contactInfo: restaurant.contactInfo, // Pass contact info
                schedule: restaurant.schedule,       // Pass schedule
                id: restaurant.id,
              })
            }
          >
            <RestaurantCard
              //image={restaurant.image}
              name={restaurant.name}
              stars={restaurant.stars}
              description={restaurant.description}
              category={restaurant.category}
            />
          </TouchableOpacity>
        ))
      )}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
