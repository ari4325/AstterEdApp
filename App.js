import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { Node } from 'react';
import * as React from 'react';
import CommentsContainer from './src/Comments';
import { Login, LoginBirthday, LoginIntrests, LoginName, LoginProfile, LoginTimeChoice } from './src/Login';
import Notifications from './src/Notifications';
import PostContent from './src/PostContent';
import TabView from './src/TabView';
const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  var loggedIn = true
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={loggedIn ? 'TabView' : 'Login'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginProfile" component={LoginProfile} />
        <Stack.Screen name="LoginName" component={LoginName} />
        <Stack.Screen name="LoginBirthday" component={LoginBirthday} />
        <Stack.Screen name="LoginIntrests" component={LoginIntrests} />
        <Stack.Screen name="LoginTimeChoice" component={LoginTimeChoice} />
        <Stack.Screen name="TabView" component={TabView} />
        <Stack.Screen name='PostContent' component={PostContent} />
        <Stack.Screen name='Notifications' component={Notifications} />
        <Stack.Screen name="Comments" component={CommentsContainer} options={{
          presentation: 'transparentModal',
          animation: 'slide_from_bottom'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
