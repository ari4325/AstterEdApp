import * as React from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import profile from '../assets/Avatar.png';
import chatIcon from '../assets/icons/Chat.png';
import closeIcon from '../assets/icons/Close.png';
import heartIcon from '../assets/icons/Heart.png';
import emojiIcon from '../assets/icons/Emoji.png';
import heartRedIcon from '../assets/icons/HeartRed.png';
import verifiedIcon from '../assets/icons/Verified.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';
import profile5 from '../assets/profile5.png';
import styles from './styles';

const CommentsContainer = ({route, navigation}) => {
  const { id, comments } = route.params
  var data = [
    { name: "tadeubonini", profile: profile3, isVerified: true, isAuthor: true, time: "1 day ago", content: "Hey! Check out this", likes: 12, responses: 45, isLiked: false },
    { name: "pedrogadelha", profile: profile4, isVerified: false, isAuthor: false, time: "1 day ago", content: "Flipping the cassette while reading/examining the fold-out cover 😁", likes: 1, responses: 2, isLiked: false },
    { name: "alexandreestolano", profile: profile5, isVerified: false, isAuthor: false, time: "3 day ago", content: "No wonder they say that you need to be able to leave in time. The clearest examples of this are Lam and Alonso", likes: 5, responses: 0, isLiked: false },
    { name: "annaclaramm", profile: profile, isVerified: false, isAuthor: false, time: "5 day ago", content: "This is how Neo sees the world", likes: 7, responses: 0, isLiked: false },
  ]

  return (
    <View style={styles.comments_container}>
      <View style={[styles.flex_row, styles.comments_header]}>
        <Text style={[styles.boldtext, { color: 'black' }]}>{comments} comments</Text>
        <TouchableOpacity onPress={()=>{navigation.pop()}}>
          <Image source={closeIcon} style={styles.comments_close_icon} />
        </TouchableOpacity>
      </View>
      <FlatList data={data}
        renderItem={
          ({ item }) => <Comment {...item}
          />}
      />
      <View style={styles.flex_row} >
        <Image source={profile} style={styles.comment_input_profile} />
        <TextInput style={styles.comment_input} placeholder="Add a comment" placeholderTextColor="#A2A2A2" />
        <TouchableOpacity>
          <Image source={emojiIcon} style={styles.emoji_icon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Comment = (props) => {
  const [isLiked, setliked] = React.useState(props.isLiked)
  const [showResponce, setShowResponce] = React.useState(false)
  var data = [
    { name: "tadeubonini", profile: profile3, isVerified: true, isAuthor: true, time: "1 day ago", content: "Hey! Check out this", },
    { name: "pedrogadelha", profile: profile4, isVerified: false, isAuthor: false, time: "1 day ago", content: "Flipping the cassette while reading/examining the fold-out cover 😁", },
  ]
  return (
    <View style={styles.comment}>
      <Image source={props.profile} style={styles.comments_profile} />
      <View style={{ flexShrink: 1}}>
        <View style={styles.flex_row}>
          <Text style={styles.comment_name}>@{props.name}</Text>
          {props.isVerified && <Image source={verifiedIcon} style={styles.verified_icon} />}
          {props.isAuthor && <Text style={[styles.comment_name, { color: '#E31837' }]} > · Author</Text>}
          <Text style={styles.comment_extras} >· {props.time}</Text>
        </View>
        <Text style={styles.comment_content}>{props.content}</Text>
        <View style={styles.flex_row}>
          <TouchableOpacity style={styles.flex_row} onPress={() => { setliked(!isLiked) }}>
            <Image source={isLiked ? heartRedIcon : heartIcon} style={[styles.comment_icon, (!isLiked) && styles.comment_icon_color]} />
            <Text style={styles.comment_extras}>{props.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flex_row} onPress={() => { setShowResponce(!showResponce) }}>
            <Image source={chatIcon} style={[styles.comment_icon, styles.comment_icon_color]} />
            <Text style={styles.comment_extras}>{props.likes}</Text>
          </TouchableOpacity>
        </View>
        {showResponce && <FlatList data={data}
        renderItem={
          ({ item }) => <Responce {...item} />}
      />}
      </View>
    </View>
  )
}

const Responce = (props) => {
  return (
    <View style={styles.comment}>
      <Image source={props.profile} style={styles.comments_profile} />
      <View style={{ flexShrink: 1}}>
        <View style={styles.flex_row}>
          <Text style={styles.comment_name}>@{props.name}</Text>
          {props.isVerified && <Image source={verifiedIcon} style={styles.verified_icon} />}
          {props.isAuthor && <Text style={[styles.comment_name, { color: '#E31837' }]} > · Author</Text>}
          <Text style={styles.comment_extras} >· {props.time}</Text>
        </View>
        <Text style={styles.comment_content}>{props.content}</Text>
      </View>
    </View>
  )
}

export default CommentsContainer