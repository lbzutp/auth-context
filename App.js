import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import TabNavigator from "./navigation/TabNavigator";
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";
import { AuthContext } from "./context/auth-context"; // importamos el contexto
import AuthContextProvider from "./context/auth-context";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const authCtx = useContext(AuthContext);  // accedemos al contexto de autenticacion

  return ( 
    <Stack.Navigator initialRouteName={authCtx.isLoggedIn ? "MainTabs" : "Welcome"}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
        options={{ headerShown: true, title: 'Restaurant Details' }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    // Aquí se envuelve la navegación en el contexto de autenticación
    // lo separe en dos componentes para que se vea mas ordenado
    // pero pueden hacerlo en uno solo
    // el navigationContainer es el que esta primero en este archivo
    <AuthContextProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
