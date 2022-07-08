import * as React from 'react';
import { FlatList, Image, ImageBackground, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import connectIcon from '../assets/connect_icon.png';
import backIcon from "../assets/icons/Back.png";
import userIcon from "../assets/icons/User.png";
import walletIcon from '../assets/icons/Wallet.png';
import bgimage from "../assets/Login_bg.png";
import image from '../assets/Login_image.png';
import logo from '../assets/logo.png';
import styles from './styles';

const Login = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.login_background} >
      <Image source={bgimage} style={styles.login_bg} />
      <Image source={logo} style={[styles.login_logo]} />
      <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
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
          <View style={{ justifyContent: 'center', backgroundColor: '#00000055', flex: 1 }}>
            <ConnectOverlay navigation={navigation} setVisible={setModalVisible} />
          </View>
        </Modal>
      </View>
    </View>
  )
}

const ConnectOverlay = ({ navigation, setVisible }) => {
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
      <GradientButton text="Select App" onPress={() => {
        setVisible(false)
        navigation.navigate("LoginProfile")
      }} />
    </View>
  )
}

const GradientButton = (props) => {
  return <TouchableOpacity onPress={props.onPress} style={props.style}>
    <LinearGradient colors={styles.login_button_gradient} style={styles.login_button_border}>
      <View style={styles.connect_button}>
        <Text style={[styles.boldtext, { textAlign: 'center' }]}>{props.text}</Text>
      </View>
    </LinearGradient>
  </TouchableOpacity>;
}

const LoginDetails = (props) => {
  return (
    <ImageBackground source={bgimage} resizeMode="cover" style={styles.background}>
      <TouchableOpacity onPress={() => { props.navigation.pop() }}>
        <Image source={backIcon} style={styles.back_icon} />
      </TouchableOpacity>
      <View style={[styles.login_margins, { flex: 1 }]}>
        <Text style={styles.login_bold}>{props.heading}.</Text>
        <Text style={styles.white_text}>{props.heading2}</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          {props.body}
        </View>
        <GradientButton text={props.buttonText} onPress={props.buttonPress} />
      </View>
    </ImageBackground>
  )
}

const LoginProfile = ({ navigation }) => {
  const [imageUri, setUri] = React.useState(null)
  return (
    <LoginDetails
      navigation={navigation}
      heading="Let us see you."
      heading2="Add a picture of you."
      body={<>
        <TouchableOpacity style={styles.login_profile_upload} onPress={async () => {
          const result = await launchImageLibrary({ mediaType: "photo" });
          console.log(result)
          setUri({ uri: result.assets[0].uri })
        }}>
          <Image style={(imageUri == null) ? styles.login_profile_null : styles.fit} source={(imageUri == null) ? userIcon : imageUri} />
        </TouchableOpacity>
        <Text style={styles.grey_text}>Upload Here</Text></>
      }
      buttonText="Let's Go!"
      buttonPress={() => { navigation.navigate("LoginName") }}
    />
  )
}

const LoginName = ({ navigation }) => {
  return (
    <LoginDetails
      navigation={navigation}
      heading="What about Name."
      heading2="Type your name here."
      body={
        <TextInput style={styles.login_text_input} placeholder="Your Name" placeholderTextColor="#4F4E4E" />
      }
      buttonText="Done"
      buttonPress={() => { navigation.navigate("LoginBirthday") }}
    />
  )
}

const LoginBirthday = ({ navigation }) => {
  return (
    <LoginDetails
      navigation={navigation}
      heading="When is your birthday."
      heading2="Type your Date of Birth here."
      body={
        <TextInput style={styles.login_text_input} placeholder="Your Date of Birth" placeholderTextColor="#4F4E4E" />
      }
      buttonText="Done"
      buttonPress={() => { navigation.navigate("LoginIntrests") }}
    />
  )
}

const LoginIntrests = ({ navigation }) => {
  var items = ["History", "Science", "Mathematics", "Art", "Music", "Drama", "Commerce and Accounting", "Language-Tamil", "English", "Language-Sinhala", "ICT", "Health and Physical Studies", "Geography", "Litreture-Tamil", "Civic Education", "Agriculture"]
  const [selected, setSelected] = React.useState(Array(items.length).fill(false))
  return (
    <LoginDetails
      navigation={navigation}
      heading="Subjects Matter"
      heading2="Choose your favorites"
      body={
        <FlatList
          columnWrapperStyle={{ flexWrap: "wrap" }}
          style={styles.login_subjects_view}
          data={items}
          numColumns={100}
          fadingEdgeLength={40}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => {
              var newselected = [...selected]
              newselected[index] = !newselected[index]
              setSelected(newselected)
            }}>
              <Text style={[styles.login_subject, selected[index] && styles.login_subject_selected]}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      }
      buttonText="Done"
      buttonPress={() => { navigation.navigate("LoginTimeChoice") }}
    />
  )
}

const LoginTimeChoice = ({ navigation }) => {
  const [t1, setT1] = React.useState(true)
  const [t2, setT2] = React.useState(true)
  const [t3, setT3] = React.useState(true)

  return (
    <LoginDetails
      navigation={navigation}
      heading="Time is Precious"
      heading2="Select your studying times."
      body={
        <View>
          <Text style={styles.white_text}>Time 1</Text>
          <View style={styles.flex_row}>
            <TextInput style={[styles.login_text_input, styles.login_time_input]} />
            <Text style={styles.white_text}>:</Text>
            <TextInput style={[styles.login_text_input, styles.login_time_input]} />
            <TouchableOpacity onPress={() => setT1(!t1)}>
              <Text style={[styles.login_subject, styles.login_time_m]}>{t1 ? "am" : "pm"}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.white_text}>Time 2</Text>
          <View style={styles.flex_row}>
            <TextInput style={[styles.login_text_input, styles.login_time_input]} />
            <Text style={styles.white_text}>:</Text>
            <TextInput style={[styles.login_text_input, styles.login_time_input]} />
            <TouchableOpacity onPress={() => setT2(!t2)}>
              <Text style={[styles.login_subject, styles.login_time_m]}>{t2 ? "am" : "pm"}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.white_text}>Time 3</Text>
          <View style={styles.flex_row}>
            <TextInput style={[styles.login_text_input, styles.login_time_input]} />
            <Text style={styles.white_text}>:</Text>
            <TextInput style={[styles.login_text_input, styles.login_time_input]} />
            <TouchableOpacity onPress={() => setT3(!t3)}>
              <Text style={[styles.login_subject, styles.login_time_m]}>{t3 ? "am" : "pm"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      buttonText="Done"
      buttonPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'TabView' }],
        });
      }}
    />
  )
}

export { Login, LoginProfile, LoginName, LoginBirthday, LoginIntrests, LoginTimeChoice };

