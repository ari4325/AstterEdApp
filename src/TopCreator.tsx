import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import currency_logo from "../assets/ETH.png";
import profile2 from "../assets/profile2.jpg";
import styles from "./styles";

const TopCreator = () => {
  return (
    <View >
      <View style={[styles.flex_row, styles.margins, { justifyContent: 'space-between' }]}>
        <Text style={styles.boldtext}>Top Creator</Text>
        <TouchableOpacity>
          <Text>View all</Text>
        </TouchableOpacity>
      </View>
      <Creator rank={1} profile={profile2} name={'anikadonin'} balance={20543.09} change={50.87} />
    </View>
  )
}

const Creator = (props) => {

  const Change = () => {
    if (props.change > 0) {
      return <Text style={{ color: '#2ECC71' }}>+{props.change}%</Text>
    }
    else if (props.change < 0) {
      return <Text style={{ color: '#FF4040' }}>{props.change}%</Text>
    }
    else {
      return <Text>{props.change}%</Text>
    }
  }
  function numFormat(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  return (
    <View style={[styles.flex_row, styles.margins, styles.creator_box, { justifyContent: 'space-between' }]}>
      <View style={[styles.flex_row]}>
        <Text style={styles.creator_margin}>#{props.rank}</Text>
        <Image style={[styles.creator_profile, styles.creator_margin]} source={props.profile} />
        <View style={styles.creator_margin}>
          <Text style={styles.boldtext}> {props.name}</Text>
          <View style={styles.flex_row}>
            <Image style={styles.creator_logo} source={currency_logo} />
            <Text>{numFormat(props.balance)} ETH</Text>
          </View>
        </View>
      </View>
      <Change />
    </View>
  )
}

export default TopCreator