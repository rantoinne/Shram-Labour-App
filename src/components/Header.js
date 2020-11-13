import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { parent, header, fontSize } from '../styles/styles'

export default function Header(props) {

    function onClick() {
        props.navigation.goBack(null);
    }

    return (
        <View style={{ height: 60, width: '100%', flexDirection: 'row', }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text
                    style={{
                        alignSelf: 'center', fontSize: 20
                    }}
                >{props.title ? props.title : 'Some text'}</Text>
                <TouchableWithoutFeedback onPress={onClick}>
                    <Image
                        style={{
                            height: 16, width: 16, position: 'absolute', marginStart: 20
                        }}
                        source={require('../assets/images/back_button.png')}
                    />
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

