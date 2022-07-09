import * as React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import backIcon from "../assets/icons/Back.png";
import notificationCard from "../assets/icons/NotificationCard.png";
import notificationMessage from "../assets/icons/NotificationMessage.png";
import timeIcon from "../assets/icons/Time.png";
import noNotification from "../assets/NoNotification.png";
import styles from "./styles";

const Notifications = ({ navigation }) => {
  var notifications = [
    { title: 'Successful purchase!', time: 'Just now', icon: notificationCard },
    { title: 'Congratulations on completing the  ...', time: 'Just now', icon: notificationMessage },
    { title: 'Your course has been updated, you  ...', time: 'Just now', icon: notificationMessage },
    { title: 'Congratulations, you have ...', time: 'Just now', icon: notificationMessage },
  ]
  return (
    <View style={styles.background}>
      <TouchableOpacity onPress={() => { navigation.pop() }}>
        <Image source={backIcon} style={styles.back_icon} />
      </TouchableOpacity>
      {
        (notifications.length == 0) ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={noNotification} style={styles.no_notification} />
            <Text style={styles.boldtext}>No Notifications yet!</Text>
            <Text style={styles.no_notification_text}>We’ll nofify you once we have something for you </Text>
          </View> :
          <View style={styles.margins}>
            <Text style={[styles.boldtext, styles.notification_heading]}>Notifications</Text>
            <Text style={[styles.boldtext, styles.notification_recent]} >Recent Notifications</Text>
            <View style={styles.notification_separator} />
            <FlatList
              data={notifications}
              renderItem={
                ({ item }) => <Notification {...item}
                />}
            />
          </View>
      }
    </View>
  )
}

const Notification = (props) => {
  return (
    <LinearGradient colors={styles.notification_gradient} style={styles.notification_box}>
      <View style={[styles.flex_row, { flex: 1 }]}>
        <View style={styles.notification_icon}>
          <Image style={styles.fit_contain} source={props.icon} />
        </View>
        <View>
          <Text style={styles.white_text}>{props.title}</Text>
          <View style={styles.flex_row}>
            <Image source={timeIcon} style={styles.notification_time_icon} />
            <Text style={styles.notification_time}>{props.time}</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default Notifications