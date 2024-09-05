//nico
import { NavigationContainer } from '@react-navigation/native'; // Import for navigation
import { createStackNavigator } from '@react-navigation/stack'; // Import for stack navigation
import React from 'react';
import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Stack = createStackNavigator(); // Create a stack navigator

// Home screen component
const HomeScreen = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Login')}>
      <ImageBackground
        source={require('./assets/cat1.png')}  // Background image for the home screen
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.text}>Click anywhere to continue</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

// Login screen component
const LoginScreen = () => {
  // Function to handle the login button press
  const handleLoginPress = () => {
    console.log('Button pressed'); // Log to the terminal when the button is pressed
    Alert.alert('Login Button Pressed'); // Show an alert (you can remove this if you only want the console log)
  };

  return (
    <ImageBackground
      source={require('./assets/cattotail.png')} // Background image for the login screen
      style={styles.loginBackground} // Apply styles for background
      resizeMode="cover"
    >
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Welcome, Pawple!</Text>

        {/* Username input field */}
        <TextInput
          style={styles.inputuser}
          placeholder="hello@gmail.com"
          placeholderTextColor="#a1a1a1"
        />

        {/* Password input field */}
        <TextInput
          style={styles.inputpass}
          placeholder="Password"
          placeholderTextColor="#a1a1a1"
          secureTextEntry={true} // Hides the password
        />

        {/* Forgot Password link */}
        <TouchableOpacity onPress={() => Alert.alert('Forgot Password Pressed')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button with console log */}
        <TouchableOpacity
        style={styles.loginButton}  // Apply the custom styles for the button (changed)
        onPress={handleLoginPress}  // Handle button press 
        >
        <Text style={styles.loginButtonText}>LOGIN</Text> 
        </TouchableOpacity> 

        {/* Sign Up Button */}
        <TouchableOpacity onPress={() => Alert.alert('Sign Up Button Pressed')}>
          <Text style={styles.signUp}>Don't have an account? Sign up here</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
//nico

//ami to the end 
// Main App component with navigation
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Stylesheet to define various styles used in the app
const styles = StyleSheet.create({
  container: { 
    flex: 1, //fullscreen
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end', // Positions the text at the bottom of the screen
    alignItems: 'center', // Centers the text horizontally
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#7d6236',
    fontSize: 15,
    marginBottom: 50,

  },
  loginBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  loginContainer: {
    width: '90%',
    padding: 20,
    boderRdaius: 10,
    marginTop: 50,
  },
  loginText:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7d6236',
    marginBottom: 10,
    marginTop: 100,
    textAlign: 'center', // text itself is centered
    alignSelf: 'center', // Centers the text horizontally within its parent
  },
  inputuser:{
    width: '100%',
    padding: 12,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    color: '#000',
  },
  inputpass:{
    width: '100%',
    padding: 12,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    color: '#000',
  },
  forgotPassword:{
    fontSize: 12,
    marginLeft: 2,
  },
  loginButton: {
    backgroundColor: '#a3c68c', 
    padding: 10,               
    borderRadius: 10,           
    alignItems: 'center',      
    marginTop: 30,
    marginBottom: 10,
    width: '40%',
    alignSelf: 'center',
    shadowColor: '#000', // Color of the shadow
    shadowOffset: { width: 0, height: 2 }, // Offset of the shadow
    shadowOpacity: 0.4, // Opacity of the shadow
    shadowRadius: 3,  // How blurred the shadow is
  },
  signUp:{
    fontSize: 12,
    alignSelf: 'center',
    marginTop: 5,
    color: 'black',
  }

});

export default App;