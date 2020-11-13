import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions } from '@react-navigation/native';
import { parent } from '../styles/styles';
import * as APICalls from '../services/APICalls';
import * as Constants from '../util/Constants'
import Toast from 'react-native-simple-toast';
import OTPVerificationView from './View/OTPVerificationView';

export default class OTPVerification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showProgress: false,
        };
    }

    onVerifyOTPClick(params) {
        Keyboard.dismiss();
        APICalls.otpConfirm(
            params,
            this.onSuccessVerifyOTP.bind(this),
            this.onFailureVerifyOTP.bind(this)
        );
        this.setState({ showProgress: true });
    }

    onSuccessVerifyOTP(response) {
        var model = response;
        AsyncStorage.setItem(Constants.USER_DATA, JSON.stringify(model.data.user));
        AsyncStorage.setItem(Constants.ACCESS_TOKEN, model.data.user.accessToken);
        AsyncStorage.setItem(Constants.MEDIA_URL, '');
        this.setState({ showProgress: false });
        this.openNextScreen();
    }

    onFailureVerifyOTP(response) {
        this.setState({ showProgress: false });
        Toast.show(response.message);
    }

    openNextScreen() {
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [
                { name: 'YouAreAShramik' }
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={parent.container}>
                <OTPVerificationView
                    onVerifyOTPClick={this.onVerifyOTPClick.bind(this)}
                    showProgress={this.state.showProgress}
                    phoneNumber={this.props.route.params.phoneNumber}
                    navigation={this.props.navigation} />
            </View>
        );
    }
}