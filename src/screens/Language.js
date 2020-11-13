import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LanguageView from './View/LanguageView';
import * as Constants from '../util/Constants';
import { Strings } from '../config/Languages';

export default class Language extends Component {

    async onLanguageSelect(language) {
        AsyncStorage.setItem(Constants.LANGUAGE, language);
        Strings.setLanguage(language);

        this.props.navigation.navigate('MobileNumber');
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <LanguageView onLanguageSelect={this.onLanguageSelect.bind(this)} />
            </View>
        )
    }
}