import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import CameraView from './View/CameraView'
import ImagePicker from 'react-native-image-picker';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AppHeader from '../components/AppHeader';
import { SECONDARY_COLOR } from '../styles/colors';

export default class Camera extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'tempo'
    }
  }

  openNextScreen(uri) {
    console.log('Video props' + uri);
    this.props.navigation.navigate('Video', { uri: uri });
  }

  onChooseButtonClick() {
    console.log('Open gallary');
    this.selectVideoFromDevice();
  }

  async selectVideoFromDevice() {
    const options = {
      title: 'Video Picker',
      mediaType: 'video',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      //response.uri
      if (response.didCancel) {
        return;
      }
      if (response.error) {
        console.log("ImagePicker error : " + response.error);
        return;
      }
      // console.log(response.path +' sam '+ response.fileName);
      this.openNextScreen(response.path);
    });
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <AppHeader title={'Shram'} navigation={this.props.navigation} showBackButton={false} />
        <CameraView text={this.state.text} nextScreen={this.openNextScreen.bind(this)} />
        <TouchableWithoutFeedback onPress={this.onChooseButtonClick.bind(this)}>

          <View style={{ flexDirection: 'row', alignItems: 'center', height: 80, backgroundColor: SECONDARY_COLOR }}>
            <Image
              style={{
                height: 40, width: 40, borderColor: `${SECONDARY_COLOR}00`,
                borderWidth: 1,
                borderRadius: 10,
                marginStart: 10
              }}
              source={require('../assets/images/gradient.png')}
            />
            <Text style={{ fontSize: 14, color: '#41e3f7', marginStart: 10 }}>Upload From Gallery</Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    );
  }

}