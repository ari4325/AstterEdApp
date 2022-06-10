import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import closeIcon from '../assets/icons/Close.png';
import flipIcon from '../assets/icons/FlipCamera.png';
import previous from '../assets/Image.png';
import styles from './styles';

const getPermissions = async () => {
  var cameraPermission = await Camera.getCameraPermissionStatus()
  var microphonePermission = await Camera.getMicrophonePermissionStatus()
  if (cameraPermission != 'authorized') {
    cameraPermission = await Camera.requestCameraPermission()
  }
  if (microphonePermission != 'authorized') {
    microphonePermission = await Camera.requestMicrophonePermission()
  }
  // console.log("c: " + cameraPermission)
  // console.log("m: " + microphonePermission)

  return (cameraPermission == 'authorized' && microphonePermission == 'authorized')
}

const PostContent = ({ navigation }) => {
  const [hasPermission, setHasPermission] = React.useState(null)

  const permissions = () => {
    getPermissions().then(
      (value) => {
        setHasPermission(value)
      }
    )
  }
  React.useEffect(permissions, [])
  if (hasPermission) {
    return <CameraView navigation={navigation} />
  }
  else if (hasPermission == false) {
    return (
      <View style={[styles.background, { padding: 30, justifyContent: 'center' }]}>
        <Text style={[styles.boldtext, { textAlign: 'center' }]}>Needs Camera and Microphone permissions to record videos</Text>
        <View style={styles.flex_row} >
          <TouchableOpacity onPress={() => permissions()} style={{ backgroundColor: '222222', borderRadius: 10, padding: 10, flex: 1, marginTop: 20, marginHorizontal: 10 }}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Get Permissions</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress style={{ backgroundColor: '222222', borderRadius: 10, padding: 10, flex: 1, marginTop: 20, marginHorizontal: 10 }}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  else {
    return (
      <></>
    )
  }
}

const CameraView = ({ navigation }) => {
  const [isFront, setFront] = React.useState(false)
  const [mode, setMode] = React.useState("video")
  const devices = useCameraDevices()
  const device = isFront ? devices.front : devices.back
  const camera = React.useRef<Camera>(null)
  const [isRecording, setRecording] = React.useState(false)
  if (device == null) {
    return <></>
  }
  const capturePhoto = async () => {
    const photo = await camera.current.takePhoto({
      flash: 'auto'
    })
    console.log(photo)
  }
  const recordVideo = () => {
    setRecording(true)
    camera.current.startRecording({
      flash: 'on',
      onRecordingFinished: (video) => {
        console.log(video)
        setRecording(false)
      },
      onRecordingError: (error) => console.error(error),
    })
  }
  const stopVideo = async () => {
    await camera.current.stopRecording()
  }
  return (
    <View style={styles.background}>
      <Camera
        style={{ flex: 1 }}
        device={device}
        isActive={true}
        ref={camera}
        photo={mode == 'photo'}
        video={mode == 'video' || mode == 'live'}
        audio={mode == 'video' || mode == 'live'}
      />
      <View style={[styles.flex_row, styles.post_header]}>
        <TouchableOpacity style={styles.shorts_close_button} onPress={() => navigation.pop()}>
          <Image source={closeIcon} style={styles.fit} />
        </TouchableOpacity>
        <View flex={1}>
          <Progress.Bar progress={0} useNativeDriver={true} {...styles.post_progressbar} />
        </View>
      </View>
      <View style={[styles.flex_row, styles.camera_controls]}>
        <TouchableOpacity>
          <Image source={previous} style={styles.camera_controls_previous} />
        </TouchableOpacity>
        {(mode == "video" || mode == "live") ? (
          <TouchableOpacity style={styles.camera_capture_border} onPress={isRecording ? stopVideo : recordVideo}>
            <View style={isRecording ? styles.camera_video_stop : styles.camera_video_record} />
          </TouchableOpacity>
        )
          : <TouchableOpacity style={styles.camera_capture_border} onPress={capturePhoto}>
            <View style={styles.camera_photo} />
          </TouchableOpacity>
        }
        <TouchableOpacity onPress={() => setFront(!isFront)}>
          <Image source={flipIcon} style={styles.camera_controls_flip} />
        </TouchableOpacity>
      </View>
      <View style={[styles.flex_row, styles.post_mode]}>
        <TouchableOpacity onPress={() => setMode("video")}>
          <Text style={[styles.boldtext, styles.post_mode_text, (mode == "video") && styles.post_mode_text_selected]}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMode("live")}>
          <Text style={[styles.boldtext, styles.post_mode_text, (mode == "live") && styles.post_mode_text_selected]}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMode("photo")}>
          <Text style={[styles.boldtext, styles.post_mode_text, (mode == "photo") && styles.post_mode_text_selected]}>Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default PostContent