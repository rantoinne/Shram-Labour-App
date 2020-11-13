import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import MobileNumberView from './View/MobileNumberView';
import { CommonActions } from '@react-navigation/native';
import { parent } from '../styles/styles';
import * as APICalls from '../services/APICalls';
import Toast from 'react-native-simple-toast';

export default class MobileNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousPhoneNumber: '',
            showProgress: false,
            text: {}
        };
        this.text;
    }

    componentDidMount = () => {
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

    onSuccessOTP(response) {
        this.setState({ previousPhoneNumber: this.phoneNumber, showProgress: false });
        Toast.show(response.message);
        this.props.navigation.navigate('OTPVerification', { phoneNumber: this.phoneNumber });
    }

    onFailureOTP(response) {
        this.setState({ showProgress: false });
        Toast.show(response.message);
    }

    render() {
        return (
            <View style={parent.container}>
                <MobileNumberView
                    getOTP={this.onGetOTPClick.bind(this)}
                    showProgress={this.state.showProgress}
                    navigation={this.props.navigation} />
            </View>
        );
    }
}