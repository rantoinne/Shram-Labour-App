import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { border, curveButton, buttonContainer, margin } from '../styles/styles'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../styles/colors';

export default class Button extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.text = props.text ? props.text : 'Some text';
    }

    onClick() {
        if (this.isEnable) {
            this.props.onClick();
        }
    }

    render() {
        this.isEnable = this.props.enable ? this.props.enable : false;
        return (
            <TouchableOpacity style={[buttonContainer.button, margin.margin_40, { backgroundColor: this.isEnable ? PRIMARY_COLOR : '#DADADA' }]}
                onPress={this.onClick}>
                <Text style={[buttonContainer.text, { color: this.isEnable ? SECONDARY_COLOR : '#C4C4C4' }]}>{this.props.text ? this.props.text : 'Some text'}  </Text>
            </TouchableOpacity>
        )
    }

}