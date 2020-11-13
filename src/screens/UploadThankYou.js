import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, Alert, BackHandler } from 'react-native';
import UploadThankYouView from './View/UploadThankYouView';
import { SECONDARY_COLOR } from '../styles/colors';


export default class UploadVideoThankYou extends Component {

    constructor(props) {
        super(props);
    }

    backAction = () => {
        this.props.navigation.popToTop();
        return true;
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }

    openNextScreen() {
        this.props.navigation.popToTop();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: SECONDARY_COLOR }}>
                <UploadThankYouView
                    openNextScreen={this.openNextScreen.bind(this)}
                />
            </View>
        );
    }
}