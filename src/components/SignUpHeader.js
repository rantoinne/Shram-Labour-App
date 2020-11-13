import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';

export default function SignUpHeader(props) {

    function onClick() {
        props.navigation.goBack(null);
    }

    return (

        <View style={{ height: 60, width: '100%', flexDirection: 'row' }}>

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text
                    style={{
                        alignSelf: 'center', fontSize: 20, fontWeight: 'bold',
                    }}
                >{props.title ? props.title : 'Some text'}</Text>

                {props.showBackButton ? (
                    <TouchableWithoutFeedback onPress={onClick}>
                        <Image
                            style={{
                                height: 16, width: 16, position: 'absolute', marginStart: 20
                            }}
                            source={require('../assets/images/back_button.png')}
                        />
                    </TouchableWithoutFeedback>
                ) : (
                        <View ></View>
                    )}

            </View>

        </View>
    );
}

