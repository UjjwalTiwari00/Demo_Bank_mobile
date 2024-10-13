import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/Screens/SplashScreen';
import HomeScreen from './src/Screens/HomeScreen';
import {useState,useEffect} from 'react'

export default function App() {
  const [isActive,SetActive]=useState(true);

  useEffect(()=>{
    setTimeout(() => {
      SetActive(false);
    }, 3000);
  },[])
  return (
    <View>
    {
      isActive?( <SplashScreen/>):(<HomeScreen/>)
    }
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
