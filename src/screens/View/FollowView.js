import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video'
import { parent, margin, fontSize, border, Alert } from './../../styles/styles'
import { SECONDARY_COLOR } from '../../styles/colors';

export default class FollowView extends Component {

  constructor(props) {
    super(props);
  }

  renderPost({ item, index }) {
    return (
      <View style={{ flex: 1, margin: 10,flexDirection:'row' , justifyContent:'space-between'}}>
        <View style={{padding:10}}>
          <Text style={{ fontSize: 14 }}>{item.Name}</Text>
          <Text style={{ fontSize: 12, color: 'gray' }}>{item.Title}</Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={{ fontSize: 14, backgroundColor:'#098bdb', color: SECONDARY_COLOR, paddingTop:5,paddingBottom:5,paddingStart:10,paddingEnd:10  }}>Follow</Text>
        </View>
      </View>
    );

  }

  render() {
    return (
      <View >
        <FlatList data={this.props.data} renderItem={this.renderPost.bind(this)} />
      </View>
    );
  }
}