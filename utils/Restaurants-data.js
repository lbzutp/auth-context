// utils/Restaurants-data.js

export const restaurants = [
  {
    image: require('../assets/bistro.png'),
    name: 'Bistro Delight',
    stars: 4,
    description: 'A delightful bistro with an emphasis on seasonal ingredients.',
    category: 'French',
    location: '123 Rue de Paris, Paris, France',
    contactInfo: 'Phone: +33 1 23 45 67 89, Email: contact@bistrodelight.com',
    schedule: 'Mon-Sat: 9:00 AM - 10:00 PM, Sun: Closed',
  },
  {
    image: require('../assets/sushi.png'),
    name: 'The Sushi Bar',
    stars: 5,
    description: 'A premium sushi bar offering the freshest catch of the day.',
    category: 'Japanese',
    location: '456 Tokyo Avenue, Tokyo, Japan',
    contactInfo: 'Phone: +81 3 1234 5678, Email: info@sushibar.jp',
    schedule: 'Daily: 11:00 AM - 11:00 PM',
  },
  {
    image: require('../assets/grill.png'),
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
