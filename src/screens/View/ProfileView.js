import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TextInput, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { parent, margin, fontSize, border, profileImage } from './../../styles/styles'
import Button from '../../components/Button';
import Header from '../../components/Header';
import LabelText from '../../components/LabelText';
import VideoPlayer from 'react-native-video-player';
import InViewPort from '../InViewport.js';
import { SECONDARY_COLOR } from '../../styles/colors';


export default class ProfileFormView extends Component {

  constructor(props) {
    super(props);
  }

  handlePlaying = (isVisible) => {
    isVisible ? this.player.resume() : this.player.pause();
  }


  getHeaderView() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
        <TouchableWithoutFeedback onPress={() => this.props.onBackPress()}>
          <Image
            style={{
              height: 25, width: 25,
            }}
            source={require('../../assets/images/back_button.png')}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.props.onEditPress()}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{
                height: 25, width: 25,
              }}
              source={require('../../assets/images/edit.png')}
            />
            <Text style={{ marginStart: 4 }}>Edit</Text>

          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  render() {
    let skills = this.props.profileData.skills.map((data, index) => {
      return (
        <Text style={{ backgroundColor: '#D3D3D3', marginBottom: 4, marginEnd: 8, padding: 6 }} key={index}>{data}</Text>
      )
    });

    let videoView = <View />;

    if ((this.props.profileData.mediaURL && this.props.profileData.mediaURL.length > 0) || (this.props.mediaURL && this.props.mediaURL.length > 0)) {

      if ((this.props.profileData.mediaURL && this.props.profileData.mediaURL.length > 0)) {
        this.mediaUri = { uri: this.props.profileData.mediaURL };
      } else {
        this.mediaUri = { uri: this.props.mediaURL };
      }

      videoView = <InViewPort onChange={this.handlePlaying}>
        <VideoPlayer
          video={this.mediaUri}
          ref={(ref) => {
            this.player = ref
          }}
          style={{ height: 150 }}
          videoHeight={150}
          resizeMode="cover"
          thumbnail={{ uri: 'https://images.unsplash.com/photo-1591090318005-a2ddba628b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
        />
      </InViewPort>
    } else {
      videoView = <View style={[border.curve, {
        height: 100, justifyContent: 'center',
        alignItems: 'center',
      }]}>
        <Image style={{ height: 40, width: 40, }}
          source={require('../../assets/images/upload_video.png')}
        />
      </View>
    }


    const uri = { uri: this.props.profileData.avatar };

    return (
      <ScrollView style={{ flex: 1, }}>
        <View style={{ backgroundColor: SECONDARY_COLOR }}>
          <ImageBackground style={{
            resizeMode: "cover",
            justifyContent: "center",
          }}
            source={require('../../assets/images/gradient.png')} >
            {this.getHeaderView()}
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <Image style={[profileImage.img]}
                source={uri}
              />
              <Text style={{ marginTop: 20, fontSize: 24 }}>{this.props.profileData.name}</Text>
              <Text style={{ fontSize: 18 }}>{this.props.profileData.role[0]}</Text>
            </View>
            <View style={{ margin: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                <Image style={{ height: 20, width: 20, marginEnd: 10 }}
                  source={require('../../assets/images/location.png')}
                />
                <Text>{this.props.profileData.location}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image style={{ height: 20, width: 20, marginEnd: 10 }}
                  source={require('../../assets/images/brief_case.png')}
                />
                <Text>{this.props.profileData.age}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image style={{ height: 20, width: 20, marginEnd: 10 }}
                  source={require('../../assets/images/phone_no.png')}
                />
                <Text>{this.props.profileData.phoneNumber}</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={{ margin: 20 }}>
            <LabelText text='Skills' />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              {skills}
            </View>
            <LabelText style={margin.marginTop_20} text='About me' />
            <View style={[border.video, margin.marginTop_20]}>
              {videoView}
            </View>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Camera')}>
              <View style={[border.coloredCurve, margin.marginTop_20, { justifyContent: 'center' }]}>
                <Text style={{ textAlign: 'center', color: '#41e3f7' }}>update Video</Text>
              </View>
            </TouchableWithoutFeedback>
            <LabelText style={margin.marginTop_20} text='App language selected' />
            <Text style={{ color: '#41e3f7', marginTop: 10, fontSize: 18 }}>English </Text>
            <LabelText style={margin.marginTop_20} text='Other Settings' />
          </View>
        </View>
      </ScrollView>
    );
  }
}