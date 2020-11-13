import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { parent, jobsDetailStyles } from '../styles/styles';
import { Strings } from '../config/Languages';
import { APP_BACKGROUND, APP_WHITE, MEDIUM_GRAY, LIGHT_GRAY, SUCCESS, DANGER } from '../styles/colors';

export default class JobsDetailView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSuccess : props.offerStatus ? props.offerStatus : 0
        }
    }

    onViewDetail() {
        this.props.navigation.navigate('JobsDescription');
    }

    changeCurrentStatus = (value) => {
        if(value==1) {
            this.props.fetchOfferStatus(1, this.props.componentId);
            this.setState({isSuccess : 1});
        } else {
            this.props.fetchOfferStatus(2, this.props.componentId);
            this.setState({isSuccess : 2});
        }
    }

    render() {

        return (
            <View style={{ height: 180, width: '100%',padding:3,marginBottom:10, alignItems:'center',borderRadius:12, marginTop:5, backgroundColor:this.state.isSuccess != 0 ? (this.state.isSuccess == 1 ? DANGER : SUCCESS ) : MEDIUM_GRAY }}>
                <View style={{ height:130, width:'100%',padding:10, flexDirection:'row',borderRadius:10, backgroundColor:APP_WHITE }}>
                    <View style={{flexDirection:'column', width:'70%'}}>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                            <Text style={[jobsDetailStyles.textTitle, { width: '40%' }]}>{Strings.Job_Title}:</Text>
                            <Text style={jobsDetailStyles.textInfo}> {Strings.Company_Name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <Text style={[jobsDetailStyles.textTitle, { width: '40%' }]}>{Strings.Location}:</Text>
                            <Text style={jobsDetailStyles.textInfo}> {Strings.Bangaluru}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <Text style={[jobsDetailStyles.textTitle, { width: '40%' }]}>{Strings.Job_Type}:</Text>
                            <Text style={jobsDetailStyles.textInfo}> {Strings.Mason}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <Text style={[jobsDetailStyles.textTitle, { width: '40%' }]}>{Strings.Offered}:</Text>
                            <Text style={jobsDetailStyles.textInfo}> {'\u20B9'} 25,000</Text>
                        </View>

                    </View>
                    <View style={{ width:'30%', alignItems:'flex-end', marginTop:7}}>
                        <TouchableWithoutFeedback onPress={() => this.onViewDetail()}>
                            <View style={{borderColor:APP_BACKGROUND, alignItems:'center',justifyContent:'center', flexDirection:'row', borderWidth:2, borderRadius:20, height:30, width:75}}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: MEDIUM_GRAY }}>{Strings.View}</Text>
                                <Image
                                    style={{
                                        height: 14, width: 14, marginLeft:7, marginTop:2
                                    }}
                                    source={require('../assets/images/view.png')}
                                />
                            </View>    
                        </TouchableWithoutFeedback>
                    </View>

                </View>
                <View style={{width:'100%',alignItems:'center',justifyContent:'center', height:45}}>
                    { this.state.isSuccess == 0 ? (
                        <View style={{flexDirection:'row'}}>
                            <TouchableWithoutFeedback onPress={() => this.changeCurrentStatus(1)}>
                                <View style={{flexDirection:'row',flex:1,justifyContent:'center',alignItems:'center'}}>
                                   <View style={{backgroundColor:APP_WHITE,height: 20, width: 20,marginRight:10, borderRadius:30}}>
                                       <Image
                                            style={{
                                                height: 10, width: 10,marginTop:5,marginLeft:5
                                            }}
                                            source={require('../assets/images/cancel.png')}
                                        /> 
                                    </View>
                                    <Text style={jobsDetailStyles.buttonText}>{Strings.Reject}</Text>
                                </View>
                            </TouchableWithoutFeedback>    
                            
                            <TouchableWithoutFeedback onPress={() => this.changeCurrentStatus(2)}>
                                <View style={{flexDirection:'row',flex:1,justifyContent:'center',alignItems:'center', borderLeftWidth:2, borderColor:APP_WHITE}}>
                                   <View style={{backgroundColor:APP_WHITE,height: 20, width: 20,marginRight:10, borderRadius:30}}>
                                       <Image
                                            style={{
                                                height: 10, width: 10,marginTop:5,marginLeft:5
                                            }}
                                            source={require('../assets/images/check.png')}
                                        /> 
                                    </View>
                                    <Text style={jobsDetailStyles.buttonText}>{Strings.Accept}</Text>
                                </View>
                            </TouchableWithoutFeedback>    

                        </View>
                      ) : (
                          this.state.isSuccess == 1 ? (
                            <View style={{flexDirection:'row',flex:1,justifyContent:'center',alignItems:'center'}}>
                               <View style={{backgroundColor:APP_WHITE,height: 20, width: 20,marginRight:10, borderRadius:30}}>
                                   <Image
                                        style={{
                                            height: 10, width: 10,marginTop:5,marginLeft:5
                                        }}
                                        source={require('../assets/images/cancel.png')}
                                    /> 
                                </View>
                                <Text style={jobsDetailStyles.buttonText}>{Strings.Rejected}</Text>
                            </View>
                          ) : (
                            <View style={{flexDirection:'row',flex:1,justifyContent:'center',alignItems:'center'}}>
                               <View style={{backgroundColor:APP_WHITE,height: 20, width: 20,marginRight:10, borderRadius:30}}>
                                   <Image
                                        style={{
                                            height: 10, width: 10,marginTop:5,marginLeft:5
                                        }}
                                        source={require('../assets/images/cancel.png')}
                                    /> 
                                </View>
                                <Text style={jobsDetailStyles.buttonText}>{Strings.Accepted}</Text>
                            </View>
                          )
                      )
                    }  
                </View>
            </View>
        );
    }    
}