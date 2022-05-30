import * as React from 'react';
import { Image, ImageBackground } from 'react-native';
import bgimage from "../assets/background.png";
import logo from "../assets/logo.png";
import styles from "./styles";

const Loading = () => {
  return (
    <ImageBackground source={bgimage} resizeMode="cover" style={[styles.background, { alignItems: 'center', justifyContent: 'center' }]}>
      <Image source={logo} style={styles.logo} />
    </ImageBackground>
  )
}

export default Loading