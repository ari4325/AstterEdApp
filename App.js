import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, TransitionSpecs } from '@react-navigation/native-stack';
import type { Node } from 'react';
import * as React from 'react';
import TabView from './src/TabView'
import Loading from './src/Loading'
import CommentsContainer from './src/Comments';
const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TabView' screenOptions={{headerShown:false}}>
        <Stack.Screen name="TabView" component={TabView} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Comments" component={CommentsContainer} options={{
          presentation: 'transparentModal', 
          animation: 'slide_from_bottom'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
