import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions } from '@react-navigation/native';
import SplashView from './View/SplashView';
import * as Constants from '../util/Constants';

const SplashWaitTime = 100;

export default class Splash extends Component {

    componentDidMount() {
        AsyncStorage.getItem(Constants.ACCESS_TOKEN).then((token) => {
            setTimeout(() => {
                if (token) {
                    this.openHomeScreen();
                }else{
                    this.openLanguageScreen();
                }
            }, SplashWaitTime);
        });

    }

    openLanguageScreen() {
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [
                { name: 'Language' }
                // { name: 'MainScreenNavigator' }
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    openHomeScreen() {
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [
                // { name: 'HomeNavigator' }
                { name: 'MainScreenNavigator' }
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    openLoginScreen() {
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [
                { name: 'AuthenticationNavigator' }
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <SplashView />
            </View>
        )
    }
}