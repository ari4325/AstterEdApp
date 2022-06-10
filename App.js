import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { Node } from 'react';
import * as React from 'react';
import CommentsContainer from './src/Comments';
import Login from './src/Login';
import PostContent from './src/PostContent';
import TabView from './src/TabView';
const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  var loggedIn = false
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={loggedIn ? 'TabView' : 'Login'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabView" component={TabView} />
        <Stack.Screen name='PostContent' component={PostContent} />
        <Stack.Screen name="Comments" component={CommentsContainer} options={{
          presentation: 'transparentModal',
          animation: 'slide_from_bottom'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
