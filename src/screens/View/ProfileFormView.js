import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TextInput, TouchableWithoutFeedback, Alert } from 'react-native';
import { parent, margin, fontSize, border, profileImage } from './../../styles/styles'
import Button from '../../components/Button';
import Header from '../../components/Header';
import LabelText from '../../components/LabelText';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';
import * as Progress from 'react-native-progress';
import { SECONDARY_COLOR } from '../../styles/colors';

export default class ProfileFormView extends Component {

  constructor(props) {
    super(props);
    let tempSkills = props.profileData.skills.toString();
    let _tempSkills = tempSkills.replace(/,/g, ' ');
    this.state = ({
      uri: '',
      path: '',
      name: props.profileData.name,
      location: props.profileData.location,
      phoneNumber: props.profileData.phoneNumber,
      age: props.profileData.age.toString(),
      skills: _tempSkills,
      mediaUrl: props.profileData.mediaUrl

    })
  }
  
  onBackPress() {
    this.props.onBack();
  }
  validateInput() {
  
    if ((this.state.name && this.state.name.length > 0)
      && (this.state.location && this.state.location.length > 0)
      && (this.state.phoneNumber && this.state.phoneNumber.length > 0)
      && (this.state.skills && this.state.skills.length > 0)
      && (this.state.age && this.state.age.length > 0)) {
      var _age = parseInt(this.state.age, 10);
      if (_age > 0) {
        var re = /[ ,]+/; // split on colon space or comma space
        var arr = this.state.skills.split(re);
        var avatar = '';
        if (this.state.path && this.state.path.length > 0) {
          avatar = this.state.path;
        }

        let params = {
          name: this.state.name,
          location: this.state.name,
          skills: arr,
          age: _age
        }
        this.props.formSubmit(params, avatar);
      } else {
        Toast.show('Enter a valid age');
      }
    } else {
      Toast.show('Field can not be blank');
    }
  }

  onChooseButtonClick() {
    console.log('Open gallary');
    this.selectImageFromDevice();
  }

  async selectImageFromDevice() {
    const options = {
      title: 'Video Picker',
      mediaType: 'image',
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
      console.log(response.path + ' sam ' + response.uri);
      // this.openNextScreen(response.path);
      const uri = { uri: response.uri };
      this.setState({ uri: uri, path: response.path });
    });
  }


  uploadVideo() {
    Alert.alert("Hold on!", "Are you sure you want to upload video?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => this.props.navigation.navigate('Camera') }
    ]);
  };

  getProgressView() {
    if (this.props.showProgress) {
      return (
        <View style={parent.progress}>
          <Progress.Circle
            size={50}
            indeterminate={true}
            color={['white']}
          />
        </View>
      );
    }
  }

  getHeaderView() {
    return (

      <View style={{ height: 60, width: '100%', flexDirection: 'row', }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text
                    style={{
                        alignSelf: 'center', fontSize: 18
                    }}
                >Edit Profile</Text>
                <TouchableWithoutFeedback onPress={this.onBackPress.bind(this)}>
                    <Image
                        style={{
                            height: 25, width: 25, position: 'absolute', marginStart: 20
                        }}
                        source={require('../../assets/images/back_button.png')}
                    />
                </TouchableWithoutFeedback>
            </View>
        </View>

      // <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
      //   <TouchableWithoutFeedback onPress={() => this.props.onBackPress()}>
      //     <Image
      //       style={{
      //         height: 25, width: 25,
      //       }}
      //       source={require('../../assets/images/back_button.png')}
      //     />
      //   </TouchableWithoutFeedback>
      //   <TouchableWithoutFeedback onPress={() => this.props.onEditPress()}>
      //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      //       <Image
      //         style={{
      //           height: 25, width: 25,
      //         }}
      //         source={require('../../assets/images/edit.png')}
      //       />
      //       <Text style={{ marginStart: 4 }}>Edit</Text>

      //     </View>
      //   </TouchableWithoutFeedback>
      // </View>
    )
  }

  render() {


    let view = <Image style={[profileImage.img]} source={require('../../assets/images/profile.png')} />
    if ((this.props.profileData.avatar && this.props.profileData.avatar.length > 0) && !this.state.uri) {
      const uri = { uri: this.props.profileData.avatar };
      view = <Image style={[profileImage.img]}
        source={uri}
      />
    } else if (this.state.uri) {
      view = <Image style={[profileImage.img]} source={this.state.uri} />
      console.log('' + this.state.uri)
    }

    
    return (
      <View style={{ flex: 1, }}>
        <ScrollView>
          <View style={{ backgroundColor: SECONDARY_COLOR }}>
            {/* <Header navigation={this.props.navigation} title='Edit Profile' onBackPress={this.props.onBackPress}/> */}
            {this.getHeaderView()}
            <View style={{ margin: 20 }}>
              <View style={{ alignItems: 'center' }}>
                <TouchableWithoutFeedback onPress={this.onChooseButtonClick.bind(this)}>
                  {view}
                </TouchableWithoutFeedback>
              </View>
              <LabelText style={margin.marginTop_20} text='Name' />
              <TextInput style={border.curve}
                onChangeText={value => this.setState({ name: value })}
                value={this.state.name}
              />
              <LabelText style={margin.marginTop_20} text='Location' />
              <TextInput style={border.curve}
                onChangeText={value => this.setState({ location: value })}
                value={this.state.location}
              />
              <LabelText style={margin.marginTop_20} text='Mobile Number' />
              <TextInput style={border.curve}
                underlineColorAndroid="transparent"
                placeholderTextColor="gray"
                keyboardType='numeric'
                maxLength={10}
                onChangeText={value => this.setState({ phoneNumber: value })}
                value={this.state.phoneNumber}
              />
              <LabelText style={margin.marginTop_20} text='Age' />
              <TextInput style={border.curve}
                underlineColorAndroid="transparent"
                placeholderTextColor="gray"
                keyboardType='numeric'
                maxLength={2}
                onChangeText={value => this.setState({ age: value })}
                value={this.state.age}
              />
              <LabelText style={margin.marginTop_20} text='Skills' />
              <TextInput style={[border.curve, { height: 100, textAlignVertical: "top" }]}
                multiline={true}
                onChangeText={value => this.setState({ skills: value })}
                value={this.state.skills}
              />
              <LabelText style={margin.marginTop_20} text='Upload a video about what you do' />
              <TouchableWithoutFeedback onPress={this.uploadVideo.bind(this)}>
                <View style={[border.curve, {
                  height: 100, justifyContent: 'center',
                  alignItems: 'center',
                }]}>
                  <Image style={{ height: 40, width: 40, }}
                    source={require('../../assets/images/upload_video.png')}
                  />
                </View>
              </TouchableWithoutFeedback>
              {/* <LabelText style={margin.marginTop_20} text='Description About Video' />
            <TextInput style={[border.curve, { height: 100, textAlignVertical: "top" }]}
              multiline={true}
              onChangeText={value => this.setState({ description: value })}
              value={this.state.description}
            /> */}

              <Button onClick={this.validateInput.bind(this)} text='Save' />
            </View>
          </View>
        </ScrollView >
        {this.getProgressView()}
      </View>
    );
  }
}