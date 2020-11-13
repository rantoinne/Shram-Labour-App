import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableWithoutFeedback } from 'react-native';
import { parent, fontSize } from './../../styles/styles'
import Button from '../../components/Button';
import LoginAssistance from '../../components/LoginAssistance';
import * as Progress from 'react-native-progress';
import * as AppConstants from '../../config/AppConstants';
import { Strings } from '../../config/Languages';
import {
    TextField
} from '@softmedialab/react-native-material-textfield';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/colors';

export default class MobileNumberView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            otp: '',
            btnEnable: false
        };
    }

    onMobileTextChanged(value) {
        var regex = AppConstants.ONLY_INT_REGEX;
        if (value.length == 0) {
            this.setState({
                number: value
            });
        } else if (regex.test(value)) {
            this.flag = (value.length == 10) ? true : false;
            this.setState({
                number: value,
                btnEnable: this.flag
            });
        }
    }

    signUP() {
        var regex = AppConstants.MOBILE_REGEX;
        var text = this.state.number;
        if (this.state.number.length == 10 && regex.test(text)) {
            let params = {
                phoneNumber: this.state.number,
            }
            this.props.getOTP(params);
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
        console.log('Strings.Login_Or_Signup', Strings);
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, margin: 20 }}>
                    <TouchableWithoutFeedback onPress={() => { this.props.navigation.goBack(null) }}>
                        <Image style={{ width: 16, height: 16 }} source={require('../../assets/images/back_button.png')} />
                    </TouchableWithoutFeedback>
                    <View style={[parent.container]}>
                        <Text style={[fontSize.font_20, { fontWeight: 'bold' }]}>{Strings.Login_Or_Signup}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Image style={{ marginBottom: 10, }} source={require('../../assets/images/mobile.png')} resizeMode='contain' />
                            <View style={{ width: '10%', marginStart: 10, }}>
                                <TextField
                                    containerStyle={{ backgroundColor: SECONDARY_COLOR }}
                                    baseColor='black'
                                    tintColor='black'
                                    editable={false}
                                    multiline={false}
                                    value='+91'
                                    lineWidth={1}
                                />
                            </View>
                            <View style={{ flex: 1, marginStart: 10, }}>
                                <TextField
                                    label={Strings.Mobile_No_Input}
                                    keyboardType='phone-pad'
                                    ref={this.fieldRef}
                                    containerStyle={{ backgroundColor: SECONDARY_COLOR }}
                                    baseColor='#979797'
                                    tintColor= {PRIMARY_COLOR}
                                    multiline={false}
                                    onChangeText={value => this.onMobileTextChanged(value)}
                                    value={this.state.number}
                                    maxLength={10}
                                />
                            </View>
                        </View>
                        <Button onClick={this.signUP.bind(this)} text={Strings.Next} enable={this.state.btnEnable} />
                        <LoginAssistance
                        />
                    </View>
                </View>
                {this.getProgressView()}
            </View>
        );
    }

}   