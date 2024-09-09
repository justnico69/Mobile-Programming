// Nico
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Create a Stack navigator by initializing one
const Stack = createStackNavigator();

// HomeScreen component
const HomeScreen = ({ navigation }) => {
  
  useEffect(() => {
    // Set a 2-second timer to navigate to LoginScreen automatically
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]); // Empty dependency array to run only on mount

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/cat1.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.text}>Loading, please wait...</Text>
      </ImageBackground>
    </View>
  );
};

// LoginScreen component
const LoginScreen = ({navigation}) => {
  const handleLoginPress = () => {
    console.log('Login Button Pressed');
  
  };

  return (
    <ImageBackground
      source={require('./assets/cattotail.png')}
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
        <View style={styles.row}>
          <Text style={styles.loginaccount}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.login}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
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
      source={require('./assets/register.png')}
      resizeMode='cover'
    >
      <View style={styles.regContainer}>
        <Text style={styles.regText}>Let's get Started!</Text>

        {/* Email INPUT HERE */}
        <TextInput
          style={[styles.inputreg, { color: 'black' }]} // Correct color styling
          placeholder="Email"
          placeholderTextColor="#ccc"
        />
         {/* Username HERE */}
        <TextInput
          style={[styles.inputreg, { color: 'black' }]} // Correct color styling
          placeholder="Username"
          placeholderTextColor="#ccc"
        />

        {/* PASSWORD INPUT HERE */}
        <TextInput
          style={[styles.inputreg, { color: 'black' }]} // Correct color styling
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry={true}
        />
         {/* CONFIRM PASSWORD INPUT HERE */}
         <TextInput
          style={[styles.inputreg, { color: 'black' }]} // Correct color styling
          placeholder="Confirm Password"
          placeholderTextColor="#ccc"
          secureTextEntry={true}
        />
        {/* CREATE ACCOUNT BUTTON */}
         <TouchableOpacity style={styles.regButton} onPress={() => console.log('Create button pressed')}>
          <Text style={styles.regButtonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>

        {/* ALREADY HAVE AN ACCOUNT */}
        <View style={styles.row}>
          <Text style={styles.regaccount}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.reglogin}>Login here!</Text>
          </TouchableOpacity>
        </View>

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
  loginText: { //Pawpple
    fontFamily: 'Helvetica Neue',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#7d6236',
    marginBottom: 6,
    marginTop: 170,
    textAlign: 'center', 
    alignSelf: 'center', 
  },
  input: { 
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',  
    marginTop: '4%',
    marginBottom: 1,
    width: '105%',
    alignSelf: 'center',
    borderColor: "#ccc",   
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  forgotPassword: {
    fontSize: 13,
    marginTop: '3%',
    marginLeft: 1,
  },
  loginButton: {
    backgroundColor: '#a3c68c', 
    padding: '5%',               
    borderRadius: 10,           
    alignItems: 'center',      
    marginTop: '25%',
    marginBottom: 10,
    width: '105%',
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
 loginaccount: {
    fontSize: 14,
    alignSelf: 'center',
    marginTop: '10%',
    marginLeft: 19,
    color: 'black',
  },
  login: {
    fontSize: 14,
    alignSelf: 'center',
    marginTop: '35%',
    color: 'blue',
  },

  //REGISTRATION
  regContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
  },
  regText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7d6236',
    marginTop: '10%',
    marginBottom: '8%',
    textAlign: 'center', 
    alignSelf: 'center', 
  },
  inputreg: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',  
    marginTop: 16,
    marginBottom: 1,
    width: '113%',
    alignSelf: 'center',
    borderColor: "#ccc",   
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  regButton:{
    backgroundColor: '#a3c68c', 
    padding: '5%',               
    borderRadius: 10,           
    alignItems: 'center',      
    marginTop: '35%',
    marginBottom: 10,
    width: '113%',
    alignSelf: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.4, 
    shadowRadius: 3, 
    elevation: 5,

  },
  regButtonText:{
    color: '#fff',
    fontSize: 16,  
    fontWeight: 'bold', 
  },
  row: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Vertically center the text
  },
  regaccount: {
    fontSize: 14,
    alignSelf: 'center',
    marginTop: '10%',
    marginLeft: 20,
    color: 'black',
  },
  reglogin: {
    fontSize: 14,
    alignSelf: 'center',
    marginTop: '41%',
    color: 'blue',
  },


});

export default App;