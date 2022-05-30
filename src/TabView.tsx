import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image } from 'react-native';
import collectionIcon from '../assets/icons/Collection.png';
import discoveryIcon from '../assets/icons/Discovery.png';
import homeIcon from '../assets/icons/Home.png';
import settingIcon from '../assets/icons/Setting.png';
import Collection from './CollectionTab';
import Discovery from './DiscoveryTab';
import Home from "./HomeTab";
import Setting from './SettingTab';
import styles from './styles';

const Tab = createBottomTabNavigator();

const TabView = () => {

  const icon = ({ focused, color, size }, name) => {
    const icons = new Map([
      ['Home', homeIcon],
      ['Discovery', discoveryIcon],
      ['Collection', collectionIcon],
      ['Setting', settingIcon]
    ])
    return (
      <Image source={icons.get(name)} style={[{ tintColor: color }, styles.tab_icon]} />
    )
  }
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabbar, tabBarActiveTintColor: 'white' }}>
      <Tab.Screen name='Home' component={Home} options={{ tabBarIcon: (info) => icon(info, "Home") }} />
      <Tab.Screen name='Discovery' component={Discovery} options={{ tabBarIcon: (info) => icon(info, "Discovery") }} />
      <Tab.Screen name='Collection' component={Collection} options={{ tabBarIcon: (info) => icon(info, "Collection") }} />
      <Tab.Screen name='Setting' component={Setting} options={{ tabBarIcon: (info) => icon(info, "Setting") }} />
    </Tab.Navigator>
  )
}

export default TabView
