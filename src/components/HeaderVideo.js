import React from 'react';
import { Text, View, Image } from 'react-native';
import { parent, header, fontSize } from '../styles/styles'

export default function HeaderVideo() {
    return (
        <View style={header.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Image
                    style={header.logo}
                    source={require('../assets/images/gradient.png')}
                />
                <Text style={fontSize.font_18}>Shram</Text>
            </View>
        </View>
    );
}
