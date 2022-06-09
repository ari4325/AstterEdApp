import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, TransitionSpecs } from '@react-navigation/native-stack';
import type { Node } from 'react';
import * as React from 'react';
import TabView from './src/TabView'
import CommentsContainer from './src/Comments';
import Login from './src/Login'
const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  var loggedIn = false 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={loggedIn?'TabView':'Login'} screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabView" component={TabView} />
        <Stack.Screen name="Comments" component={CommentsContainer} options={{
          presentation: 'transparentModal', 
          animation: 'slide_from_bottom'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
