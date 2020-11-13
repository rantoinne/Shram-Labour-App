import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function SignUpFooter(props) {

    return (
        <TouchableOpacity
            onPress={() => props.onclick()}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', marginRight: 20 }}>

            <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#9d9d9d' }}>{props.language.Skip}</Text>
            <Image
                style={{
                    height: 12, width: 12, marginStart:2,
                    resizeMode:'contain',
                    alignSelf:'center'
                }}
                source={require('../assets/images/skipArrow.png')}
            />
        </TouchableOpacity>
    );
}

