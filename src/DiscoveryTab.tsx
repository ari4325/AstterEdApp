import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import profile from '../assets/Avatar.png';
import chatIcon from '../assets/icons/Chat.png';
import closeIcon from '../assets/icons/Close.png';
import heartIcon from '../assets/icons/Heart.png';
import heartRedIcon from '../assets/icons/HeartRed.png';
import plusIcon from '../assets/icons/Plus.png';
import searchIcon from '../assets/icons/Search.png';
import shareIcon from '../assets/icons/Share.png';
import verifiedIcon from '../assets/icons/Verified.png';
import image from '../assets/Image.png';
import image2 from '../assets/sword.png';
import styles from './styles';

const Discovery = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight() - 10;
  const data = [
    { type: "Following", name: "tadeubonini", image: image, profile: profile, likes: "143K", comments: "123K", isLiked: false, isVerified: true, isFollowing: false },
    { type: "Following", name: "namea", image: image2, profile: profile, likes: "23K", comments: "45K", isLiked: true, isVerified: false, isFollowing: true },
    { type: "Following", name: "nameb", image: image, profile: profile, likes: "67K", comments: "789K", isLiked: false, isVerified: true, isFollowing: true },
  ]
  const [height, setHeight] = React.useState()
  return (
    <FlatList style={[styles.background, { marginBottom: tabBarHeight, }]}
      data={data}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      onLayout={(event) => {
        setHeight(event.nativeEvent.layout.height)
      }}
      renderItem={
        ({ item }) => (height !== undefined) && <Shorts {...item} height={height} navigation={navigation} />}
    />
  )
}

const Shorts = (props) => {
  return (
    <View style={{ height: props.height }}>
      <Image source={props.image} style={styles.fit} />
      <ShortsHeader {...props} />
      <ShortsInteractIcons {...props} />
      <ShortsDescription {...props} />
    </View>
  )
}

const ShortsHeader = (props) => {
  return (
    <View style={[styles.flex_row, styles.shorts_header]}>
      <TouchableOpacity style={styles.shorts_close_button}>
        <Image source={closeIcon} style={styles.fit} />
      </TouchableOpacity>
      <Text style={styles.boldtext}>{props.type}</Text>
      <TouchableOpacity style={styles.shorts_search_button}>
        <Image source={searchIcon} style={[styles.fit, { tintColor: 'white' }]} />
      </TouchableOpacity>
    </View>
  )
}

const ShortsInteractIcons = (props) => {
  const [isLiked, setliked] = React.useState(props.isLiked)
  return (
    <View style={styles.shorts_icons_view}>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { setliked(!isLiked) }}>
        <Image source={isLiked ? heartRedIcon : heartIcon} style={styles.shorts_icon} />
        <Text style={styles.shorts_icons_text}>{props.likes}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { props.navigation.navigate('Comments', { id: 1, comments: props.comments }) }}>
        <Image source={chatIcon} style={styles.shorts_icon} />
        <Text style={styles.shorts_icons_text}>{props.comments}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Image source={shareIcon} style={styles.shorts_icon} />
        <Text style={styles.shorts_icons_text}>Share</Text>
      </TouchableOpacity>
    </View>
  )
}

const ShortsDescription = (props) => {
  const [isFollowing, setFollowing] = React.useState(props.isFollowing)
  return (
    <View style={[styles.flex_row, styles.shorts_description]}>
      <Image source={props.profile} style={styles.shorts_profile} />
      <View>
        <View style={styles.flex_row}>
          <Text style={styles.boldtext}>@{props.name}</Text>
          {props.isVerified && <Image source={verifiedIcon} style={styles.verified_icon} />}
          <Text style={styles.white_text}>  •  </Text>
          <TouchableOpacity onPress={() => { setFollowing(!isFollowing) }}>
            {
              isFollowing
                ? <Text style={styles.following_text}>Following</Text>
                : <Text style={styles.white_text}>Follow</Text>
            }
          </TouchableOpacity>
        </View>
        <Text>Try this</Text>
      </View>
      <View flex={1} />
      <TouchableOpacity style={styles.shorts_plus_icon} onPress={() => { props.navigation.navigate('PostContent') }}>
        <Image source={plusIcon} style={styles.fit} />
      </TouchableOpacity>
    </View>
  )
}

export default Discovery