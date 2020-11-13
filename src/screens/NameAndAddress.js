import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import NameAndAddressView from './View/NameAndAddressView';
import { parent } from './../styles/styles';
import * as Constants from './../util/Constants';
import * as APICalls from '../services/APICalls';
import Toast from 'react-native-simple-toast';
import { CommonActions } from '@react-navigation/native';

const age = []

export default class NameAndAddress extends Component {

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
        this.setState({ age: age });
    }

    selectIt = (tab, value) => {
        this.setState({ selectedTab: tab, gender: value, btnEnable: true });
    }

    selectAge = (value) => {
        this.setState({ selectedAge: value });
    }

    continue = (name, email, _pincode, avatar) => {

        AsyncStorage.multiGet([Constants.LANGUAGE, Constants.ROLE, Constants.AGE, Constants.GENDER, Constants.INDUSTRY, Constants.TRADE]).then(response => {

            this.language = [];
            this.role = [];
            this.industry = [];
            this.trade = [];
            this.gender = '';
            this.emailId = '';
            this.age = '';
            if (response[0][1]) {
                this.language.push(response[0][1]);
            }

            if (response[1][1]) {
                this.role.push(response[1][1]);
            }

            if (response[2][1]) {
                this.age = parseInt(response[2][1], 10);
            }

            if (response[3][1]) {
                this.gender = response[3][1];
            }

            if (response[4][1]) {
                this.industry.push(response[4][1]);
            }

            if (response[5][1]) {
                this.trade.push(response[5][1]);
            }

            let params = {
                appLanguage: this.language,
                role: this.role,
                industry: this.industry,
                trade: this.trade,
                gender: this.gender,
                firstName: name,
                emailId: email,
                perLocation: {
                    city: "",
                    pincode: _pincode
                },
                age: this.age
            }

            this.setState({ showProgress: true });
            if (avatar && avatar.length > 0) {
                this.params = params;
                APICalls.upLoadImage(avatar,
                    this.onImageSuccess.bind(this),
                    this.onImageFailure.bind(this)
                );
            } else {
                APICalls.updateProfile(params,
                    this.onProfileUpdateSuccess.bind(this),
                    this.onProfileUpdateFailure.bind(this)
                );
            }
        })
    }

    onImageSuccess(response) {
        this.imageUrl = response.data.imageUrl;
        console.log('sam =' + this.imageUrl);
        this.params.avatar = this.imageUrl;
        APICalls.updateProfile(this.params,
            this.onProfileUpdateSuccess.bind(this),
            this.onProfileUpdateFailure.bind(this)
        );
    }

    onImageFailure(response) {
        this.setState({ showProgress: false });
        Toast.show(response.message);
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
                <NameAndAddressView
                    selectIt={this.selectIt}
                    selectAge={this.selectAge}
                    selectedTab={this.state.selectedTab}
                    navigation={this.props.navigation}
                    selectedAge={this.state.selectedAge}
                    age={this.state.age}
                    continue={this.continue}
                    btnEnable={this.state.btnEnable}
                    showProgress={this.state.showProgress}
                />
            </View>
        );
    }
}