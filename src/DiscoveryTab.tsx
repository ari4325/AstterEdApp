import * as React from 'react';
import { ImageBackground, Text } from 'react-native';
import bgimage from "../assets/background.png";
import styles from './styles';

const Discovery = () => {
  return (
    <ImageBackground source={bgimage} resizeMode="cover" style={[styles.background]}>
      <Text>Discovery</Text>
    </ImageBackground>
  )
}

export default Discovery