import * as React from 'react';
import { FlatList, Image, ImageBackground, Text, View } from 'react-native';
import currency_logo from "../assets/ETH.png";
import profile2 from "../assets/profile2.jpg";
import sword1 from "../assets/sword.png";
import styles from "./styles";


const Showcase = () => {

  var data = [
    {
      name: "Sword #001",
      author: "Jaylon Saris",
      author_photo: profile2,
      image: sword1,
      time: "11 : 30m : 42s",
      price_eth: 14,
      price_dol: 25234.20
    }, {
      name: "Sword #002",
      author: "Jaylon Saris",
      author_photo: sword1,
      image: sword1,
      time: "11 : 30m : 42s",
      price_eth: 15,
      price_dol: 35234.20
    },
  ]
  return (
    <FlatList style={styles.margins}
      fadingEdgeLength={40}
      horizontal={true}
      data={data}
      renderItem={
        ({ item }) => <ShowcaseCard {...item} />}
    />
  )
}
const ShowcaseCard = (props) => {
  function numFormat(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
  return (
    <ImageBackground source={props.image} resizeMode="cover" style={[styles.showcase_card, { justifyContent: 'space-between' }]}>
      <Time style={styles.card_time} />
      <View style={styles.card_details}>
        <View style={[styles.flex_row, styles.card_margin]}>
          <Text style={styles.boldtext}>{props.name}</Text>
          <View style={{ flex: 1 }} />
          <View style={styles.card_logo_circle} >
            <Image style={styles.card_logo} source={currency_logo} />
          </View>
          <Text style={styles.boldtext}>{props.price_eth} ETH</Text>
        </View>
        <View style={styles.flex_row}>
          <Image style={styles.card_photo} source={props.author_photo} />
          <Text style={styles.card_text}>{props.author}</Text>
          <View style={{ flex: 1 }} />
          <Text style={styles.card_text}>${numFormat(props.price_dol)}</Text>
        </View>
      </View>
    </ImageBackground>
  )
}

const Time = (props) => {
  const [hh, setHours] = React.useState("0");
  const [mm, setMinutes] = React.useState("0");
  const [ss, setSeconds] = React.useState("0");

  React.useEffect(() => {
    var timerID = setInterval(() => {
      const date = new Date()
      setHours(date.getHours().toString().padStart(2, '0'))
      setMinutes(date.getMinutes().toString().padStart(2, '0'))
      setSeconds(date.getSeconds().toString().padStart(2, '0'))
    }, 1000)
    return function cleanup() {
      clearInterval(timerID);
    };
  })

  return (
    <Text style={props.style}>{hh} : {mm}m : {ss}s</Text>
  )
}

export default Showcase