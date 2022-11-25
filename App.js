import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomePage';
import DetailPage from './screens/detail/DetailPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="detail" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
