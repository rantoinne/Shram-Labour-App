import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import GenderAgeView from './View/GenderAgeView';
import { parent } from './../styles/styles';
import * as Constants from './../util/Constants';
import * as APICalls from '../services/APICalls';
import Toast from 'react-native-simple-toast';
import { CommonActions } from '@react-navigation/native';

const age = []

export default class GenderAge extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: null,
            selectedAge: '18',
            age: [],
            gender: '',
            btnEnable: false,
            showProgress: false,
        };
    }

    async componentDidMount() {
        for (var i = 18; i < 75; i++) {
            age.push(i.toString());
        }
        this.setState({ age: age })
        console.log(age.length);
    }

    selectIt = (tab, value) => {
        // console.log(value + " sa " + tab);
        this.setState({ selectedTab: tab, gender: value, btnEnable: true });
    }

    selectAge = (value) => {
        // console.log('age ' + value);
        this.setState({ selectedAge: value });
    }

    continue = () => {
        AsyncStorage.multiSet([[Constants.GENDER, this.state.gender], [Constants.AGE, this.state.selectedAge]]).then(response => {
            this.props.navigation.navigate('NameAndAddress');
        })
    }

    onSkip = () => {
        AsyncStorage.multiGet([Constants.LANGUAGE, Constants.ROLE, Constants.INDUSTRY, Constants.TRADE]).then(response => {

            this.language = [];
            this.role = [];
            this.industry = [];
            this.trade = [];
            this.gender = '';
            this.emailId = '';
            this.age = parseInt(this.state.selectedAge, 10);
            if (response[0][1]) {
                this.language.push(response[0][1]);
            }

            if (response[1][1]) {
                this.role.push(response[1][1]);
            }

            if (response[2][1]) {
                this.industry.push(response[2][1]);
            }

            if (response[3][1]) {
                this.trade.push(response[3][1]);
            }

            let params = {
                appLanguage: this.language,
                role: this.role,
                industry: this.industry,
                trade: this.trade,
                gender: this.state.gender,
                age: this.age
            }
            this.setState({ showProgress: true })

            APICalls.updateProfile(params,
                this.onProfileUpdateSuccess.bind(this),
                this.onProfileUpdateFailure.bind(this)
            );
        })
    }

    onProfileUpdateSuccess(response) {
        AsyncStorage.setItem(Constants.USER_DATA, JSON.stringify(response.data));
        this.setState({ showProgress: false });
        this.openHomeScreen();

    }

    onProfileUpdateFailure(response) {
        this.setState({ showProgress: false });
        Toast.show(response.message);
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

    render() {
        return (
            <View style={parent.container}>
                <GenderAgeView
                    selectIt={this.selectIt}
                    selectAge={this.selectAge}
                    selectedTab={this.state.selectedTab}
                    navigation={this.props.navigation}
                    selectedAge={this.state.selectedAge}
                    age={this.state.age}
                    continue={this.continue}
                    btnEnable={this.state.btnEnable}
                    skip={this.onSkip}
                    showProgress={this.state.showProgress}
                />
            </View>
        );
    }
}