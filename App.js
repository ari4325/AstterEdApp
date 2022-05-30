import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { Node } from 'react';
import * as React from 'react';
import TabView from './src/TabView'
import Loading from './src/Loading'
const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TabView' screenOptions={{headerShown:false}}>
        <Stack.Screen name="TabView" component={TabView} />
        <Stack.Screen name="Loading" component={Loading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
