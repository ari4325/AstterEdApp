import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image, ImageBackground, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import bgimage from "../assets/background.png";
import badge from "../assets/Badge.png";
import backIcon from "../assets/icons/Back.png";
import nextIcon from "../assets/icons/Next.png";
import searchIcon from "../assets/icons/Search.png";
import profilePhoto from "../assets/profile.jpg";
import profileEllipse from "../assets/ProfileEllipse.png";
import rank1 from "../assets/Rank01.png";
import styles from './styles';

const Profile = () => {
  const tabBarHeight = useBottomTabBarHeight() - 10;
  return (
    <ImageBackground source={bgimage} resizeMode="cover" style={[styles.background, { marginBottom: tabBarHeight, paddingBottom: 10}]}>
      <ProfileHeader />
      <ScrollView>
        <ProfileDetails />
        <ProfileControls />
      </ScrollView>
    </ImageBackground>
  )
}

const ProfileHeader =()=>{
  return (
    <View style={[styles.profile_header, styles.flex_row]}>
      <TouchableOpacity>
        <Image source={backIcon} style={styles.back_icon} />
      </TouchableOpacity>
      <Text style={styles.profile_header_text}>Profile</Text>
      <View flex={1} />
      <View style={[styles.profile_search, styles.flex_row]}>
        <TextInput style={styles.profile_search_text} />
        <TouchableOpacity>
          <Image source={searchIcon} style={styles.profile_search_icon}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const ProfileDetails = () => {
  return (
    <>
      <View style={[styles.flex_row, styles.margins]} >
        <View style={styles.profile_name}>
          <View style={styles.profile_ellipse}>
            <Image source={profilePhoto} style={styles.profile_photo} />
            <Image source={profileEllipse} style={[styles.fit, {resizeMode: 'contain'}]} />
          </View>
          <Text style={[styles.profile_firstname, styles.profile_color]}>Benjamin</Text>
          <Text style={styles.profile_lastname}>Tennyson</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.profile_details}>
          <Text style={[styles.profile_text, styles.profile_details_margins]}>Joined 6 months ago</Text>
          <View style={[styles.profile_group, styles.profile_details_margins, styles.flex_row]}>
            <Image source={rank1} style={styles.profile_rank} />
            <Text style={styles.boldtext}>Rank 01</Text>
          </View>
          <View style={[styles.flex_row, styles.profile_details_margins, { justifyContent: 'space-between' }]}>
            <Text style={styles.profile_text} >Badges</Text>
            <TouchableOpacity>
              <Text style={[styles.profile_text, styles.profile_color]} >View All</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.flex_row, styles.profile_details_margins, {width: '100%', justifyContent: 'space-between'}]}>
            <Image source={badge} style={styles.profile_badge} />
            <Image source={badge} style={styles.profile_badge} />
            <Image source={badge} style={styles.profile_badge} />
            <Image source={badge} style={styles.profile_badge} />
          </View>
        </View>
      </View>
      <View style={[styles.flex_row, styles.profile_group, styles.margins, styles.profile_details_bar]}>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={[styles.profile_color, styles.profile_text_small]}>Friends</Text>
          <Text style={[styles.profile_color, styles.profile_text_large]}>40</Text>
        </View>
        <View style={styles.separator} />
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={[styles.profile_color, styles.profile_text_small]}>Badges Accuired</Text>
          <Text style={[styles.profile_color, styles.profile_text_large]}>03/21</Text>
        </View>
        <View style={styles.separator} />
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={[styles.profile_color, styles.profile_text_small]}>XPs Gained</Text>
          <Text style={[styles.profile_color, styles.profile_text_large]}>224</Text>
        </View>
      </View>
    </>
  )
}

const ProfileControls = () => {
  const [notification, setNotification] = React.useState(true);
  const [autoPlay, setAutoPlay] = React.useState(false);
  const ControlButton = ({text, value=""}) => {
    return (
      <TouchableOpacity style={styles.profile_controls} >
        <Text style={styles.profile_controls_text}>{text}</Text>
        <Text style={styles.profile_controls_value}>{value}</Text>
        <Image source={nextIcon} style={styles.profile_controls_button}/>
      </TouchableOpacity>
    )
  }
  const ControlSwitch = ({text, value, change}) => {
    return (
      <TouchableOpacity style={styles.profile_controls} onPress={change}>
        <Text style={styles.profile_controls_text}>{text}</Text>
        <Switch value={value} onValueChange={change}
        trackColor={styles.profile_switch_track}
        thumbColor={styles.profile_switch_thumb}
        ios_backgroundColor="#3e3e3e"/>
      </TouchableOpacity>
    )
  }
  return (
    <>
      <View style={[styles.profile_group, styles.margins]}>
        <ControlButton text="Change Plan"/>
      </View>
      <View style={[styles.profile_group, styles.margins]}>
        <ControlSwitch text="Notifications" value={notification} change={()=>{setNotification(!notification)}}/>
        <ControlButton text="Change Password"/>
        <ControlButton text="Video Resolution" value='HD'/>
        <ControlButton text="Languages" value='English'/>
        <ControlButton text="Downloads"/>
        <ControlSwitch text="Autoplay" value={autoPlay} change={()=>{setAutoPlay(!autoPlay)}}/>
        <ControlButton text="Your Interests"/>
      </View>
    </>
  )
}

export default Profile