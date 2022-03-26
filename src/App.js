import React from 'react';
import Home from './pages/Home';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Schedule from './pages/Schedule';
import Order from './pages/Order';
import Cancel from './pages/Cancellation';
import DummyOrder from './pages/DummyOrder';
import DummyCancel from './pages/DummyCancel';
import Others from './pages/Others';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initalRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Cancel" component={Cancel} />
        <Stack.Screen name="DummyOrder" component={DummyOrder} />
        <Stack.Screen name="DummyCancel" component={DummyCancel} />
        <Stack.Screen name="Others" component={Others} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
