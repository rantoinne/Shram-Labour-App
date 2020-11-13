import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import { parent, JobsStyles,industryStyles } from '../../styles/styles';
import {PRIMARY_COLOR, APP_BACKGROUND, APP_WHITE, MEDIUM_GRAY, LIGHT_GRAY} from '../../util/Constants';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-community/picker';

import JobsDetailView from '../../components/JobsDetailView';
import { Strings } from '../../config/Languages';
import AppHeader from '../../components/AppHeader';
import * as Progress from 'react-native-progress';
export class BrowseView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewAllTypes: false
        }
    }

    render() {

        return (
            <View style={JobsStyles.bodyContainer}>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Text style={{fontSize:20,marginTop:5,marginLeft:5, fontWeight:'bold'}}>{Strings.Jobs_By_Type}</Text>
                        <View style={{marginTop:7,alignItems:'center', justifyContent:'center'}}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => this.props.selectTypeAndLocation('type', 'Mason')}
                                    style={[industryStyles.chooseCategoryBox, this.props.chosenType == 'Mason' ? { backgroundColor: '#E67E22' } : { backgroundColor: '#f9f8f6' }]}>
                                    <Image
                                        style={industryStyles.image}
                                        source={this.props.chosenType == 'Mason' ? require('../../assets/images/mason-light.png') : require('../../assets/images/mason-dark.png')}
                                    />
                                    <Text style={[industryStyles.textInsideBox, this.props.chosenType == 'Mason' ? { color: '#FFF' } : { color: '#dfdfdf' }]}>{Strings.Mason}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => this.props.selectTypeAndLocation('type','Plumber')}
                                    style={[industryStyles.chooseCategoryBox, this.props.chosenType == 'Plumber' ? { backgroundColor: '#E67E22' } : { backgroundColor: '#f9f8f6' }]}>
                                    <Image
                                        style={industryStyles.image}
                                        source={this.props.chosenType == 'Plumber' ? require('../../assets/images/plumber-light.png') : require('../../assets/images/plumber-dark.png')}
                                    />

                                    <Text style={[industryStyles.textInsideBox, this.props.chosenType == 'Plumber' ? { color: '#FFF' } : { color: '#dfdfdf' }]}>{Strings.Plumber}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => this.props.selectTypeAndLocation('type','Scaffolder')}
                                    style={[industryStyles.chooseCategoryBox, this.props.chosenType == 'Scaffolder' ? { backgroundColor: '#E67E22' } : { backgroundColor: '#f9f8f6' }]}>
                                    <Image
                                        style={industryStyles.image}
                                        source={this.props.chosenType == 'Scaffolder' ? require('../../assets/images/scaffolder-light.png') : require('../../assets/images/scaffolder-dark.png')}
                                    />

                                    <Text style={[industryStyles.textInsideBox, this.props.chosenType == 'Scaffolder' ? { color: '#FFF' } : { color: '#dfdfdf' }]}>{Strings.Scaffolder}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => this.props.selectTypeAndLocation('type','Welder')}
                                    style={[industryStyles.chooseCategoryBox, this.props.chosenType == 'Welder' ? { backgroundColor: '#E67E22' } : { backgroundColor: '#f9f8f6' }]}>
                                    <Image
                                        style={industryStyles.image}
                                        source={this.props.chosenType == 'Welder' ? require('../../assets/images/welder-light.png') : require('../../assets/images/welder-dark.png')}
                                    />

                                    <Text style={[industryStyles.textInsideBox, this.props.chosenType == 'Welder' ? { color: '#FFF' } : { color: '#dfdfdf' }]}>{Strings.Welder}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => this.props.selectTypeAndLocation('type','Carpender')}
                                    style={[industryStyles.chooseCategoryBox, this.props.chosenType == 'Carpender' ? { backgroundColor: '#E67E22' } : { backgroundColor: '#f9f8f6' }]}>
                                    <Image
                                        style={industryStyles.image}
                                        source={this.props.chosenType == 'Carpender' ? require('../../assets/images/carpenter-light.png') : require('../../assets/images/carpenter-dark.png')}
                                    />

                                    <Text style={[industryStyles.textInsideBox, this.props.chosenType == 'Carpender' ? { color: '#FFF' } : { color: '#dfdfdf' }]}>{Strings.Carpenter}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => this.props.selectTypeAndLocation('type','Bar Bender')}
                                    style={[industryStyles.chooseCategoryBox, this.props.chosenType == 'Bar Bender' ? { backgroundColor: '#E67E22' } : { backgroundColor: '#f9f8f6' }]}>
                                    <Image
                                        style={industryStyles.image}
                                        source={this.props.chosenType == 'Bar Bender' ? require('../../assets/images/barBender-light.png') : require('../../assets/images/barBender-dark.png')}
                                    />

                                    <Text style={[industryStyles.textInsideBox, this.props.chosenType == 'Bar Bender' ? { color: '#FFF' } : { color: '#dfdfdf' }]}>{Strings.Bar_Bender}</Text>
                                </TouchableOpacity>

                            </View>

                            {this.state.viewAllTypes ? (
                                <View style={{ flexDirection: 'row' }}>

                                    <TouchableOpacity
                                        onPress={() => this.props.selectTypeAndLocation('type','Water Proofer')}
                                        style={[industryStyles.chooseCategoryBox, this.props.chosenType == 'Water Proofer' ? { backgroundColor: '#E67E22' } : { backgroundColor: '#f9f8f6' }]}>
                                        <Image
                                            style={industryStyles.image}
                                            source={this.props.chosenType == 'Water Proofer' ? require('../../assets/images/waterProofer-light.png') : require('../../assets/images/waterProofer-dark.png')}
                                        />

                                        <Text style={[industryStyles.textInsideBox, this.props.chosenType == 'Water Proofer' ? { color: '#FFF' } : { color: '#dfdfdf' }]}>{Strings.Water_Proofer}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => this.props.selectTypeAndLocation('type','Electrician')}
                                        style={[industryStyles.chooseCategoryBox, this.props.chosenType == 'Electrician' ? { backgroundColor: '#E67E22' } : { backgroundColor: '#f9f8f6' }]}>
                                        <Image
                                            style={industryStyles.image}
                                            source={this.props.chosenType == 'Electrician' ? require('../../assets/images/electrician-light.png') : require('../../assets/images/electrician-dark.png')}
                                        />
                                        <Text style={[industryStyles.textInsideBox, this.props.chosenType == 'Electrician' ? { color: '#FFF' } : { color: '#dfdfdf' }]}>{Strings.Electrician}</Text>
                                    </TouchableOpacity>
                                    <View style={{ flex: 1 }}></View>

                                </View>
                            ) : (
                                <TouchableOpacity onPress={() => {this.setState({viewAllTypes: true})}} style={{marginTop:8,alignSelf:'flex-end', flexDirection:'row'}}>
                                    <Text style={{fontSize:15, color:PRIMARY_COLOR, fontWeight:'bold'}}>{Strings.View_All}</Text>
                                    <Image
                                        style={{height:13, width:13,marginLeft:5, marginTop:5}}
                                        source={require('../../assets/images/skipArrow.png')}
                                    />
                                </TouchableOpacity>
                            )}        
                        </View>

                    </View>
                    <View style={{marginTop:5}}>
                        <Text style={{fontSize:20,marginTop:5,marginLeft:5, fontWeight:'bold'}}>{Strings.Jobs_By_Location}</Text>
                        <View style={{marginTop:7,alignItems:'center', justifyContent:'center'}}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => this.props.selectTypeAndLocation('location','currentLocation')}
                                    style={[JobsStyles.chooseLocation,{flex:0.7}, this.props.chosenLocation == 'currentLocation' ? { backgroundColor: '#E67E22' } : { backgroundColor: '#f9f8f6' }]}>
                                    <Image
                                        style={JobsStyles.image}
                                        source={this.props.chosenLocation == 'currentLocation' ? require('../../assets/images/current-location.png') : require('../../assets/images/current-location.png')}
                                    />

                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => this.props.selectTypeAndLocation('location','Bangaluru')}
                                    style={[JobsStyles.chooseLocation, this.props.chosenLocation == 'Bangaluru' ? { backgroundColor: '#E67E22' } : { backgroundColor: '#f9f8f6' }]}>
                                    <Image
                                        style={JobsStyles.image}
                                        source={this.props.chosenLocation == 'Bangaluru' ? require('../../assets/images/city.png') : require('../../assets/images/city.png')}
                                    />
                                    <Text style={[JobsStyles.textInsideBox, this.props.chosenLocation == 'Bangaluru' ? { color: '#FFF' } : { color: '#dfdfdf' }]}>{Strings.Bangaluru}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => this.props.selectTypeAndLocation('location','Mumbai')}
                                    style={[JobsStyles.chooseLocation, this.props.chosenLocation == 'Mumbai' ? { backgroundColor: '#E67E22' } : { backgroundColor: '#f9f8f6' }]}>
                                    <Image
                                        style={JobsStyles.image}
                                        source={this.props.chosenLocation == 'Mumbai' ? require('../../assets/images/city.png') : require('../../assets/images/city.png')}
                                    />

                                    <Text style={[JobsStyles.textInsideBox, this.props.chosenLocation == 'Mumbai' ? { color: '#FFF' } : { color: '#dfdfdf' }]}>{Strings.Mumbai}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => this.props.selectTypeAndLocation('location','Chennai')}
                                    style={[JobsStyles.chooseLocation, this.props.chosenLocation == 'Chennai' ? { backgroundColor: '#E67E22' } : { backgroundColor: '#f9f8f6' }]}>
                                    <Image
                                        style={JobsStyles.image}
                                        source={this.props.chosenLocation == 'Chennai' ? require('../../assets/images/city.png') : require('../../assets/images/city.png')}
                                    />

                                    <Text style={[JobsStyles.textInsideBox, this.props.chosenLocation == 'Chennai' ? { color: '#FFF' } : { color: '#dfdfdf' }]}>{Strings.Chennai}</Text>
                                </TouchableOpacity>

                            </View> 
                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}


