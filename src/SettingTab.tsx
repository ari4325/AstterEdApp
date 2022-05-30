import * as React from 'react';
import { ImageBackground, Text } from 'react-native';
import bgimage from "../assets/background.png";
import styles from './styles';

const Setting = () => {
  return (
    <ImageBackground source={bgimage} resizeMode="cover" style={[styles.background]}>
      <Text>Setting</Text>
    </ImageBackground>
  )
}

export default Setting