import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import Button from '../../components/Button';

export default class UploadThankYouView extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                <Image
                    style={{
                        height: 100, width: 100,
                    }}
                    source={require('../../assets/images/tick_success.png')}
                    resizeMode='contain'
                />
                <Text style={{ fontSize:18, margin:10, textAlign:'center' }}>Your post was successfully uploaded</Text>
                <View style={{ width: '100%',position:'absolute', bottom:0 }}>
                    <Button onClick={this.props.openNextScreen} text='Done' enable={true}/>
                </View>
            </View>
        );
    }
}