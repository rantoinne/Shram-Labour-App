import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { parent, margin, fontSize, border,progress } from './../../styles/styles'
import Button from '../../components/Button';
import * as Progress from 'react-native-progress';
import { SECONDARY_COLOR } from '../../styles/colors';
export default class LoginView extends Component {

    constructor(props) {
        super(props);
        this.signUP = this.signUP.bind(this);
        this.state = {
            number: '',
            otp: '',
        };
    }

    onMobileTextChanged(value) {
        // code to remove non-numeric characters from text
        // this.setState({ number: value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') });
        if (value.length == 0) {
            this.setState({
                number: value
            });
        } else if (/^\d+$/.test(value)) {
            this.setState({
                number: value
            });
        }
    }

    onOTPTextChanged(value) {
        // code to remove non-numeric characters from text
        if (value.length == 0) {
            this.setState({
                otp: value
            });
        } else if (/^\d+$/.test(value)) {
            this.setState({
                otp: value
            });
        }
    }

    signUP() {
        if (this.props.previousPhoneNumber.length !== 0 && this.props.previousPhoneNumber === this.state.number) {
            if (this.state.number.length == 10 && this.state.otp.length == 4) {
                var _otp = parseInt(this.state.otp, 10);
                let params = {
                    phoneNumber: this.state.number,
                    otp: _otp
                }
                this.props.verifyOTP(params);
            }
        } else {
            let params = {
                phoneNumber: this.state.number,
            }
            if (this.state.number.length == 10) {
                this.props.getOTP(params);
            }
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

        this.text = 'Get OTP';
        if (this.props.previousPhoneNumber.length !== 0 && (this.props.previousPhoneNumber === this.state.number)) {
            this.text = 'Verify OTP';
        }

        return (
            <View style={[parent.container]}>
            <View style={[margin.margin_40]}>
                <Text style={fontSize.font_28}>Sign up</Text>
                <Text style={[fontSize.font_18, margin.marginTop_10]}>Enter your mobile number</Text>
                <TextInput style={border.curve}
                    underlineColorAndroid="transparent"
                    placeholder="Enter mobile number"
                    keyboardType='numeric'
                    placeholderTextColor="gray"
                    maxLength={10}
                    onChangeText={value => this.onMobileTextChanged(value)}
                    value={this.state.number} 
                />
                <Text style={[fontSize.font_18, margin.marginTop_10]}>OTP</Text>
                <TextInput style={border.curve}
                    placeholder="Enter OTP"
                    keyboardType='numeric'
                    placeholderTextColor="gray"
                    maxLength={4}
                    onChangeText={value => this.onOTPTextChanged(value)}
                    value={this.state.otp}
                />
                <Button onClick={this.signUP} text={this.text} />
               

            </View>
            {this.getProgressView()}
            </View>
        );
    }

}   