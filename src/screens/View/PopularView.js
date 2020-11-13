import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback, Dimensions, ScrollView } from 'react-native';
import Video from 'react-native-video';
import { parent, margin, fontSize, border, Alert, jobsInProfileViewStyle } from './../../styles/styles';
import InViewPort from '../InViewport.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Viewport } from '@skele/components'
import { PRIMARY_COLOR, BLACK_COLOR, SECONDARY_COLOR } from '../../styles/colors';
import { Strings } from '../../config/Languages';

const { width, height } = Dimensions.get('window');
const ViewportAwareVideoPlayer = Viewport.Aware(Video);

var refs = new Array();

export default class PopularView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      currentIndex: -1
    };
  }

  handlePlaying = (isVisible) => {
    // isVisible ? this.player.resume() : this.player.pause();
  }

  onLoad = (index) => {
    console.log('play ' + index);
  }


  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('blur', (e) => {
      this.props.onblur(true);
      this.setState({
        currentIndex: -1,
      });
    })

    this.__unsubscribe = this.props.navigation.addListener('focus', (e) => {
      this.props.onblur(false);
    })
  }

  componentWillUnmount() {
    this._unsubscribe();
    this.__unsubscribe();
  }

  updatePlayerState = (type, index) => {
    if (type === 'ENTER') {
      this.setState({
        currentIndex: index,
      });
    }
  }

  renderPost() {
    const { currentIndex } = this.state;
    return this.props.data.map((item, index) => {
      const uri = { uri: item.mediaUrl }
      return (
        <View style={{ flex: 1, width: '100%', marginTop: 10, borderColor: '#D3D3D3', backgroundColor: SECONDARY_COLOR, borderWidth: 1, borderRadius: 10, }}>
          <Text style={{ margin: 10 }}>{item.caption}</Text>
          {
            item.type === 'video' ? (
              <ViewportAwareVideoPlayer
                source={uri}
                resizeMode="contain"
                preTriggerRatio={-0.5}
                style={{ width: '92%', height: height / 3, borderRadius: 8, alignSelf: 'center', backgroundColor: BLACK_COLOR }}
                paused={currentIndex === index ? false : true}
                onViewportEnter={() => this.updatePlayerState('ENTER', index)}
                poster={'https://images.unsplash.com/photo-1591090318005-a2ddba628b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                posterResizeMode="cover"
              />
            ) : (
                <Image style={{ width: width / 1.8, height: width / 2, alignSelf: 'center', resizeMode: 'contain' }} source={require('../../assets/images/like_filled.png')} />
              )
          }
          <View style={{ flex: 1, flexDirection: 'row', margin: 10, justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => this.props.onLikeClick({ item, index })}>
                <Image style={{ width: 20, height: 20, marginRight: 4 }} source={require('../../assets/images/like_filled.png')}></Image>
                <Text style={{ color: PRIMARY_COLOR }}>2.6k {Strings.views}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{ width: 20, height: 20, marginHorizontal: 10 }} source={require('../../assets/images/comment.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{ width: 20, height: 20, marginEnd: 10 }} source={require('../../assets/images/share.png')}></Image>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image style={{ width: 20, height: 20, marginEnd: 10 }} source={require('../../assets/images/whatsapp_filled.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ marginBottom: 10, marginStart: 10, fontSize: 12 }}>2hrs {Strings.Ago}</Text>
        </View>
      );
    });

  }

  renderJobs = (item, index) => {
    return this.props.data.map((item, index) => {
      return (
        <View style={jobsInProfileViewStyle.jobCardContainer}>
          <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/mason-dark.png')} />
          <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: width / 3, alignItems: 'center' }}>
              <Image style={{ width: 15, height: 15, resizeMode: 'contain', marginRight: 7 }} source={require('../../assets/images/job-type.png')} />
              <Text>
                {Strings.Mason}
              </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: width / 3, alignItems: 'center' }}>
              <Image style={{ width: 15, height: 15, resizeMode: 'contain', marginRight: 7 }} source={require('../../assets/images/location.png')} />
              <Text>
              {Strings.Mumbai}
              </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: width / 3, alignItems: 'center' }}>
              <Image style={{ width: 15, height: 15, resizeMode: 'contain', marginRight: 7 }} source={require('../../assets/images/rupees.png')} />
              <View style={{ width: width / 5, backgroundColor: PRIMARY_COLOR, borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: SECONDARY_COLOR }}>
                  15,500/pm
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    });
  }

  keyExtractor(item, index) {
    return index.toString();
  }


  render() {
    return (
      <>
        <View style={{ flexDirection: 'row', width, height: '24%', elevation: 4, backgroundColor: SECONDARY_COLOR, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 8 }}>
          <Text style={{ marginRight: 4 }}>{Strings.Jobs}</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {
              this.renderJobs()
            }
          </ScrollView>
        </View>

        <View style={{ height: '76%', paddingHorizontal: 10, backgroundColor: 'transparent' }}>
          <Viewport.Tracker>
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              {
                this.renderPost()
              }
            </ScrollView>
          </Viewport.Tracker>
        </View>
      </>
    );
  }
}
