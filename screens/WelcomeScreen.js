import React, { useContext, useState } from 'react';
import { View, Text, TextInput, ImageBackground, StyleSheet, Pressable, Platform, Alert } from 'react-native';
import { login } from '../utils/auth'; // Importar la utilidad de autenticación
import { AuthContext } from '../context/auth-context'; // importamos el contexto de autenticacion
import { colors } from '../styles/styles';
const backgroundImage = require('../assets/Welcome.jpeg');

const WelcomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authCtx = useContext(AuthContext); // Usar el contexto de autenticación. con esta linea carga el contexto de autenticacion

  //funcion para manejar el login
  //aqui se llega cuando se oprime el boton de login
  async function handleLogin() {
    // validamos que exista un email y un password en los inputs
    if (!email || !password) {
      // si no hay email o password mostramos un alerta
      Alert.alert('Error', 'Please enter both email and password', [{ text: 'OK' }]);
      return;
    }

    try {
      const token = await login(email, password); // llamamos la utilidad de autenticacion
      // si esta autenticacion tiene exito devuelve un token. El que devuelve esto es firebase
      //el cual le pasamos al contexto

      authCtx.login(token); // el token se pasa al contexto de autenticacion y lo cargamos con la funcion de login
      // (por dentro de un setAuthToken(token))

      navigation.navigate('MainTabs'); //si todo sale bien navegamos a la pantalla de MainTabs
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
    }
  }

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
          onPress={handleLogin}  // cuando se oprime el boton se llama a la funcion handleLogin
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
    color: colors.primary,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#e67e22',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#e67e22',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    backgroundColor: '#1abc9c',
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
    backgroundColor: '#16a085',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
