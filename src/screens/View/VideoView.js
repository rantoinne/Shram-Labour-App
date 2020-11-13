import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image, AppState } from 'react-native';
import { VideoPlayer, Trimmer } from 'react-native-video-processing';
import { camera } from '../../styles/styles';
import Button from '../../components/Button';
import AppHeader from '../../components/AppHeader';
import InViewPort from '../InViewport.js';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../../styles/colors'

var start = -1;
var end = -1;
export default class VideoView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startTime: 0,
            endTime: 0,
            play: true
        }
    }

    trimVideo() {
        if (start !== -1 && end !== -1) {
            const options = {
                startTime: start,
                endTime: end,
                // quality: VideoPlayer.Constants.quality.QUALITY_1280x720, // iOS only
                // saveToCameraRoll: true, // default is false // iOS only
                // saveWithCurrentDate: true, // default is false // iOS only
            };
            this.videoPlayerRef.trim(options)
                .then((newSource) => {
                    this.props.nextScreen(newSource);
                    console.log(newSource);
                })
                .catch(console.warn);

        } else {
            this.props.nextScreen(this.props.uri);

        }

    }

    compressVideo() {
        const options = {
            width: 720,
            height: 1280,
            bitrateMultiplier: 3,
            // saveToCameraRoll: true, // default is false, iOS only
            // saveWithCurrentDate: true, // default is false, iOS only
            minimumBitrate: 300000,
            removeAudio: true, // default is false
        };
        this.videoPlayerRef.compress(options)
            .then((newSource) => console.log(newSource))
            .catch(console.warn);
    }

    getPreviewImageForSecond(second) {
        const maximumSize = { width: 640, height: 1024 }; // default is { width: 1080, height: 1080 } iOS only
        this.videoPlayerRef.getPreviewForSecond(second, maximumSize) // maximumSize is iOS only
            .then((base64String) => console.log('This is BASE64 of image', base64String))
            .catch(console.warn);
    }

    getVideoInfo() {
        this.videoPlayerRef.getVideoInfo()
            .then((info) => { console.log(info); this.duration = info })
            .catch(console.warn);
    }

    componentDidMount() {
        this.getVideoInfo();
        AppState.addEventListener('change', this._handleAppStateChange);
        this._unsubscribe = this.props.navigation.addListener('blur', (e) => {
            console.log('hide');
            this.setState({ play: false });
        })
    }

    componentWillUnmount() {
        this._unsubscribe();
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        // this.state.appState.match(/inactive|background/) &&
        if (nextAppState === 'active') {
            console.log('App has come to the foreground!')
        } else if (nextAppState === 'background') {
            this.setState({ play: false });
        }
        // this.setState({appState: nextAppState});
    }

    // handlePlaying = (isVisible) => {
    //     // console.log('sam' + isVisible);
    //     // this.setState({ play: false });
    //     // isVisible ? this.setState({ play: true }) : this.setState({ play: false });
    // }
    nextScreen() {
        //    let temp = !this.state.play;
        this.setState({ play: false });
        this.trimVideo();
    }

    playPause() {
        let temp = !this.state.play;
        this.setState({ play: temp });
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
               <AppHeader title={'Upload video'} navigation={this.props.navigation} showBackButton={true} />
                    <TouchableWithoutFeedback onPress={this.playPause.bind(this)}>
                        <VideoPlayer
                            ref={ref => this.videoPlayerRef = ref}
                            startTime={0}  // seconds
                            endTime={0}   // seconds
                            play={this.state.play}     // default false
                            replay={false}   // should player play video again if it's ended
                            source={this.props.uri}
                            style={camera.backgroundVideo}
                            resizeMode={VideoPlayer.Constants.resizeMode.COVER}
                        />
                    </TouchableWithoutFeedback>
                <View style={{ flexDirection: 'column', width: '100%', bottom: 100, position: 'absolute', borderColor:PRIMARY_COLOR, borderWidth:2,padding:5 }}>
                    <Trimmer
                        source={this.props.uri}
                        onChange={(e) => {
                            start = e.startTime * 1000;
                            end = e.endTime * 1000;
                            console.log('sam time ' + e.startTime, e.endTime)
                        }
                        }
                    />
                </View>
                <View style={{ flex: 1, height: 80, width: '100%', justifyContent: 'flex-start', alignContent: 'flex-start', bottom: 20, position: 'absolute', }}>
                    <Button onClick={this.nextScreen.bind(this)} text='Upload video' enable={true}/>
                </View>

            </View>
        );
    }
}