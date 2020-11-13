import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { margin, fontSize, cardContainer } from './../../styles/styles';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/colors';

export default class LanguageView extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            selectedLanguage: '',
        })
    }

    onSelected(language) {
        this.setState({ 
            selectedLanguage: language
        });
        this.props.onLanguageSelect(language);
    }

    render() {
        return (
            <View style={{ flex: 1, margin: 20 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[fontSize.font_20, { alignSelf: 'center', fontWeight: 'bold' }]}>Select App Language</Text>
                    <TouchableWithoutFeedback onPress={() => this.onSelected('English')}>
                        <View style={[cardContainer.card, margin.marginTop_20, { height: 80, backgroundColor: this.state.selectedLanguage === 'English' ? PRIMARY_COLOR : SECONDARY_COLOR }]}>
                            <View style={cardContainer.cardContent}>
                                <Text>English</Text>
                                <Text style={{ color: '#C4C4C4' }}>English</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableWithoutFeedback onPress={() => this.onSelected('Hindi')}>
                            <View style={[cardContainer.card, margin.marginTop_10, { height: 80, flex: 1, marginEnd: 5, backgroundColor: this.state.selectedLanguage === 'Hindi' ? PRIMARY_COLOR : SECONDARY_COLOR }]}>
                                <View style={cardContainer.cardContent}>
                                    <Text>Hindi</Text>
                                    <Text style={{ color: '#C4C4C4' }}>हिन्दी</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={[cardContainer.card, margin.marginTop_10, { height: 80, flex: 1, marginStart: 5 }]}>
                            <View style={cardContainer.cardContent}>
                                <Text>Marathi</Text>
                                <Text style={{ color: '#C4C4C4' }}>मराटी</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[cardContainer.card, margin.marginTop_10, { height: 80, flex: 1, marginEnd: 5 }]}>
                            <View style={cardContainer.cardContent}>
                                <Text>Oriya</Text>
                                <Text style={{ color: '#C4C4C4' }}>Oriya</Text>
                            </View>
                        </View>
                        <View style={[cardContainer.card, margin.marginTop_10, { height: 80, flex: 1, marginStart: 5 }]}>
                            <View style={cardContainer.cardContent}>
                                <Text>Tamil</Text>
                                <Text style={{ color: '#C4C4C4' }}>Tamil</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[cardContainer.card, margin.marginTop_10, { height: 80, flex: 1, marginEnd: 5 }]}>
                            <View style={cardContainer.cardContent}>
                                <Text>Kannada</Text>
                                <Text style={{ color: '#C4C4C4' }}>Kannada</Text>
                            </View>
                        </View>
                        <View style={[cardContainer.card, margin.marginTop_10, { height: 80, flex: 1, marginStart: 5 }]}>
                            <View style={cardContainer.cardContent}>
                                <Text>Telugu</Text>
                                <Text style={{ color: '#C4C4C4' }}>Telugu</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[cardContainer.card, margin.marginTop_10, { height: 80, flex: 1, marginEnd: 5 }]}>
                            <View style={cardContainer.cardContent}>
                                <Text>Malyalam</Text>
                                <Text style={{ color: '#C4C4C4' }}>Malyalam</Text>
                            </View>
                        </View>
                        <View style={[cardContainer.card, margin.marginTop_10, { height: 80, flex: 1, marginStart: 5 }]}>
                            <View style={cardContainer.cardContent}>
                                <Text>Bengali</Text>
                                <Text style={{ color: '#C4C4C4' }}>Bengali</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[cardContainer.card, margin.marginTop_10, { height: 80, flex: 1, marginEnd: 5 }]}>
                            <View style={cardContainer.cardContent}>
                                <Text>Gujarati</Text>
                                <Text style={{ color: '#C4C4C4' }}>Gujarati</Text>
                            </View>
                        </View>
                        <View style={[cardContainer.card, margin.marginTop_10, { height: 80, flex: 1, marginStart: 5 }]}>
                            <View style={cardContainer.cardContent}>
                                <Text>Punjabi</Text>
                                <Text style={{ color: '#C4C4C4' }}>Punjabi</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}