export class AppliedView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            selectedJobRole : null,
            selectedSalary: null,
            selectedJobType: null,

            filterAccepted:0,
            filterRejected:0,
            filterHighTL:0,
            filterLowTH:0,
        }
    }
    render() {
        let jobRolePickers = this.props.appliedRoleArray.map((data, index) => {
            return (
                <Picker.Item label={data} value={data} key={index} />
            )
        });

        let salaryPickers = this.props.appliedSalaryArray.map((data, index) => {
            return (
                <Picker.Item label={data} value={data} key={index} />
            )
        });

        let jobTypePickers = this.props.appliedJobTypeArray.map((data, index) => {
            return (
                <Picker.Item label={data} value={data} key={index} />
            )
        });

        return (
            <View style={JobsStyles.bodyContainer}>   
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                      console.log("Modal has been closed.");
                    }}
                  >
                    <TouchableOpacity activeOpacity = {1} 
                      onPress={() => {
                          this.setState({modalVisible: false}) ;
                        }}  
                        style={{flex:1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: '#00042460'}}>
                          <TouchableOpacity activeOpacity={1} 
                            onPress={() => {
                              this.setState({modalVisible: true}) ;
                            }}   
                            style={{height:300,width:'100%', borderRadius:18, backgroundColor:APP_WHITE, padding:20}}>
                            <View style={{flexDirection:'column', borderBottomWidth:1, borderColor:LIGHT_GRAY }}>
                                <Text style={{ color:'black', fontWeight:'bold', margin:10, fontSize:16}}>{Strings.Filter}</Text>
                                <View style={{flexDirection:'row', margin:5}}>
                                    <CheckBox
                                        disabled={false}
                                        value={this.state.filterAccepted}
                                        onValueChange={() => this.state.filterAccepted ? this.setState({filterAccepted:false}) : this.setState({filterAccepted:true})}
                                    /> 
                                    <Text style={{margin:5,color:MEDIUM_GRAY}}>{Strings.Accepted}</Text>
                                </View>

                                <View style={{flexDirection:'row', margin:5}}>
                                    <CheckBox
                                        disabled={false}
                                        value={this.state.filterRejected}
                                        onValueChange={() => this.state.filterRejected ? this.setState({filterRejected:false}) : this.setState({filterRejected:true})}
                                    /> 
                                    <Text style={{margin:5, color:MEDIUM_GRAY}}>{Strings.Rejected}</Text>
                                </View>
                            </View>
                                
                            <View style={{flexDirection:'column'}}>  
                                <Text style={{ color:'black', fontWeight:'bold', margin:10, fontSize:16}}>{Strings.Package}</Text>  
                                <View style={{flexDirection:'row', margin:5}}>
                                    <CheckBox
                                        disabled={false}
                                        value={this.state.filterHighTL}
                                        onValueChange={() => this.state.filterHighTL ? this.setState({filterHighTL:false}) : this.setState({filterHighTL:true})}
                                    /> 
                                    <Text style={{margin:5,color:MEDIUM_GRAY}}>{Strings.High_To_Low}</Text>
                                </View>

                                <View style={{flexDirection:'row', margin:5}}>
                                    <CheckBox
                                        disabled={false}
                                        value={this.state.filterLowTH}
                                        onValueChange={() => this.state.filterLowTH ? this.setState({filterLowTH:false}) : this.setState({filterLowTH:true})}
                                    /> 
                                    <Text style={{margin:5,color:MEDIUM_GRAY}}>{Strings.Low_To_High}</Text>
                                </View>                                
                            </View>        
                          </TouchableOpacity>  
                    </TouchableOpacity>
                  </Modal>  

                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>         
                    <View style={[JobsStyles.dropDownContainer, {width: '28%'}]}>
                        <Picker
                            selectedValue={this.state.selectedJobRole}
                            style={{ height: 100,width: 140,left:5, transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                            onValueChange={(itemValue, itemIndex) => {
                                    this.setState({selectedJobRole : itemValue});
                                    this.props.selectedAppliedDetails('role',itemValue);
                                }
                            }>
                                {jobRolePickers}
                        </Picker>
                    </View>
                    <View style={[JobsStyles.dropDownContainer, {width: '28%'}]}>
                        <Text style={{fontSize:13,color: MEDIUM_GRAY,left:22}}>{'\u20B9'}</Text>
                        <Picker
                            selectedValue={this.state.selectedSalary}
                            style={{ height: 100,width: 130,left:5, transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                            onValueChange={(itemValue, itemIndex) => {
                                    this.setState({selectedSalary : itemValue});
                                    this.props.selectedAppliedDetails('salary',itemValue);
                                }
                            }>
                                {salaryPickers}
                        </Picker>
                    </View>
                    <View style={[JobsStyles.dropDownContainer, {width: '28%'}]}>
                        <Picker
                            selectedValue={this.state.selectedJobType}
                            style={{ height: 100, width: 130, left:5, transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
                            onValueChange={(itemValue, itemIndex) => {
                                    this.setState({selectedJobType : itemValue});
                                    this.props.selectedAppliedDetails('jobType',itemValue);
                                }
                            }>
                                {jobTypePickers}
                        </Picker>
                    </View>

                    <View style={[JobsStyles.dropDownContainer, {width:'16%',justifyContent:'flex-start'}]}>
                        <Text>{Strings.Filter}</Text>
                    </View>

                    <TouchableOpacity onPress={() => {this.setState({modalVisible:true})} } style={[JobsStyles.dropDownContainer, {position:'absolute',zIndex:1, width:40, left:'90%',borderColor:PRIMARY_COLOR,borderWidth:1}]}>
                        <Image
                          style={{height:18,resizeMode:'contain'}}
                          source={require('../../assets/images/filter.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View>

                    <JobsDetailView componentId={0} offerStatus={1} navigation = {this.props.navigation} />

                    <JobsDetailView componentId={1} offerStatus={2} navigation = {this.props.navigation} />
                    
                </View>    
            </View>
        );
    }
}


export class OfferedView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOfferStatus : null,
            selectedLocation: null
        }
    }

    fetchOfferStatus(value , index) {
        console.log('value' + value);
        console.log('index'+ index); //will pass these values to parent(JobsView) after updating the offered array
    }

    render() {
        
        let statusPickers = this.props.offerStatusArray.map((data, index) => {
            return (
                <Picker.Item label={data} value={data} key={index} />
            )
        });

         let locationPickers = this.props.offerLocations.map((data, index) => {
            return (
                <Picker.Item label={data} value={data} key={index} />
            )
        });

        return (
            <View style={JobsStyles.bodyContainer}>   
                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>         
                    <View style={[JobsStyles.dropDownContainer, {width: 100}]}>
                        <Picker
                            selectedValue={this.state.selectedOfferStatus}
                            style={{ height: 100,width: 140,left:5, transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                            onValueChange={(itemValue, itemIndex) => {
                                    this.setState({selectedOfferStatus : itemValue});
                                    this.props.selectedOfferDetails('status',itemValue);
                                }
                            }>
                                {statusPickers}
                        </Picker>
                    </View>
                    <View style={[JobsStyles.dropDownContainer, {width:120}]}>
                        <Picker
                            selectedValue={this.state.selectedLocation}
                            style={{ height: 50, width: 140, left:5, transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
                            onValueChange={(itemValue, itemIndex) => {
                                    this.setState({selectedLocation : itemValue});
                                    this.props.selectedOfferDetails('location',itemValue);
                                }
                            }>
                                {locationPickers}
                        </Picker>
                    </View>
                </View>

                <View>
                    <JobsDetailView componentId={0} fetchOfferStatus={this.fetchOfferStatus.bind(this)} navigation = {this.props.navigation} />

                    <JobsDetailView componentId={1} fetchOfferStatus={this.fetchOfferStatus.bind(this)} navigation = {this.props.navigation} />
                    
                    <JobsDetailView componentId={2} fetchOfferStatus={this.fetchOfferStatus.bind(this)} navigation = {this.props.navigation} />
                </View>    
            </View>
        );
    }
}

export default class JobsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
           currentTabContent : null,
           selectedTab:'browse',
           chosenType:null,
           chosenLocation:null,
        }
    }

    componentDidMount = () => {
        this.showTabContent('browse');
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
    selectTypeAndLocation = (name, value) => {
        console.log(name);
        console.log(value);
        if(name == 'type') {
            console.log(value);
            this.setState({ chosenType: value });
        } else {
            this.setState({ chosenLocation: value });
        }
        setTimeout(()=> {
            this.showTabContent('browse');
        },150);
    }

    selectedAppliedDetails = (name, value) => {
        this.props.selectedOfferDetails(name,value);
    }

    selectedOfferDetails = (name, value) => {
        this.props.selectedOfferDetails(name,value);
    }

    showTabContent = (tab) => {
        this.setState({selectedTab : tab});

        if(tab == 'browse') {
            this.setState({
                currentTabContent : 
                <BrowseView
                    language={Strings}
                    navigation = {this.props.navigation}
                    selectTypeAndLocation =  {this.selectTypeAndLocation.bind(this)}
                    chosenType = {this.state.chosenType}
                    chosenLocation = {this.state.chosenLocation}
                />
            })
        } else if(tab == 'applied') {
            this.setState({
                currentTabContent : 
                <AppliedView
                    language={Strings}
                    navigation = {this.props.navigation} 
                    appliedRoleArray = {this.props.appliedRoleArray}
                    appliedSalaryArray = {this.props.appliedSalaryArray}
                    appliedJobTypeArray = {this.props.appliedJobTypeArray}
                    selectedAppliedDetails = {this.selectedAppliedDetails.bind(this)}
                />
            })
        } else if(tab == 'offered') {
            this.setState({
                currentTabContent : 
                <OfferedView 
                    language={Strings}
                    navigation = {this.props.navigation}
                    offerStatusArray = {this.props.offerStatusArray}
                    offerLocations = {this.props.offerLocations}
                    selectedOfferDetails = {this.selectedOfferDetails.bind(this)}
                />
            })
        }
    }

    render() {

        return (
            <View style={[parent.container, {backgroundColor:APP_BACKGROUND}]}>
                <AppHeader title={Strings.Shram} navigation={this.props.navigation}/>
                    
                    <View style={{ alignItems: 'center',height:80,backgroundColor:APP_WHITE,padding:5, flexDirection:'row', elevation:5}}>
                        <TouchableOpacity 
                            onPress={() => this.showTabContent('browse')} 
                            style = {[JobsStyles.tabs, {padding:4}, this.state.selectedTab == 'browse' ? {borderColor:PRIMARY_COLOR} : {borderColor:APP_BACKGROUND}]}>
                            <Text style={{fontSize:25, fontWeight:'bold', marginEnd:12, color : this.state.selectedTab == 'browse' ? PRIMARY_COLOR : '#000'}}>#</Text>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{fontSize:16, fontWeight:'bold', color : this.state.selectedTab == 'browse' ? PRIMARY_COLOR : '#000'}}>{Strings.Browse}</Text>
                                <Text style={{fontSize:14,fontWeight:'bold', color : this.state.selectedTab == 'browse' ? PRIMARY_COLOR : MEDIUM_GRAY}}>10,000+</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => this.showTabContent('applied')} 
                            style = {[JobsStyles.tabs, {padding:4}, this.state.selectedTab == 'applied' ? {borderColor:PRIMARY_COLOR} : {borderColor:APP_BACKGROUND}]}>
                            <Text style={{fontSize:25, fontWeight:'bold', marginEnd:12, color : this.state.selectedTab == 'applied' ? PRIMARY_COLOR : '#000'}}>#</Text>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{fontSize:16, fontWeight:'bold', color : this.state.selectedTab == 'applied' ? PRIMARY_COLOR : '#000'}}>{Strings.Applied}</Text>
                                <Text style={{fontSize:14,fontWeight:'bold', color:this.state.selectedTab == 'applied' ? PRIMARY_COLOR : MEDIUM_GRAY}}>4</Text>
                            </View>
                        </TouchableOpacity>
                            
                        <TouchableOpacity 
                            onPress={() => this.showTabContent('offered')}
                            style = {[JobsStyles.tabs, {padding:4}, this.state.selectedTab == 'offered' ? {borderColor:PRIMARY_COLOR} : {borderColor:APP_BACKGROUND}]}>
                            <Text style={{fontSize:25, fontWeight:'bold', marginEnd:12, color : this.state.selectedTab == 'offered' ? PRIMARY_COLOR : '#000'}}>#</Text>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{fontSize:16, fontWeight:'bold', color : this.state.selectedTab == 'offered' ? PRIMARY_COLOR : '#000'}}>{Strings.Offered}</Text>
                                <Text style={{fontSize:14,fontWeight:'bold', color:this.state.selectedTab == 'offered' ? PRIMARY_COLOR : MEDIUM_GRAY}}>3</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{backgroundColor:APP_BACKGROUND, paddingTop:7}}>
                            {this.state.currentTabContent}
                        </View>
                    </ScrollView>

                    {this.getProgressView()}
            </View>
        );
    }
}

