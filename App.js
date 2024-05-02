import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Operation from './src/components/operation';
import Home from './src/components/home';
import AnswerButtons from './src/components/answerButtons';
import PointsContainer from './src/components/pointsContainer';
const Stack = createStackNavigator();
function App() {

  return (


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Operation" component={Operation} options={{ headerShown: false }} />
        <Stack.Screen name="Points" component={PointsContainer} options={{ headerShown: false }} />
        <Stack.Screen name="AnswerButtons" component={AnswerButtons} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;