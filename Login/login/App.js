// Nico
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Create a Stack navigator by initializing one
const Stack = createStackNavigator();

// HomeScreen component
const HomeScreen = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Login')}>
      <ImageBackground
        source={require('./assets/catface.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.text}>Click anywhere to continue</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

// LoginScreen component
const LoginScreen = ({navigation}) => {
  const handleLoginPress = () => {
    console.log('Login Button Pressed');
  
  };

  return (
    <ImageBackground
      source={require('./assets/catt3.jpg')}
      style={styles.loginBackground}
      resizeMode="cover"
    >
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Welcome, Pawple!</Text>

        {/* USERNAME INPUT HERE */}
        <TextInput
          style={[styles.input, { color: 'black' }]} // Correct color styling
          placeholder="Username"
          placeholderTextColor="#ccc"
        />

        {/* PASSWORD INPUT HERE */}
        <TextInput
          style={[styles.input, { color: 'black' }]} // Correct color styling
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry={true}
        />

        {/* Forgot Password here */}
        <TouchableOpacity onPress={() => console.log('Forgot Password Pressed')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button here */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLoginPress}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Sign Up Button here */}
        <TouchableOpacity onPress={() => navigation.navigate('Register') }>
          <Text style={styles.signUp}>Don't have an account? Sign Up here!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

// RegisterScreen component
const RegisterScreen = ({navigation}) => {
  const handleRegPress = () => {
    console.log('Register Button Pressed');
  };

  return (
    <ImageBackground 
      style={styles.regBackground}
      source={require('./assets/bgpbook.jpg')}
      resizeMode='cover'
    >
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Let's get Started!</Text>

        {/* Email INPUT HERE */}
        <TextInput
          style={[styles.input, { color: 'black' }]} // Correct color styling
          placeholder="Email"
          placeholderTextColor="#ccc"
        />
         {/* Username HERE */}
        <TextInput
          style={[styles.input, { color: 'black' }]} // Correct color styling
          placeholder="Username"
          placeholderTextColor="#ccc"
        />

        {/* PASSWORD INPUT HERE */}
        <TextInput
          style={[styles.input, { color: 'black' }]} // Correct color styling
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry={true}
        />
         {/* CONFIRM PASSWORD INPUT HERE */}
        <TextInput
          style={[styles.input, { color: 'black' }]} // Correct color styling
          placeholder="Confirm Password"
          placeholderTextColor="#ccc"
          secureTextEntry={true}
        />
      </View>
    </ImageBackground>
  );
};

    
  


//Ami
// App component with Stack Navigator
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Stylesheet 

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#7d6236',
    fontSize: 15,
    marginBottom: 50,
  },
  regBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    borderRadius: 10,
    marginTop: 50,
  },
  loginText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#7d6236',
    marginBottom: 10,
    marginTop: 100,
    textAlign: 'center', 
    alignSelf: 'center', 
  },
  input: { 
    width: '100%',
    padding: 12,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    color: '#000',
  },
  forgotPassword: {
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
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.4, 
    shadowRadius: 3, 
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,  
    fontWeight: 'bold', 
  },
  signUp: {
    fontSize: 12,
    alignSelf: 'center',
    marginTop: 5,
    color: 'black',
  }
});

export default App;
