import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Strings } from '../config/Languages';

export default class LoginAssistance extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = async() => {
    }

    render() {
        this.isEnable = this.props.enable ? this.props.enable : false;
        return (
            <View style={{  alignItems: 'center', alignSelf: 'center', position: 'absolute', bottom: 20,fontWeight: 'medium'}}>
                <Text style={{ color: '#979797', fontSize: 12 }}>{Strings.Login_Assistance_Text1}</Text>
                <Text style={{ color: '#979797', fontSize: 12 }}>{Strings.Login_Assistance_Text2}</Text>
                <Text style={{ color: '#171717', fontSize: 18 }}>1860-234-4567</Text>
            </View>
        )
    }

}