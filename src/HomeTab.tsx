import * as React from 'react';
import { ImageBackground, View } from 'react-native';
import bgimage from "../assets/background.png";
import Artwork from './Artwork';
import Header from './Header';
import Search from './Search';
import styles from "./styles";
import TopCreator from './TopCreator';

const Home = () => {
  return (
    <ImageBackground source={bgimage} resizeMode="cover" style={[styles.background]}>
      <Header />
      <View style={styles.scrollview} fadingEdgeLength={50}>
        <Search />
        <Artwork />
        <TopCreator />
      </View>
    </ImageBackground>
  )
}

export default Home
