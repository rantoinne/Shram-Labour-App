import React, { Component } from 'react';
import { Text, View, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LoginView from './View/LoginView';
import { CommonActions } from '@react-navigation/native';
import { parent } from './../styles/styles';
import * as APICalls from '../services/APICalls';
import * as Constants from '../util/Constants'
import Toast from 'react-native-simple-toast';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            previousPhoneNumber: '',
            showProgress: false
        };
        // this.openNextScreen = this.openNextScreen.bind(this);
    }

    onGetOTPClick(params) {
        Keyboard.dismiss();
        this.phoneNumber = params.phoneNumber;
        APICalls.otpRequest(
            params,
            this.onSuccessOTP.bind(this),
            this.onFailureOTP.bind(this)
        );
        this.setState({ showProgress: true });
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

    onSuccessOTP(response) {
        this.setState({ previousPhoneNumber: this.phoneNumber, showProgress: false });
        Toast.show(response.message);
    }

    onFailureOTP(response) {
        this.setState({ showProgress: false });
        Toast.show(response.message);
    }

    onSuccessVerifyOTP(response) {
        var model = response;
        AsyncStorage.setItem(Constants.USER_DATA, JSON.stringify(model.data.user));
        AsyncStorage.setItem(Constants.ACCESS_TOKEN, model.data.user.accessToken);
        AsyncStorage.setItem(Constants.MEDIA_URL, '');
        this.setState({ previousPhoneNumber: '', showProgress: false });
        this.openNextScreen();
        
        // let params = {
        //     limit: 10,
        //     type: 'popular'
        // }
        // APICalls.getAllPOST(
        //     params,
        //     this.onSuccessOTP.bind(this),
        //     this.onFailureOTP.bind(this)
        // );

        // const value = await AsyncStorage.getItem(ACCESS_TOKEN);
        // if (value !== null) {
        //     // We have data!!
        //     console.log(JSON.parse(value));
        // }

        // console.log(model.data.user.accessToken);
    }

    onFailureVerifyOTP(response) {
        this.setState({ showProgress: false });
        Toast.show(response.message);
    }

    openNextScreen() {
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [
                { name: 'HomeNavigator' }
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={parent.container}>
                <LoginView
                    getOTP={this.onGetOTPClick.bind(this)}
                    verifyOTP={this.onVerifyOTPClick.bind(this)}
                    previousPhoneNumber={this.state.previousPhoneNumber}
                    showProgress={this.state.showProgress} />
            </View>
        );
    }
}