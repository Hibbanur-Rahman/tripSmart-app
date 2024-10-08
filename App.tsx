/**
 * TripSmart App
 * React Native Project
 *
 * @format
 */

import React from 'react';
import {enableScreens} from 'react-native-screens';

enableScreens();
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/home'; 
import Account from './src/screens/account';
import Trip from './src/screens/trip';
import tw from 'twrnc'; // Tailwind styles
import BottomNavbar from './src/components/bottomNavbar';

// Define the types for the navigation stack
export type RootStackParamList = {
  Home: undefined;
  Account:undefined;
  Trip:undefined;
};

// Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={tw`flex-1`}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}} // Hide header for the Home screen
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{headerShown: false}} // Hide header for the Home screen
          />
          <Stack.Screen
            name="Trip"
            component={Trip}
            options={{headerShown: false}} // Hide header for the Home screen
          />
        </Stack.Navigator>
        <BottomNavbar />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // Add styles here if needed later
});

export default App;
