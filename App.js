import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/Screens/SplashScreen';
import HomeScreen from './src/Screens/HomeScreen';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Security_functionality from './src/Screens/Security_functionality';
import Device_binding from './src/Screens/Device_binding';
import Mpin from './src/Screens/Mpin';
import Tpin from './src/Screens/Tpin';
import Login_screen from './src/Screens/Login_screen';

export default function App() {
  const [isActive, SetActive] = useState(true);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const timer = setTimeout(() => {
      SetActive(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isActive ? <SplashScreen /> : <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Security_functionality" options={{ headerShown: false }} component={Security_functionality} />
          <Stack.Screen name="Device_binding" component={Device_binding} options={{ headerShown: false }}/>
          <Stack.Screen name="mpin" component={Mpin} options={{ headerShown: false }}/>
          <Stack.Screen name="tpin" component={Tpin} options={{ headerShown: false }}/>
          <Stack.Screen name="login_page" component={Login_screen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>}

      
      
    </>
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
