import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { parent, header, fontSize } from '../styles/styles';

import {PRIMARY_COLOR} from '../styles/colors';

export default class AppHeader extends Component {

    constructor(props) {
        super(props);
    }

    onClick() {
        this.props.navigation.goBack(null);
    }

    render() {
        return (
            <View style={{ height: 60, width: '100%', flexDirection: 'row', }}>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', backgroundColor: PRIMARY_COLOR }}>
                    <View style={{ width: '65%', flexDirection: 'row' }}>
                        {this.props.showBackButton ? (
                            <TouchableWithoutFeedback onPress={() => this.onClick()}>
                                <Image
                                    style={{
                                        height: 16, width: 16, marginStart: 15, alignSelf: 'center'
                                    }}
                                    source={require('../assets/images/white_back_button.png')}
                                />
                            </TouchableWithoutFeedback>) : (
                                <View ></View>
                            )}
                        <Text
                            style={{
                                fontSize: 20, marginStart: 15, color: '#fff'
                            }}
                        >{this.props.title ? this.props.title : 'Some text'}</Text>
                    </View>

                    <View style={{ width: '35%', flexDirection: 'row' }}>
                        <TouchableWithoutFeedback>
                            <Image
                                style={{
                                    height: 25, width: 25, marginStart: 15, alignSelf: 'center'
                                }}
                                source={require('../assets/images/search_tab.png')}
                            />
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback>
                            <Image
                                style={{
                                    height: 20, width: 20, marginStart: 15, alignSelf: 'center'
                                }}
                                source={require('../assets/images/bell_icon.png')}
                            />
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback>
                            <Image
                                style={{
                                    height: 25, width: 25, marginStart: 15, alignSelf: 'center'
                                }}
                                source={require('../assets/images/profile.png')}
                            />
                        </TouchableWithoutFeedback>
                    </View>

                </View>
            </View>
        );
    }
}

