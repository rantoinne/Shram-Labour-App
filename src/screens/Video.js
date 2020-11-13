import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import VideoView from './View/VideoView'

export default class Video extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uri: props.route.params.uri
    }
  }

  openNextScreen(uri) {
    this.props.navigation.navigate('UploadVideo', { uri: uri, mediaType: 'video' });
  }

  render() {
    const text = this.props.route.params.uri;
    return (
      <View style={{ flex: 1 }}>
        <VideoView uri={this.state.uri} navigation={this.props.navigation} ref={instance => { this.videoView = instance; }} nextScreen={this.openNextScreen.bind(this)} navigation={this.props.navigation} />
      </View>
    );
  }

}