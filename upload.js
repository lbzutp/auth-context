// Importamos axios
const axios = require('axios');

// definimos la data que queremos subir a firebase
// si quieren cambiar la data o cambiar campos lo puedenhacer facilmente
const restaurants = [
  {
    name: 'Bistro Delight',
    stars: 4,
    description: 'A delightful bistro with an emphasis on seasonal ingredients.',
    category: 'French',
    location: '123 Rue de Paris, Paris, France',
    contactInfo: 'Phone: +33 1 23 45 67 89, Email: contact@bistrodelight.com',
    schedule: 'Mon-Sat: 9:00 AM - 10:00 PM, Sun: Closed',
  },
  {
    name: 'The Sushi Bar',
    stars: 5,
    description: 'A premium sushi bar offering the freshest catch of the day.',
    category: 'Japanese',
    location: '456 Tokyo Avenue, Tokyo, Japan',
    contactInfo: 'Phone: +81 3 1234 5678, Email: info@sushibar.jp',
    schedule: 'Daily: 11:00 AM - 11:00 PM',
  },
  {
    name: 'Grill Master',
    stars: 3,
    description: 'A cozy grill spot with the best steaks in town.',
    category: 'Steakhouse',
    location: '789 BBQ Street, Austin, TX, USA',
    contactInfo: 'Phone: +1 512-987-6543, Email: contact@grillmaster.com',
    schedule: 'Mon-Fri: 12:00 PM - 10:00 PM, Sat: 1:00 PM - 11:00 PM, Sun: Closed',
  },
  // Add more restaurant objects as needed
];

// este metodo se encarga de subir la data a firebase
const uploadDataToFirebase = async () => {
  try {
    // hacemos un put a la url de firebase con la data que queremos subir
    // la data se sube en formato JSON
    // esa url esta cmpuesta por la url de la base de datos
    // y el nombre del archivo donde se va a guardar la data
    const response = await axios.put(
      'https://utp-login-default-rtdb.firebaseio.com/restaurants.json',
      restaurants
    );
    console.log('Data subida de manera exitosa:', response.data);
  } catch (error) {
    console.error('Error subiendo la data', error);
  }
};

// Llamamos el metodo para subir la data
uploadDataToFirebase();