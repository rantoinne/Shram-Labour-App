import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import { parent, createPost } from '../../styles/styles';
import AppHeader from '../../components/AppHeader';
import { PRIMARY_COLOR } from '../../styles/colors';
import ImagePicker from 'react-native-image-crop-picker';
import { RNCamera } from 'react-native-camera';
import { camera } from '../../styles/styles';
import Toast from 'react-native-simple-toast';
import { Strings } from '../../config/Languages';

export default class CreatePostView extends Component {

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

    selectImageFromDevice() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.size);
            if (image.size > 10485760) {
                Toast.show('File size max 10 MB.')
                this.props.selectIt(3)
                return
            }
            this.props.nextScreen('image', image.path)
        }).catch(error => this.props.selectIt(3));
    }

    selectVideoFromDevice() {
        ImagePicker.openPicker({
            mediaType: "video",
        }).then((video) => {
            console.log(video.size);
            if (video.size > 10485760) {
                Toast.show('File size max 10 MB.')
                this.props.selectIt(3)
                return
            }
            this.props.nextScreen('video', video.path)
        }).catch(error => this.props.selectIt(3));
    }

    render() {

        let view = <View></View>
        if (this.props.selectedTab == 1) {
            this.selectImageFromDevice();
        } else if (this.props.selectedTab == 2) {
            this.selectVideoFromDevice();
        } else {
            view = (<RNCamera
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
                    if (status !== 'READY') return <PendingView language={Strings} />;
                    return (
                        <View style={{ flex: 0, width: '100%', flexDirection: 'column' }}>
                            <View style={{ flex: 0, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', }}>
                                <TouchableWithoutFeedback onPress={this.flashOnOff.bind(this)} style={camera.capture}>
                                    <Image style={{ height: 25, width: 25, marginEnd: 10, marginBottom: 20 }} resizeMode='contain' source={require('../../assets/images/flash.png')} />
                                </TouchableWithoutFeedback>
                                {!this.state.isRecording ? (
                                    <TouchableWithoutFeedback onPress={this.changeCameraType.bind(this)} style={camera.capture}>
                                        <Image style={{ height: 25, width: 25, marginEnd: 10, marginBottom: 30 }} resizeMode='contain' source={require('../../assets/images/selfie.png')} />
                                    </TouchableWithoutFeedback>
                                ) : (<View style={{ height: 25, width: 25, marginEnd: 10, marginBottom: 30 }} />)}
                            </View>
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableWithoutFeedback onPress={this.takeVideo.bind(this)} style={camera.capture}>
                                    <Image style={{ height: 50, width: 50, marginBottom: 10 }} source={this.state.isRecording ? require('../../assets/images/recording_on.png') : require('../../assets/images/camera.png')} />
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    );
                }}
            </RNCamera>
            )
        }

        return (
            <View style={{ backgroundColor: '#E5E5E5', flexDirection: 'column', flex: 1 }}>
                <AppHeader title={Strings.Shram} navigation={this.props.navigation} showBackButton={false} />
                {view}
                {!this.state.isRecording ? (<View style={{ height: 80, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>

                    <TouchableOpacity onPress={() => this.props.selectIt(1)} >
                        <Text style={[createPost.bottomTab, this.props.selectedTab == 1 ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: '#FFF' }]}>{Strings.Photo}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.selectIt(2)} >
                        <Text style={[createPost.bottomTab, this.props.selectedTab == 2 ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: '#FFF' }]}>{Strings.Video}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.selectIt(3)} >
                        <Text style={[createPost.bottomTab, this.props.selectedTab == 3 ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: '#FFF' }]}>{Strings.Record}</Text>
                    </TouchableOpacity>
                </View>) : (<View style={{ height: 80, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }} />)}
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
                // maxDuration: 10 (second)                    
                const options = { quality: RNCamera.Constants.VideoQuality["4:3"], mirrorVideo: false, maxDuration: 120 }
                const promise = this.camera.recordAsync(options);

                if (promise) {
                    this.setState({ isRecording: true });
                    const data = await promise;
                    this.setState({ isRecording: false, isRecorded: true, uri: data.uri });
                    console.warn('takeVideo', data);
                    // this.props.nextScreen(data.uri);
                    this.props.nextScreen('video', data.uri)
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

const PendingView = (props) => (
    <View
        style={{
            flex: 1,
            width: '100%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>{props.language.Waiting}</Text>
    </View>
);

