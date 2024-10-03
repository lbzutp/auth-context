import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';  // Using FontAwesome5 for icons
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';  // Home icon
            } else if (route.name === 'Profile') {
              iconName = 'user';  // Profile icon
            } else if (route.name === 'Settings') {
              iconName = 'cog';  // Settings icon
            }

            // Return the appropriate icon based on the route
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1abc9c',  // Teal color for active tab
          tabBarInactiveTintColor: '#7f8c8d',  // Light grey for inactive tabs
          tabBarStyle: {
            backgroundColor: '#fdf2e9',  // Light beige for tab bar background
            borderTopColor: '#e67e22',  // Orange for tab bar border
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
  );
};

export default TabNavigator;
