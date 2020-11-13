import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import PopularView from './View/PopularView';
import { parent, margin } from './../styles/styles'
import * as APICalls from '../services/APICalls';
import Toast from 'react-native-simple-toast';
import * as Progress from 'react-native-progress';


export default class Popular extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
            ],
            showProgress: false,
            play: false,
            text: {}
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

    async componentDidMount() {
        this.setState({ showProgress: true });
        let params = {
            limit: 10,
            type: 'popular'
        }
        APICalls.getAllPOST(params,
            this.onSuccess.bind(this),
            this.onFailure.bind(this)
        );
    }

    onblur(flag) {
        console.log('onblur'+flag);
        this.setState({ play: flag })
    }

    onSuccess(response) {
        console.log(response);
        this.setState({ posts: response.data.post, showProgress: false });
    }

    onFailure(response) {
        console.log(response);
        this.setState({ showProgress: false });
        Toast.show(response.message);
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
            <View style={{ flex: 1 }}>
                <View style={[{ flex: 1 }, { backgroundColor: 'trasparent' }]}>
                    <PopularView data={this.state.posts}
                        onLikeClick={this.likePost.bind(this)}
                        showProgress={this.state.showProgress}
                        navigation={this.props.navigation}
                        onblur={this.onblur.bind(this)} 
                        play ={this.state.play}/>
                </View>
                {this.getProgressView()}
            </View>
        );
    }
}