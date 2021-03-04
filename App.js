import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Customer from './src/screens/Customer';
import WorkList from './src/screens/WorkList';
import Home from './src/screens/Home';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="WorkHistory" component={WorkList} />
    
        <Stack.Screen name="Customer" component={Customer} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;