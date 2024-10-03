# Ejemplo de Uso de Contexto con Firebase para Login en React Native

Este es un ejemplo básico de cómo implementar autenticación en una aplicación de React Native usando Firebase y Context API.

## Configuración de Firebase

Antes de ejecutar el código, debes seguir los siguientes pasos para configurar Firebase:

1. **Crear una cuenta en Firebase**.
2. **Crear un proyecto** en la consola de Firebase.
3. Ir a la sección de **Autenticación** y habilitar el método de autenticación con **correo electrónico**.
4. Crear una cuenta básica de prueba, por ejemplo:
   - **Email:** a@a.com
   - **Password:** 123456
   > Nota: Firebase no permite contraseñas con menos de 6 caracteres.
5. Extraer el **API key** de tu proyecto y agregarlo a tu código.

### ⚠️ Importante:
- **Nunca subas la API key al repositorio**. Existen bots que buscan claves API con intenciones maliciosas, lo que podría poner en riesgo tus recursos. Usa herramientas como variables de entorno para manejar esta clave de manera segura.

## Archivos Importantes

A continuación, te indico los archivos clave que debes revisar para entender y modificar este ejemplo:

1. `context/auth-context.js` - Aquí se maneja la lógica del contexto de autenticación.
2. `App.js` - Configuración principal de la aplicación y la integración del contexto.
3. `Screens/WelcomeScreen.js` - Pantalla de bienvenida que consume el contexto de autenticación.
4. `utils/auth.js` - Archivo donde se implementa la lógica de autenticación con Firebase.

> **Recomendación:** Sigue el orden anterior para revisar los archivos.

## Tareas Pendientes

1. Implementar la función de **logout** que aún está pendiente en el código.
2. Mostrar el **correo** o **ID del usuario** en la sección de **Perfil**, que ya deberías tener en tu proyecto.

## Instrucciones Adicionales

Recuerda que este es un **guía de referencia**. Puedes implementar las funcionalidades que desees y ajustar el código según las necesidades de tu proyecto. Si tienes dudas o necesitas más ayuda, no dudes en preguntar.

¡Éxitos con la implementación!
