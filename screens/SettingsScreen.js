import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <ImageBackground 
      source={require('../assets/comingSoon.jpeg')}  // Add the image you created to the assets folder
      style={styles.background}
      imageStyle={styles.backgroundImage}  // Apply blur/dimming effect
    >
      <View style={styles.overlay}>  
        {/* "Coming Soon" Text */}
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Coming Soon</Text>

        {/* Optional description or message */}
        <Text style={styles.message}>
          We're currently working on new features. Stay tuned for more updates!
        </Text>
      </View>
    </ImageBackground>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',  // Dark background color
  },
  backgroundImage: {
    opacity: 0.3,  // Dims the background image to create a blur-like effect
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 00)',  // Slight overlay to enhance text contrast
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1abc9c',  // Teal for the title
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#e67e22',  // Bright Orange for the subtitle
    marginBottom: 20,
  },
  message: {
    fontSize: 14,
    color: '#e67e22',   // Bright Orange for the subtitle
    textAlign: 'center',
  },
});
