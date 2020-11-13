import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RecommendedView from './View/RecommendedView';
import { CommonActions } from '@react-navigation/native';
import { parent} from './../styles/styles'
export default class Recommended extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={parent.container}>
                <RecommendedView  />
            </View>
        );
    }
}