import React, { Component } from 'react';
import { Text, View } from 'react-native';
import IndustryView from './View/IndustryView';
import { parent } from './../styles/styles'
import * as Constants from './../util/Constants';
import * as APICalls from '../services/APICalls';
import Toast from 'react-native-simple-toast';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Industry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '',
            showProgress: false,
        };
    }

    selectIt = (value) => {
        console.log(value);
        AsyncStorage.setItem(Constants.INDUSTRY, value);
        this.setState({ selectedTab: value });
        this.props.navigation.navigate('Construction');
    }

    onSkip = () => {
        AsyncStorage.multiGet([Constants.LANGUAGE, Constants.ROLE]).then(response => {

            this.language = [];
            this.role = [];
            this.industry = [];

            if (response[0][1]) {
                this.language.push(response[0][1]);
            }

            if (response[1][1]) {
                this.role.push(response[1][1]);
            }

            this.industry.push(this.state.selectedTab);

            let params = {
                appLanguage: this.language,
                role: this.role,
                industry:this.industry 
            }
            this.setState({ showProgress: true })

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
                <IndustryView
                    selectIt={this.selectIt.bind(this)}
                    selectedTab={this.state.selectedTab}
                    navigation={this.props.navigation}
                    skip={this.onSkip}
                    showProgress={this.state.showProgress}
                />
            </View>
        );
    }
}