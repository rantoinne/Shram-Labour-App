import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { camera } from '../../styles/styles'

export default class CameraView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRecording: false,
            isRecorded: false,
            uri: "",
            cameraType: 'front',
            flashMode: 'torch'
        };
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={camera.preview}
                    type={this.state.cameraType}
                    flashMode={this.state.flashMode}
                    // isMirror
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    {({ camera, status, recordAudioPermissionStatus }) => {
                        // if (status !== 'READY') return <PendingView />;
                        return (
                            <View style={{ flex: 0, width: '100%', flexDirection: 'column' }}>
                                <View style={{ flex: 0, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', }}>
                                    <TouchableWithoutFeedback onPress={this.flashOnOff.bind(this)} style={camera.capture}>
                                        <Image style={{ height: 25, width: 25, marginEnd: 10, marginBottom: 30 }} resizeMode='contain' source={require('../../assets/images/flash.png')} />
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={this.changeCameraType.bind(this)} style={camera.capture}>
                                        <Image style={{ height: 25, width: 25, marginEnd: 10, marginBottom: 25 }} resizeMode='contain' source={require('../../assets/images/selfie.png')} />
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                    <TouchableWithoutFeedback onPress={this.takeVideo.bind(this)} style={camera.capture}>
                                        <Image style={{ height: 50, width: 50, marginBottom: 10 }} source={this.state.isRecording?require('../../assets/images/recording_on.png'):require('../../assets/images/camera.png')} />
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        );
                    }}
                </RNCamera>              
            </View>
        );
    }

    takeVideo = () => {
        if (!this.state.isRecording) {
        console.log('start');

            this.startRecording();
        } else {
            console.log('stop');
            this.stopRecording();
        }
    }

    startRecording = async () => {
        if (this.camera) {
            try {
                // maxDuration: 10,                    
                const options = { quality: RNCamera.Constants.VideoQuality["4:3"],mirrorVideo:false }
                const promise = this.camera.recordAsync(options);
                // let promis1= this.camera.getCameraIds();

                if (promise) {
                    this.setState({ isRecording: true });
                    const data = await promise;
                    this.setState({ isRecording: false, isRecorded: true, uri: data.uri });
                    console.warn('takeVideo', data);
                    this.props.nextScreen(data.uri);
                }
            } catch (e) {
                console.error(e);
            }
        }
    };

    stopRecording = () => {
        if (this.camera) {
            this.camera.stopRecording();
        }
    }

    changeCameraType = () => {
        if (!this.state.isRecording) {
            if (this.state.cameraType === 'back') {
                this.setState({
                    cameraType: 'front',
                });
            } else {
                this.setState({
                    cameraType: 'back',
                });
            }
        }
    }

    flashOnOff = () => {
        if (this.state.flashMode === 'off') {
            this.setState({
                flashMode: 'torch',
            });
        } else {
            this.setState({
                flashMode: 'off',
            });
        }
    }
}

const PendingView = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>Waiting</Text>
    </View>
);