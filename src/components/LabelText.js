import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { parent, header, fontSize } from '../styles/styles'

export default function LabelText(props) {

    return (
        <View >
            <Text style={[fontSize.font_14, props.style]}>{props.text ? props.text : ''}</Text>
        </View>
    );
}

