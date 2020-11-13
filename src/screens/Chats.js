import React, { Component } from 'react';
import { View } from 'react-native';
import ChatsView from './View/ChatsView';
import { parent } from './../styles/styles'
import * as Constants from '../util/Constants';
import * as APICalls from '../services/APICalls';
import Toast from 'react-native-simple-toast';
import { CommonActions } from '@react-navigation/native';

export default class Chats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showProgress: false
        };
    }

    render() {
        return (
            <View style={parent.container}>
                <ChatsView
                    showProgress={this.state.showProgress}
                />
            </View>
        );
    }
}