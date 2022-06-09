import * as React from 'react';
import { Animated, Easing, FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import connectIcon from '../assets/connect_icon.png';
import walletIcon from '../assets/icons/Wallet.png';
import bgimage from "../assets/Login_bg.png";
import image from '../assets/Login_image.png';
import logo from '../assets/logo.png';
import styles from './styles';

const Login = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const anim = React.useRef(new Animated.Value(1)).current;

  //Animation while navigating to home
  const navigate = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 300,
      easing: Easing.easeOut,
      useNativeDriver: true
    }).start(() => navigation.replace('TabView'));
  }
  const position = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [-150, 0]
  });
  const scale = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1]
  });
  return (
    <View style={styles.login_background} >
      <Image source={bgimage} style={styles.login_bg} />
      <Animated.Image source={logo} style={[styles.login_logo, {
        transform: [
          { translateY: position },
          { scale: scale }
        ]
      }]} />
      <Animated.View style={{ flex: 1, width: '100%', alignItems: 'center', opacity: anim }}>
        <Image source={image} style={styles.login_image} />
        <TouchableOpacity style={styles.login_button_position} onPress={() => { setModalVisible(true) }}>
          <LinearGradient colors={styles.login_button_gradient} style={styles.login_button_border}>
            <View style={[styles.login_button, styles.flex_row]} >
              <Image source={walletIcon} style={styles.login_wallet_icon} />
              <Text style={styles.boldtext}>Crypto Wallet Login</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType='slide'
          onRequestClose={() => {
            setModalVisible(false)
          }}
        >
          <Animated.View style={{ justifyContent: 'center', backgroundColor: '#00000055', flex: 1, opacity: anim }}>
            <ConnectOverlay navigate={navigate} />
          </Animated.View>
        </Modal>
      </Animated.View>
    </View>
  )
}

const ConnectOverlay = ({ navigate }) => {
  var data = [
    { key: 0, name: "Word", icon: connectIcon },
    { key: 1, name: "Word", icon: connectIcon },
    { key: 2, name: "Word", icon: connectIcon },
    { key: 3, name: "Word", icon: connectIcon },
    { key: 4, name: "Word", icon: connectIcon },
    { key: 5, name: "Word", icon: connectIcon },
    { key: 6, name: "Word", icon: connectIcon },
    { key: 7, name: "Word", icon: connectIcon },
    { key: 8, name: "Word", icon: connectIcon },
    { key: 9, name: "Word", icon: connectIcon },
    { key: 10, name: "Word", icon: connectIcon },
    { key: 11, name: "Word", icon: connectIcon },
    { key: 12, name: "Word", icon: connectIcon },
    { key: 13, name: "Word", icon: connectIcon },
    { key: 14, name: "Word", icon: connectIcon },
    { key: 15, name: "Word", icon: connectIcon },
    { key: 16, name: "Word", icon: connectIcon },
    { key: 17, name: "Word", icon: connectIcon },
    { key: 18, name: "Word", icon: connectIcon },
    { key: 19, name: "Word", icon: connectIcon },
  ]
  const [selected, setSelected] = React.useState(Array(data.length).fill(false))

  return (
    <View style={styles.connect_overlay}>
      <FlatList
        style={styles.connect_list}
        numColumns={4}
        data={data}
        keyExtractor={item => item.key}
        extra
        renderItem={({ item }) => <TouchableOpacity style={[styles.connect_item, selected[item.key] && styles.connect_item_selected]} onPress={() => {
          var newselected = [...selected]
          newselected[item.key] = !newselected[item.key]
          setSelected(newselected)
        }}>
          <Image source={item.icon} style={styles.connect_icon} />
          <Text style={styles.connect_text}>{item.name}</Text>
        </TouchableOpacity>} />
      <TouchableOpacity onPress={() => { navigate() }}>
        <LinearGradient colors={styles.login_button_gradient} style={styles.login_button_border}>
          <View style={styles.connect_button} >
            <Text style={styles.boldtext}>Select App</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

export default Login