import React, { Component } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import YouAreAShramikView from './View/YouAreAShramikView';
import { parent } from './../styles/styles'
import * as Constants from '../util/Constants';
import * as APICalls from '../services/APICalls';
import Toast from 'react-native-simple-toast';
import { CommonActions } from '@react-navigation/native';

export default class YouAreAShramik extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: null,
            showProgress: false,
        };
    }

    selectIt = (tab, value) => {
        console.log(value);
        AsyncStorage.setItem(Constants.ROLE, value);
        this.setState({ selectedTab: tab });
        if (tab == 1)
            this.props.navigation.navigate('Industry');
    }

    onSkip = () => {
        AsyncStorage.multiGet([Constants.LANGUAGE]).then(response => {

            this.language = [];
            this.role = [];
            if (response[0][1]) {
                this.language.push(response[0][1]);
            }

            this.role.push('Shramik');

            let params = {
                appLanguage: this.language,
                role: this.role,
            }
        this.setState({showProgress:true})

            APICalls.updateProfile(params,
                this.onProfileUpdateSuccess.bind(this),
                this.onProfileUpdateFailure.bind(this)
            );
        })
    }

    onProfileUpdateSuccess(response) {
        console.log('sam =' + JSON.stringify(response.data));
        AsyncStorage.setItem(Constants.USER_DATA, JSON.stringify(response.data));
        this.setState({ showProgress: false });
        this.openHomeScreen();
    }

    openHomeScreen() {
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [
                { name: 'MainScreenNavigator' }
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    onProfileUpdateFailure(response) {
        this.setState({ showProgress: false });
        Toast.show(response.message);
    }

    render() {
        return (
            <View style={parent.container}>
                <YouAreAShramikView
                    selectIt={this.selectIt.bind(this)}
                    selectedTab={this.state.selectedTab}
                    skip={this.onSkip}
                    showProgress={this.state.showProgress}
                    navigation={this.props.navigation}
                />
            </View>
        );
    }
}