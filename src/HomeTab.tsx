import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity } from 'react-native';
import bgimage from "../assets/background.png";
import Artwork from './Artwork';
import CourseScreen from './CourseScreen';
import Header from './Header';
import Search from './Search';
import styles from "./styles";
import TopCreator from './TopCreator';

const Stack = createNativeStackNavigator();
const Home = () => {
  return (
    <Stack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CourseScreen" component={CourseScreen} />
    </Stack.Navigator>
  )
}

const HomeScreen = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight() - 10;
  return (
    <ImageBackground source={bgimage} resizeMode="cover" style={[styles.background, { marginBottom: tabBarHeight }]}>
      <Header />
      <ScrollView style={styles.scrollview} fadingEdgeLength={50}>
        <Search />
        <Artwork />
        <TopCreator />
        {/* Temporary button to be removed */}
        <TouchableOpacity onPress={() => { navigation.navigate("CourseScreen") }}>
          <Text>Course</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  )
}
export default Home
