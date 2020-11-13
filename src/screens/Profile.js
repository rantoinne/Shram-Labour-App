import React, { Component } from 'react';
import { Text, View, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ProfileFormView from './View/ProfileFormView';
import ProfileView from './View/ProfileView';
import { parent } from './../styles/styles';
import * as Constants from '../util/Constants';
import * as APICalls from '../services/APICalls';
import Toast from 'react-native-simple-toast';

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = ({ profileData: '', localLoading: true, showProgress: false, isEdit: false })
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);

        AsyncStorage.multiGet([Constants.USER_DATA, Constants.MEDIA_URL]).then(response => {
            // console.log(response[0][0]) // Key1
            // console.log(response[0][1]) // Value1
            // console.log(response[1][0]) // Key2
            // console.log(response[1][1]) // Value2

            let _profileData = JSON.parse(response[0][1]);
            this.mediaURL = '';
            if (response[1][1]) {
                this.mediaURL = response[1][1];
            }
            this.setState({ profileData: _profileData, localLoading: false });
        })

    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }

    backAction = () => {
        if (this.state.isEdit) {
            this.setState({ isEdit: !this.state.isEdit });
        } else {
            this.props.navigation.goBack(null);
        }
        return true;
    }

    formSubmit(params, avatar) {
        this.setState({ showProgress: true });
        if (avatar && avatar.length > 0) {
            this.params = params;
            APICalls.upLoadImage(avatar,
                this.onImageSuccess.bind(this),
                this.onImageFailure.bind(this)
            );
        } else {
            APICalls.updateProfile(params,
                this.onProfileUpdateSuccess.bind(this),
                this.onProfileUpdateFailure.bind(this)
            );
        }
    }

    onImageSuccess(response) {
        this.imageUrl = response.data.imageUrl;
        console.log('sam =' + this.imageUrl);
        this.params.avatar = this.imageUrl;
        APICalls.updateProfile(this.params,
            this.onProfileUpdateSuccess.bind(this),
            this.onProfileUpdateFailure.bind(this)
        );
    }

    onImageFailure(response) {
        this.setState({ showProgress: false });
        Toast.show(response.message);
    }

    onProfileUpdateSuccess(response) {
        console.log('sam =' + JSON.stringify(response.data));
        AsyncStorage.setItem(Constants.USER_DATA, JSON.stringify(response.data));
        this.setState({ profileData: response.data, localLoading: false, isEdit: false });
        this.setState({ showProgress: false });
    }

    onProfileUpdateFailure(response) {
        this.setState({ showProgress: false });
        Toast.show(response.message);
    }

    onBackPress() {
        console.log('onback' + this.state.isEdit);
        if (this.state.isEdit) {
            this.setState({ isEdit: !this.state.isEdit });
        } else {
            this.props.navigation.goBack(null);

        }
    }

    onEditPress() {
        this.setState({ isEdit: !this.state.isEdit });
    }

    render() {

        let childView = <View />;

        if (!this.state.localLoading) {
            if (this.state.isEdit) {
                childView = <ProfileFormView
                    navigation={this.props.navigation}
                    profileData={this.state.profileData}
                    formSubmit={this.formSubmit.bind(this)}
                    showProgress={this.state.showProgress}
                    onBack={this.onBackPress.bind(this)}
                />;
            } else if (this.state.profileData) {
                if ((this.state.profileData.name && this.state.profileData.name.length > 0)
                    && (this.state.profileData.location && this.state.profileData.location.length > 0)
                    && (this.state.profileData.age && this.state.profileData.age > 0)
                    && (this.state.profileData.phoneNumber && this.state.profileData.phoneNumber.length > 0)
                    && (this.state.profileData.skills && this.state.profileData.skills.length > 0)) {
                    childView = <ProfileView
                        navigation={this.props.navigation}
                        profileData={this.state.profileData}
                        onBackPress={this.onBackPress.bind(this)}
                        onEditPress={this.onEditPress.bind(this)}
                        mediaURL={this.mediaURL} />;
                } else {
                    childView = <ProfileFormView
                        navigation={this.props.navigation}
                        profileData={this.state.profileData}
                        formSubmit={this.formSubmit.bind(this)}
                        showProgress={this.state.showProgress}
                        onBack={this.onBackPress.bind(this)} />;
                }
            }

        }

        return (
            <View style={parent.container}>
                {childView}
            </View>
        );
    }
}