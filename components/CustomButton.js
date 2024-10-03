import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, StyleSheet, Pressable, Platform } from 'react-native';
import { colors } from '../styles/styles';
// Import the local image from the assets folder
const backgroundImage = require('../assets/Welcome.jpeg');

const WelcomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with:", email, password);
    navigation.navigate('MainTabs');  // Navigate to the main tabs
  };

  return (
    <ImageBackground 
      source={backgroundImage} 
      style={styles.background}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}  
    >
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the App</Text>
        <Text style={styles.subtitle}>Please log in to continue</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#e67e22"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#e67e22"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        {/* Login Button */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  backgroundImage: {
    opacity: 0.2,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.primary,  // Keep bright orange as primary color
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#e67e22',  // Orange for subtitle
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#e67e22',  // Orange border
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    color: 'white',  // White text for inputs
    backgroundColor: 'rgba(255, 255, 255, 0.1)',  // Light translucent background
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    backgroundColor: '#1abc9c',  // Teal for the button
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  iosButton: {
    borderRadius: 25,
  },
  androidButton: {
    borderRadius: 0,
  },
  buttonPressed: {
    backgroundColor: '#16a085',  // Darker teal when pressed
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
