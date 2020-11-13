import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { parent, margin, fontSize, border, Alert } from './../../styles/styles'
import Button from '../../components/Button';
import VideoPlayer from 'react-native-video-player';
import Toast from 'react-native-simple-toast';
import * as Progress from 'react-native-progress';
import AppHeader from '../../components/AppHeader';
import {
    TextField
} from '@softmedialab/react-native-material-textfield';
import { PRIMARY_COLOR } from '../../styles/colors';

export default class UploadVideoView extends Component {

    constructor(props) {
        super(props);
        this.nextScreen = this.nextScreen.bind(this);
        this.state = {
            isPlay: true,
            about: '',
            description: '',
            location: ''
        }

    }

    nextScreen() {
        if (this.state.about.length > 0 && this.state.description.length > 0 && this.state.location) {
            this.props.nextScreen(this.state.about, this.state.about, this.state.about);
        } else {
            Toast.show('Filed can not be blank');
        }
    }

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


    render() {

        return (
            <View style={{ flex: 1, }}>
                <ScrollView >
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <AppHeader title={'Upload post'} navigation={this.props.navigation} showBackButton={true} />
                        <View style={{ flex: 1, margin: 20, }}>
                            {this.props.mediaType == 'video' ?
                                (<VideoPlayer
                                    video={{ uri: this.props.uri }}
                                    ref={(ref) => {
                                        this.player = ref
                                    }}
                                    style={{ height: 150 }}
                                    videoHeight={150}
                                    resizeMode="cover"
                                />) : (
                                    <Image style={{ height: 150 }} source={{ uri: this.props.uri }} resizeMode='contain'/>
                                )}
                            <View style={{ marginStart: 10, }}>
                                <TextField
                                    label='What is the video about'
                                    ref={this.fieldRef}
                                    containerStyle={{ backgroundColor: 'white' }}
                                    baseColor='#979797'
                                    tintColor={PRIMARY_COLOR}
                                    multiline={false}
                                    onChangeText={value => this.setState({ about: value })}
                                    value={this.state.about}
                                />
                            </View>
                            <View style={{ marginStart: 10, }}>
                                <TextField
                                    label='Description About Video'
                                    ref={this.fieldRef}
                                    containerStyle={{ backgroundColor: 'white' }}
                                    baseColor='#979797'
                                    tintColor={PRIMARY_COLOR}
                                    multiline={true}
                                    onChangeText={value => this.setState({ description: value })}
                                    value={this.state.description}
                                />
                            </View>
                            <View style={{ marginStart: 10, }}>
                                <TextField
                                    label='Location'
                                    ref={this.fieldRef}
                                    containerStyle={{ backgroundColor: 'white' }}
                                    baseColor='#979797'
                                    tintColor={PRIMARY_COLOR}
                                    multiline={false}
                                    onChangeText={value => this.setState({ location: value })}
                                    value={this.state.location}
                                />
                            </View>

                            <Button onClick={this.nextScreen} text='Upload post' enable={true} />
                        </View>
                    </View>
                </ScrollView>
                {this.getProgressView()}

            </View>
        );
    }

}   