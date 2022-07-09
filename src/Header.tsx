import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import currency_logo from "../assets/ETH.png";
import notificationIcon from "../assets/icons/Notification.png";
import profile from "../assets/profile.jpg";
import styles from "./styles";

const Header = ({ navigation }) => {
  var amount = 10.34
  return (
    <View style={[styles.margins, styles.header, styles.flex_row]}>
      <View style={[styles.header_amount, styles.flex_row]}>
        <View style={styles.header_logo_circle}>
          <Image style={styles.header_logo} source={currency_logo} />
        </View>
        <Text style={styles.header_amount_text}>{amount} ETH</Text>
      </View>
      <View style={{ flex: 1 }} />
      <TouchableOpacity style={styles.header_notification} onPress={() => navigation.navigate("Notifications")}>
        <Image source={notificationIcon} style={styles.fit_contain} />
      </TouchableOpacity>
      <Image style={styles.header_profile} source={profile} />
    </View>
  )
}

export default Header