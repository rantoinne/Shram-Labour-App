import React, { Component } from 'react';
import { View } from 'react-native';
import CreatePostView from './View/CreatePostView';
import { parent } from './../styles/styles'
import * as Constants from '../util/Constants';
import * as APICalls from '../services/APICalls';
import Toast from 'react-native-simple-toast';
import { CommonActions } from '@react-navigation/native';

export default class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 3,
            showProgress: false,
        };
    }

    selectIt = (value) => {
        this.setState({ selectedTab: value });
    }

    openNextScreen(mediaType, uri) {
        this.setState({selectedTab:3})
        console.log(mediaType + ' Video props ' + uri);
        if(mediaType == 'video'){
            this.props.navigation.navigate('Video', { uri: uri });
        }else{
            this.props.navigation.navigate('UploadVideo', { uri: uri, mediaType: 'image' });
        }
    }

    render() {
        return (
            <View style={parent.container}>
                <CreatePostView
                    showProgress={this.state.showProgress}
                    selectIt={this.selectIt.bind(this)}
                    selectedTab={this.state.selectedTab}
                    nextScreen={this.openNextScreen.bind(this)}
                />
            </View>
        );
    }
}