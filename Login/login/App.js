import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Petbook</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbe2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: '20px',
    color: '#7d6236',
    fontWeight:'bold',
    fontFamily: 'Poppins',
  }
});
