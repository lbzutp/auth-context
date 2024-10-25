// Import Axios

import axios from 'axios';

BACKEND_URL = 'https://utp-login-default-rtdb.firebaseio.com/';

const getRestaurants = async () => {
    const response = await axios.get(`${BACKEND_URL}` + 'restaurants.json');

    const restaurants = [];

    for (const key in response.data) {
        const restaurant = {
            id: key,
            category: response.data[key].category,
            contactInfo: response.data[key].contactInfo,
            description: response.data[key].description,
            location: response.data[key].location,
            name: response.data[key].name,
            schedule: response.data[key].schedule,
            stars: response.data[key].stars,
        };
        restaurants.push(restaurant);
    }  
    console.log('Fetched restaurants...')
    return restaurants;
};

const getRestaurantById = async (id) => {
    
    const response = await axios.get(`${BACKEND_URL}` + `/restaurants/${id}.json`);

    const restaurant = {
        id: id,
        category: response.data.category,
        contactInfo: response.data.contactInfo,
        description: response.data.description,
        location: response.data.location,
        name: response.data.name,
        schedule: response.data.schedule,
        stars: response.data.stars,
    };

    return restaurant;
};

export { getRestaurants, getRestaurantById };
