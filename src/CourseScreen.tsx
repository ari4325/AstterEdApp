import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Animated, Easing, Image, ScrollView, SectionList, Text, TouchableOpacity, View } from 'react-native';
import Video from 'react-native-video';
import backIcon from "../assets/icons/Back.png";
import commentIcon from '../assets/icons/Comment.png';
import contentIcon from '../assets/icons/Content.png';
import downloadIcon from '../assets/icons/Download.png';
import heartIcon from '../assets/icons/Heart.png';
import heartRedIcon from '../assets/icons/HeartRed.png';
import profile from "../assets/profile.jpg";
import styles from "./styles";

const CourseScreen = ({ navigation }) => {
  const [showContent, setShowContent] = React.useState(false)

  const anim = React.useRef(new Animated.Value(1)).current;

  const position = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [showContent ? 20 : -20, 0]
  });

  const toggleShowContent = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 150,
      easing: Easing.easeIn,
      useNativeDriver: true
    }).start(() => {
      setShowContent(!showContent)
      Animated.timing(anim, {
        toValue: 1,
        duration: 150,
        easing: Easing.easeOut,
        useNativeDriver: true
      }).start();
    }
    )
  }
  
  const tabBarHeight = useBottomTabBarHeight() - 10;
  return (
    <View style={[styles.course_background, { marginBottom: tabBarHeight, paddingBottom: 10 }]}>
      <View style={[styles.course_header, styles.flex_row]}>
        <TouchableOpacity onPress={() => { showContent ? toggleShowContent() : navigation.pop() }}>
          <Image source={backIcon} style={styles.back_icon} />
        </TouchableOpacity>
      </View>
      <Video
        source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" }}
        style={styles.course_video}
        controls={true}
        resizeMode="contain"
      />
      <Animated.View
        style={{ flex: 1, opacity: anim, transform: [{ translateY: position }], overflow: 'hidden' }}
      >
        {showContent ? <CourseContent toggleShowContent={toggleShowContent} showContent={showContent} /> :
          <CourseMain toggleShowContent={toggleShowContent} showContent={showContent} />}
      </Animated.View>
    </View>
  )
}

const CourseMain = ({ toggleShowContent, showContent }) => {
  return (
    <ScrollView>
      <View style={[styles.margins, { justifyContent: 'space-between' }]}>
        <View>
          <Text style={styles.course_topic_number}>Topic 07 in 24</Text>
          <Text style={[styles.boldtext, styles.course_topic_name]}>Compomnents & Variants in Figma</Text>
          <Text style={styles.white_text}>Course  •  Beginner  •  2 hrs 30 Mins</Text>
        </View>
      </View>
      <InteractionBottons liked={false} toggleShowContent={toggleShowContent} showContent={showContent} />
      <View style={styles.margins}>
        <Text style={styles.boldtext}>Course Overview</Text>
        <Text style={styles.course_overview_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas porta sed blandit vitae, fusce risus leo felis. Eleifend molestie consequat nisl urna eget egestas velit. Sollicitudin in facilisis nisl nullam proin. Et porttitor urna odio pharetra sit amet commodo. Dolor dolor, adipiscing ut urna. Non interdum malesuada orci, tristique mauris diam aliquet. Aliquet odio netus lectus commodo.</Text>
      </View>
      <View style={[styles.margins, { alignItems: 'flex-start' }]}>
        <Text style={styles.boldtext}>Instructor</Text>
        <View style={[styles.flex_row, styles.course_instructor]}>
          <Image style={styles.course_instructor_profile} source={profile} />
          <Text style={[styles.white_text, styles.course_instructor_name]}>Ted Mosby</Text>
        </View>
      </View>
      <View style={styles.margins}>
        <View style={[styles.flex_row, { justifyContent: 'space-between' }]}>
          <Text style={styles.boldtext}>Next Topics</Text>
          <TouchableOpacity onPress={toggleShowContent}>
            <Text style={{ color: 'yellow' }}>See All</Text>
          </TouchableOpacity>
        </View>
        {[{ name: 'Topic 08 - Getting Started' },
        { name: 'Topic 09 - Getting Started' },
        { name: 'Topic 10 - Getting Started' }].map((item, index) => {
          return (
            <CourseTopic name={item.name} key={index} />
          )
        })}
      </View>
    </ScrollView>
  )
}

const CourseContent = ({ toggleShowContent, showContent }) => {
  var data = [
    {
      title: 'Unit 01',
      data: [
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
      ]
    },
    {
      title: 'Unit 02',
      data: [
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
      ]
    },
    {
      title: 'Unit 03',
      data: [
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
        'Topic 01 - Getting Started',
      ]
    }
  ]
  return (
    <>
      <InteractionBottons liked={false} toggleShowContent={toggleShowContent} showContent={showContent} />
      <SectionList
        style={styles.margins}
        ListHeaderComponent={<Text style={styles.boldtext}>Course Topics</Text>} scrollEnabled={true}
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <CourseTopic name={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={[styles.boldtext, styles.course_unit]}>{title}</Text>
        )}
      />
    </>
  )
}

const InteractionBottons = ({ liked, toggleShowContent, showContent }) => {
  const [isLiked, setLiked] = React.useState(liked)

  return (
    <View style={[styles.margins, styles.flex_row]}>
      <TouchableOpacity onPress={() => { setLiked(!isLiked) }}>
        <Image source={isLiked ? heartRedIcon : heartIcon} style={[styles.course_interaction_icons, isLiked && styles.course_liked_button]} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={commentIcon} style={styles.course_interaction_icons} />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleShowContent}>
        <Image source={contentIcon} style={[styles.course_interaction_icons, showContent && styles.course_content_button]} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={downloadIcon} style={styles.course_interaction_icons} />
      </TouchableOpacity>
    </View>
  )
}

const CourseTopic = (props) => {
  return (
    <View style={styles.course_topic} >
      <Text style={styles.white_text}>{props.name}</Text>
    </View>
  )
}

export default CourseScreen