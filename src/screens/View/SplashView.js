import React from 'react';
import { Text, View, ImageBackground,Image } from 'react-native';
import { PRIMARY_COLOR } from '../../styles/colors';

export default function SplashView() {
    return (
        <View style={{ flex: 1, backgroundColor: PRIMARY_COLOR,justifyContent:'center', alignContent:'center'}}>
            <Image style={{
                alignSelf:'center'
            }}
                source={require('../../assets/images/shram_splash.png')} >
            </Image>
            <Image style={{
                alignSelf:'center',
                marginTop:10
            }}
                source={require('../../assets/images/shram_text.png')} >
            </Image>
            <Image style={{
                alignSelf:'center',
                bottom:0,
                position:'absolute',
                marginBottom:40
            }}
                source={require('../../assets/images/co_name.png')} >
            </Image>
        </View>
    );
}