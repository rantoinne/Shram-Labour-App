import React, { Component } from 'react';
import { View } from 'react-native';
import FeedsView from './View/FeedsView';
import { parent } from './../styles/styles'
import * as Constants from '../util/Constants';
import * as APICalls from '../services/APICalls';
import Toast from 'react-native-simple-toast';
import { CommonActions } from '@react-navigation/native';

export default class Feeds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showProgress: false
        };
    }

    render() {
        return (
            <View style={parent.container}>
                <FeedsView
                    showProgress={this.state.showProgress}
                />
            </View>
        );
    }
}