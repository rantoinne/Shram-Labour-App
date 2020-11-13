import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { parent, fontSize,  } from './../../styles/styles'
import Button from '../../components/Button';
import LoginAssistance from '../../components/LoginAssistance';
import * as Progress from 'react-native-progress';
import * as AppConstants from '../../config/AppConstants';
import {
    TextField
} from '@softmedialab/react-native-material-textfield';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/colors';
import { Strings } from '../../config/Languages';

var regex = AppConstants.ONLY_INT_REGEX;

export default class OTPVerificationView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            otp1: '',
            otp2: '',
            otp3: '',
            otp4: '',
            btnEnable: false
        };
    }

    onFirstOTPTextChanged(value) {
        if (value.length == 0) {
            this.setState({
                otp1: value
            });
        } else if (regex.test(value)) {
            this.enableDisableBtn(value, this.state.otp2, this.state.otp3, this.state.otp4);
            this.setState({
                otp1: value
            });
            if (value.length == 1) {
                this.secondTextInput.focus();
            }
        }
    }

    onSecondOTPTextChanged(value) {
        if (value.length == 0) {
            this.setState({
                otp2: value
            });
        } else if (regex.test(value)) {
            this.enableDisableBtn(this.state.otp1, value, this.state.otp3, this.state.otp4);
            this.setState({
                otp2: value
            });
            if (value.length == 1) {
                this.thirdTextInput.focus();
            }
        }
    }

    onThirdOTPTextChanged(value) {
        if (value.length == 0) {
            this.setState({
                otp3: value
            });
        } else if (regex.test(value)) {
            this.enableDisableBtn(this.state.otp1, this.state.otp2, value, this.state.otp4);
            this.setState({
                otp3: value
            });
            if (value.length == 1) {
                this.forthTextInput.focus();
            }
        }
    }

    onForthOTPTextChanged(value) {
        if (value.length == 0) {
            this.setState({
                otp4: value
            });
        } else if (regex.test(value)) {
            this.enableDisableBtn(this.state.otp1, this.state.otp2, this.state.otp3, value);
            this.setState({
                otp4: value
            });
        }
    }

    enableDisableBtn(otp1, otp2, otp3, otp4) {

        if (otp1.length == 1 && otp2.length == 1 && otp3.length == 1 && otp4.length == 1) {
            this.setState({ btnEnable: true })
        } else {
            this.setState({ btnEnable: false })
        }
    }

    verifyOTP() {
        var otp = this.state.otp1 + this.state.otp2 + this.state.otp3 + this.state.otp4;
        var _otp = parseInt(otp, 10);
        let params = {
            phoneNumber: this.props.phoneNumber,
            otp: _otp
        }
        this.props.onVerifyOTPClick(params);
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
        console.log(Strings)
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, margin: 20 }}>
                    <TouchableWithoutFeedback onPress={() => { this.props.navigation.goBack(null) }}>
                        <Image style={{ width: 16, height: 16 }} source={require('../../assets/images/back_button.png')} />
                    </TouchableWithoutFeedback>
                    <View style={[parent.container]}>
                        <Text style={[fontSize.font_20, { fontWeight: 'bold' }]}>{Strings.Enter_OTP}</Text>
                        <Text style={[fontSize.font_12, { color: '#979797', marginTop: 4 }]}>{Strings.Enter_OTP_Label}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 6 }}>
                            <Text style={[fontSize.font_12, { color: '#979797' }]}>{this.props.phoneNumber}</Text>
                            <TouchableWithoutFeedback onPress={() => { this.props.navigation.goBack(null) }}>
                                <Image style={{ marginStart: 10, }} source={require('../../assets/images/edit_mobile.png')} resizeMode='contain' />
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{ flexDirection: 'row', marginStart: 40, marginEnd: 40, justifyContent: 'space-between' }}>

                            <View style={{ width: '10%', }}>
                                <TextField
                                    containerStyle={{ backgroundColor: SECONDARY_COLOR }}
                                    style={{ textAlign: 'center' }}
                                    baseColor='#979797'
                                    tintColor={PRIMARY_COLOR}
                                    multiline={false}
                                    keyboardType='phone-pad'
                                    lineWidth={1}
                                    maxLength={1}
                                    onChangeText={value => this.onFirstOTPTextChanged(value)}
                                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                                    value={this.state.otp1}
                                />
                            </View>
                            <View style={{ width: '10%', }}>
                                <TextField
                                    containerStyle={{ backgroundColor: SECONDARY_COLOR }}
                                    style={{ textAlign: 'center' }}
                                    baseColor='#979797'
                                    tintColor={PRIMARY_COLOR}
                                    multiline={false}
                                    keyboardType='phone-pad'
                                    lineWidth={1}
                                    maxLength={1}
                                    onChangeText={value => this.onSecondOTPTextChanged(value)}
                                    onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                                    value={this.state.otp2}
                                    ref={(input) => { this.secondTextInput = input; }}
                                />
                            </View>
                            <View style={{ width: '10%', }}>
                                <TextField
                                    containerStyle={{ backgroundColor: SECONDARY_COLOR }}
                                    style={{ textAlign: 'center' }}
                                    baseColor='#979797'
                                    tintColor={PRIMARY_COLOR}
                                    multiline={false}
                                    keyboardType='phone-pad'
                                    lineWidth={1}
                                    maxLength={1}
                                    onChangeText={value => this.onThirdOTPTextChanged(value)}
                                    onSubmitEditing={() => { this.sforthTextInput.focus(); }}
                                    value={this.state.otp3}
                                    ref={(input) => { this.thirdTextInput = input; }}
                                />
                            </View>
                            <View style={{ width: '10%', }}>
                                <TextField
                                    containerStyle={{ backgroundColor: SECONDARY_COLOR }}
                                    style={{ textAlign: 'center' }}
                                    baseColor='#979797'
                                    tintColor={PRIMARY_COLOR}
                                    multiline={false}
                                    lineWidth={1}
                                    maxLength={1}
                                    keyboardType='phone-pad'
                                    onChangeText={value => this.onForthOTPTextChanged(value)}
                                    value={this.state.otp4}
                                    ref={(input) => { this.forthTextInput = input; }}
                                />
                            </View>
                        </View>
                        <Button onClick={this.verifyOTP.bind(this)} text={Strings.Next} enable={this.state.btnEnable} />
                        <LoginAssistance
                        />
                    </View>
                </View>
                {this.getProgressView()}
            </View>
        );
    }

}   