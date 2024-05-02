import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Operation from './operation';

const Stack = createStackNavigator();
function Routing () {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Operation" component={Operation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routing;