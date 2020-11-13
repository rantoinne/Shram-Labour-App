import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import UploadVideoView from './View/UploadVideoView';
import * as APICalls from '../services/APICalls';
import * as Constants from '../util/Constants';
import Toast from 'react-native-simple-toast';
import { SECONDARY_COLOR } from '../styles/colors';

export default class UploadVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uri: props.route.params.uri,
            showProgress: false,
            mediaType: props.route.params.mediaType
        }
    }

    openNextScreen(about, location, description) {
        this.about = about;
        this.location = location;
        this.description = description;

        if (this.state.mediaType == 'image') {
            // console.log('satyanshu')
            APICalls.upLoadImage(this.state.uri,
                this.onImageSuccess.bind(this),
                this.onImageFailure.bind(this)
            );
        } else {
            APICalls.upLoadVideo(this.state.uri,
                this.onVideoUploadSuccess.bind(this),
                this.onVideoUploadFailure.bind(this)
            );
        }
        this.setState({ showProgress: true });
    }

    onImageSuccess(response) {
        this.imageUrl = response.data.imageUrl;
        console.log('sam =' + this.videoUrl);
        AsyncStorage.setItem(Constants.MEDIA_URL, this.imageUrl);
        let params = {
            type: 'image',
            caption: this.about,
            location: this.location,
            description: this.description,
            mediaUrl: this.imageUrl
        }

        APICalls.createPost(params,
            this.onPostSuccess.bind(this),
            this.onPostFailure.bind(this)
        );
    }

    onImageFailure(response) {
        this.setState({ showProgress: false });
        Toast.show(response.message);
    }

    onVideoUploadSuccess(response) {
        this.videoUrl = response.data.videoUrl;
        console.log('sam =' + this.videoUrl);
        AsyncStorage.setItem(Constants.MEDIA_URL, this.videoUrl);
        let params = {
            type: 'video',
            caption: this.about,
            location: this.location,
            description: this.description,
            mediaUrl: this.videoUrl
        }

        APICalls.createPost(params,
            this.onPostSuccess.bind(this),
            this.onPostFailure.bind(this)
        );
    }

    onVideoUploadFailure(response) {
        this.setState({ showProgress: false });
        Toast.show(response.message);
    }

    onPostSuccess(response) {

        this.props.navigation.navigate('UploadVideoThankYou');
    }

    onPostFailure(response) {
        console.log(JSON.stringify(response));
        this.setState({ showProgress: false });
        Toast.show(response.message);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: SECONDARY_COLOR }}>
                <UploadVideoView
                    uri={this.state.uri}
                    nextScreen={this.openNextScreen.bind(this)}
                    showProgress={this.state.showProgress}
                    navigation={this.props.navigation}
                    mediaType={this.state.mediaType}
                />
            </View>
        );
    }

}