import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { parent } from '../../styles/styles';
import AppHeader from '../../components/AppHeader';
import * as Progress from 'react-native-progress';
import { SECONDARY_COLOR } from '../../styles/colors';

export default class FeedsView extends Component {

    constructor(props) {
        super(props);
    }

    getProgressView() {
        if (this.props.showProgress) {
            return (
                <View style={parent.progress}>
                    <Progress.Circle
                        size={50}
                        indeterminate={true}
                        color={['white']}
                    />
                </View>
            );
        }
    }

    render() {

        return (
            <View style={parent.container}>
                <AppHeader title={'Shram'} navigation={this.props.navigation}/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ alignItems: 'center',marginTop:350, flex: 1}}>
                        <Text style={{fontSize:25, fontWeight:'bold'}}>Feeds screen</Text>
                    </View>
                </ScrollView>
                {this.getProgressView()}
            </View>
        );
    }
}

