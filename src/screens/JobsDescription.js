import React, { Component } from 'react';
import { View } from 'react-native';
import JobsDescriptionView from './View/JobsDescriptionView';
import { parent } from './../styles/styles'
import * as Constants from '../util/Constants';
import * as APICalls from '../services/APICalls';
import Toast from 'react-native-simple-toast';
import { CommonActions } from '@react-navigation/native';

export default class JobsDescription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showProgress: false,
            // selectedTab : 'description'
        };
    }

    render() {
        return (
            <View style={parent.container}>
                <JobsDescriptionView
                    showProgress={this.state.showProgress}
                    navigation = {this.props.navigation}

                    // selectedTab = {this.state.selectedTab}
                />
            </View>
        );
    }
}