import React, { Component } from 'react';
import { View } from 'react-native';
import JobsView from './View/JobsView';
import { parent } from './../styles/styles'
import * as Constants from '../util/Constants';
import * as APICalls from '../services/APICalls';
import Toast from 'react-native-simple-toast';
import { CommonActions } from '@react-navigation/native';
import { Strings } from '../config/Languages';

export default class Jobs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showProgress: false,
          
            offerStatus : null,
            offerStatusArray:[Strings.Accepted, Strings.Rejected, Strings.Not_Answered ],
            offerLocations: [Strings.Bangaluru, Strings.Mumbai, Strings.Delhi, Strings.Pune, Strings.Hyderabad],
            
            appliedRoleArray: [Strings.Mason, Strings.Plumber, Strings.Scaffolder, Strings.Welder, Strings.Carpenter, Strings.Bar_Bender],
            appliedSalaryArray: ['10-20k', '20-30k', '30-40k', '40-50k', '50-60k', 'Above 60k'],
            appliedJobTypeArray: [Strings.FullTime, Strings.PartTime],
            text: {}
        };
    }

    selectedAppliedDetails = (name, value) => {
        console.log(name);
        console.log(value);
    }

    selectedOfferDetails = (name, value) => {
        console.log(name);
        console.log(value);
    }

    render() {
        return (
            <View style={parent.container}>
                <JobsView
                    showProgress={this.state.showProgress}
                    navigation = {this.props.navigation}

                    offerStatusArray = {this.state.offerStatusArray}
                    offerLocations = {this.state.offerLocations}
                    selectedOfferDetails = {this.selectedOfferDetails.bind(this)}

                    appliedRoleArray = {this.state.appliedRoleArray}
                    appliedSalaryArray = {this.state.appliedSalaryArray}
                    appliedJobTypeArray = {this.state.appliedJobTypeArray}
                    selectedAppliedDetails = {this.selectedAppliedDetails.bind(this)}
                />
            </View>
        );
    }
}