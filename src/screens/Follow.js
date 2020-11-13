import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FollowView from './View/FollowView';
import { CommonActions } from '@react-navigation/native';
import { parent} from './../styles/styles'
import { SECONDARY_COLOR } from '../styles/colors';
export default class Follow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [{ Name: 'lorem', Title: 'lpsum', followed: false }, { Name: 'lorem', Title: 'lpsum', followed: false },
            { Name: 'lorem', Title: 'lpsum', followed: false }]
        };

    }

    likePost({ item, index }) {
        console.log('satyanhsu', item.value) 
        // let { posts } = this.state;
        // let targetPost = posts[index];
        // targetPost.liked = !targetPost.liked;
        // posts[index] = targetPost;
        // this.setState({ posts });
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor: SECONDARY_COLOR}}>
                <FollowView data={this.state.posts}  onLikeClick={this.likePost.bind(this)} />
            </View>
        );
    }
}