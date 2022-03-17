import React from 'react';
import Home from './pages/Home';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Schedule from './pages/Schedule';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <View style={{flex: 1}}>
    //   <Home />
    // </View>
    <NavigationContainer>
      <Stack.Navigator
        initalRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Schedule" component={Schedule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
