import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { JobsStyles, industryStyles } from '../../styles/styles';
import {PRIMARY_COLOR, APP_BACKGROUND, APP_WHITE, MEDIUM_GRAY, LIGHT_GRAY, DARK_GRAY} from '../../styles/colors';
import AppHeader from '../../components/AppHeader';
import { Strings } from '../../config/Languages';
import * as Progress from 'react-native-progress';

export class DescriptionView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'video'
        }
    }
    render() {
     
        return (
            <View style={{flex:1}}>   
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={JobsStyles.bodyContainer}>   
                        <View style={{backgroundColor:LIGHT_GRAY,flexDirection:'row', height:40, width:'80%', alignSelf:'center', alignItems:'center', justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=> this.setState({selectedTab:'video'})} style = {{flex:1,flexDirection:'row', alignItems:'center',height:'70%',justifyContent:'center', borderRightWidth:2, borderColor:MEDIUM_GRAY}}>
                                <Image
                                    style={{
                                        height: 16, width: 16,
                                    }}
                                    source={this.state.selectedTab == 'video' ? require('../../assets/images/video_tab.png') : require('../../assets/images/video_non_selected_tab.png')}
                                />
                                <Text style={{fontSize:12, fontWeight:'bold',marginStart:2, color : this.state.selectedTab == 'video' ? 'black' : MEDIUM_GRAY}}>{Strings.Video_JD}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> this.setState({selectedTab:'audio'})} style = {{flex:1,flexDirection:'row', alignItems:'center',height:'70%',justifyContent:'center', borderRightWidth:2, borderColor:MEDIUM_GRAY}}>
                                <Image
                                    style={{
                                        height: 16, width: 16,
                                    }}
                                    source={this.state.selectedTab == 'audio' ? require('../../assets/images/video_tab.png') : require('../../assets/images/video_non_selected_tab.png')}
                                />
                                <Text style={{fontSize:12, fontWeight:'bold',marginStart:2, color : this.state.selectedTab == 'audio' ? 'black' : MEDIUM_GRAY}}>{Strings.Audio_JD}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> this.setState({selectedTab:'text'})} style = {{flex:1,flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                                <Image
                                    style={{
                                        height: 16, width: 16,
                                    }}
                                    source={this.state.selectedTab == 'text' ? require('../../assets/images/video_tab.png') : require('../../assets/images/video_non_selected_tab.png')}
                                />
                                <Text style={{fontSize:12, fontWeight:'bold',marginStart:2, color : this.state.selectedTab == 'text' ? 'black' : MEDIUM_GRAY}}>{Strings.Text_JD}</Text>
                            </TouchableOpacity>    
                        </View> 

                        <View style={{flex:1, marginTop:20}}>
                            <Text style={{fontSize:13, color: DARK_GRAY}}>{Strings.Lorem_Ipsum}</Text>
                        </View>
                    </View>    
                </ScrollView>

                <View style={{height:60, width:'100%',backgroundColor:PRIMARY_COLOR, justifyContent:'center', alignItems:'center' }}>
                    <Text style={{fontSize:18,fontWeight:'bold',  color: APP_WHITE}}>{Strings.Apply_Now}</Text>
                </View>
            </View>
        );
    }
}

export class CompanyView extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
     
        return (
            <View style={[JobsStyles.bodyContainer, { marginTop:20, marginBottom:20}]}> 
                <ScrollView showsVerticalScrollIndicator={false}>  
                    <View style={{height:220, backgroundColor:APP_WHITE, borderRadius:15}}>
                        <View style= {{alignSelf:'center', backgroundColor:LIGHT_GRAY, height:30, borderBottomLeftRadius:5, borderBottomRightRadius:5, padding:10, justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:12, fontWeight:'bold'}}>{Strings.Employer_No}</Text>
                        </View>

                        <View style={{flexDirection:'row', padding:15}}>
                            <View style={{width:'40%',flexDirection:'column'}}>
                                <View style={{marginTop:5,marginBottom:5}}>
                                    <Text style={{fontSize:11, color:DARK_GRAY, lineHeight:25}}>{Strings.Company_Reg_No}</Text>
                                    <Text style={{fontSize:13, fontWeight:'bold'}}>12345678912345</Text>
                                </View>

                                <View style={{marginTop:5,marginBottom:5}}>
                                    <Text style={{fontSize:11, color:DARK_GRAY, lineHeight:25}}>{Strings.Owner}</Text>
                                    <Text style={{fontSize:13, fontWeight:'bold'}}>{Strings.Owner_Dummy_Name}</Text>
                                </View>

                                <View style={{marginTop:5,marginBottom:5}}>
                                    <Text style={{fontSize:11, color:DARK_GRAY, lineHeight:25}}>{Strings.Company_GST}</Text>
                                    <Text style={{fontSize:13, fontWeight:'bold'}}>12345678912345</Text>
                                </View>
                            </View>

                            <View style={{width:'60%',flexDirection:'column'}}>
                                <View style={{marginTop:5,marginBottom:5}}>
                                    <Text style={{fontSize:11, color:DARK_GRAY, lineHeight:25}}>{Strings.Company_Url}</Text>
                                    <Text style={{fontSize:13, fontWeight:'bold'}}>www.sendersoninternational.com</Text>
                                </View>

                                <View style={{marginTop:5,marginBottom:5}}>
                                    <Text style={{fontSize:11, color:DARK_GRAY, lineHeight:25}}>{Strings.Company_Mail}</Text>
                                    <Text style={{fontSize:13, fontWeight:'bold'}}>zahidmd@sandersonindia.com</Text>
                                </View>
                            </View>
                        </View>        
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export class PerksView extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <View style={[JobsStyles.bodyContainer, { marginTop:20, marginBottom:20}]}>   
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: PRIMARY_COLOR}]}>
                            <View style={{height:20,width:20,alignSelf:'flex-end',justifyContent:'center', alignItems:'center', backgroundColor:APP_WHITE,borderBottomLeftRadius:10}}>
                                <Image
                                    style={{height:12, width: 12}}
                                    source={require('../../assets/images/check.png')}
                                />
                            </View>
                            <Image
                                style={JobsStyles.jobDetailPerksImage}
                                source={require('../../assets/images/home_non_selected_tab.png')}
                            />
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: '#FFF'}]}>{Strings.Accomodation}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: PRIMARY_COLOR}]}>
                            <View style={{height:20,width:20,alignSelf:'flex-end',justifyContent:'center', alignItems:'center', backgroundColor:APP_WHITE,borderBottomLeftRadius:10}}>
                                <Image
                                    style={{height:12, width: 12}}
                                    source={require('../../assets/images/check.png')}
                                />
                            </View>
                            <Image
                                style={JobsStyles.jobDetailPerksImage}
                                source={require('../../assets/images/home_non_selected_tab.png')}
                            />
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: '#FFF'}]}>{Strings.Annual_Transport_To_Native_Place}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: PRIMARY_COLOR}]}>
                            <View style={{height:20,width:20,alignSelf:'flex-end',justifyContent:'center', alignItems:'center', backgroundColor:APP_WHITE,borderBottomLeftRadius:10}}>
                                <Image
                                    style={{height:12, width: 12}}
                                    source={require('../../assets/images/check.png')}
                                />
                            </View>
                            <Image
                                style={JobsStyles.jobDetailPerksImage}
                                source={require('../../assets/images/home_non_selected_tab.png')}
                            />
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: '#FFF'}]}>{Strings.Daily_Transport}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <Image
                                style={JobsStyles.jobDetailPerksImage}
                                source={require('../../assets/images/home_non_selected_tab.png')}
                            />
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Meals}</Text>
                        </View>
                    
                    </View> 

                    <View style={{flexDirection:'row'}}>
                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <Image
                                style={JobsStyles.jobDetailPerksImage}
                                source={require('../../assets/images/home_non_selected_tab.png')}
                            />
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Uniform}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <Image
                                style={JobsStyles.jobDetailPerksImage}
                                source={require('../../assets/images/home_non_selected_tab.png')}
                            />
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Vehical_Provided}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <Image
                                style={JobsStyles.jobDetailPerksImage}
                                source={require('../../assets/images/home_non_selected_tab.png')}
                            />
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Tools_Tackles}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <View style={{height:70, width:70, backgroundColor:LIGHT_GRAY}}></View>
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Leaves}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <View style={{height:70, width:70, backgroundColor:LIGHT_GRAY}}></View>
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Work_Timings}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <View style={{height:70, width:70, backgroundColor:LIGHT_GRAY}}></View>
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Insurance}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <View style={{height:70, width:70, backgroundColor:LIGHT_GRAY}}></View>
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.PF}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <View style={{height:70, width:70, backgroundColor:LIGHT_GRAY}}></View>
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Salary_Date}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <View style={{height:70, width:70, backgroundColor:LIGHT_GRAY}}></View>
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Annual_Bonus}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <View style={{height:70, width:70, backgroundColor:LIGHT_GRAY}}></View>
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Children_Edu_Allowance}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <View style={{height:70, width:70, backgroundColor:LIGHT_GRAY}}></View>
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Skill_Training}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <View style={{height:70, width:70, backgroundColor:LIGHT_GRAY}}></View>
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Investment_Opportunities_For_Labour}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <View style={{height:70, width:70, backgroundColor:LIGHT_GRAY}}></View>
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Gynasium}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <View style={{height:70, width:70, backgroundColor:LIGHT_GRAY}}></View>
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Entertainment}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <View style={{height:70, width:70, backgroundColor:LIGHT_GRAY}}></View>
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Grievance_Reporting}</Text>
                        </View>

                        <View
                            style={[JobsStyles.jobDetailPerksBox,{backgroundColor: APP_WHITE}]}>
                            <View style={{height:20}}></View>
                            <View style={{height:70, width:70, backgroundColor:LIGHT_GRAY}}></View>
                            <Text style={[JobsStyles.textInsidePerksTabs, {color: MEDIUM_GRAY}]}>{Strings.Maternity_N_Paternity_Benefit}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


export default class JobsDetailsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTabContent : null,
            selectedTab : 'description'
        }
    }

    componentDidMount = () => {
        this.showTabContent('description');
    }

    onClick() {
        this.props.navigation.goBack(null);
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

    showTabContent = (tab) => {
        this.setState({selectedTab : tab});

        if(tab == 'description') {
            this.setState({
                currentTabContent : 
                <DescriptionView 
                    navigation = {this.props.navigation}
                />
            })
        } else if(tab == 'company') {
            this.setState({
                currentTabContent : 
                <CompanyView
                    navigation = {this.props.navigation} 
                />
            })
        } else if(tab == 'perks') {
            this.setState({
                currentTabContent : 
                <PerksView 
                    navigation = {this.props.navigation}
                />
            })
        }
    }    

    render() {

        return (
            <View style={[JobsStyles.bodyContainer, {width:'100%',backgroundColor:APP_BACKGROUND}]}>
                
                <View style={{flex: 1}}>
                    <Image
                        style={{
                            height: 150, width: '100%'
                        }}
                        source={require('../../assets/images/background.jpg')}
                    />
                    <TouchableOpacity style={{height: 16, width: 16, marginStart: 15, bottom:135}} onPress={() => this.onClick()}>
                        <Image
                            style={{
                                height: 16, width: 16,
                            }}
                            source={require('../../assets/images/back_button.png')}
                        />
                    </TouchableOpacity>
                        
                    <View style={{backgroundColor: APP_WHITE, height: 50, width: 50,position:'absolute', alignSelf:'center',top:125, alignItems:'center', justifyContent:'center', borderRadius:10, elevation:5}}>
                        <Image
                            style={{
                                height: 40, width: 40
                            }}
                            source={require('../../assets/images/settings.png')}
                        />
                    </View>

                    {this.state.selectedTab == 'description' ? 
                        (   <View style={{alignItems:'center', marginTop:20, height:80}}>
                                <Text style={{fontSize:17, fontWeight:'bold'}}>{Strings.Mason}</Text>
                                <Text style={{fontSize:15, color:DARK_GRAY, lineHeight:25}}>{Strings.Shram}, {Strings.Bangaluru}</Text>
                                <Text style={{fontSize:15}}>{'\u20B9'} 25,000</Text>
                            </View>
                        ) : (
                            <View style={{alignItems:'center', marginTop:20, height:80}}>
                                <Text style={{fontSize:17, fontWeight:'bold'}}>{Strings.Sanderson_Company_Name}</Text>
                                <Text style={{fontSize:15, color:DARK_GRAY, lineHeight:25}}>{Strings.Sanderson_Company_Address}</Text>
                            </View>
                        )
                    }

                    <View style={{ alignItems: 'center',height:50,width:'95%',alignSelf:'center', backgroundColor:APP_WHITE,padding:5, flexDirection:'row', borderColor:LIGHT_GRAY, borderRadius:5, borderWidth:2}}>
                        <TouchableOpacity 
                            onPress={() => this.showTabContent('description')} 
                            style = {{flex:1, alignItems:'center',height:'80%',justifyContent:'center', borderRightWidth:2, borderColor:'#f0f0f0'}}>
                                <Text style={{fontSize:15, fontWeight:'bold', color : this.state.selectedTab == 'description' ? PRIMARY_COLOR : MEDIUM_GRAY}}>{Strings.Description}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => this.showTabContent('company')} 
                            style = {{flex:1, alignItems:'center', height:'80%', justifyContent:'center', borderRightWidth:2, borderColor:'#f0f0f0'}}>
                                <Text style={{fontSize:15, fontWeight:'bold', color : this.state.selectedTab == 'company' ? PRIMARY_COLOR : MEDIUM_GRAY}}>{Strings.Company}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => this.showTabContent('perks')} 
                            style = {{flex:1, alignItems:'center'}}>
                                <Text style={{fontSize:15, fontWeight:'bold', color : this.state.selectedTab == 'perks' ? PRIMARY_COLOR : MEDIUM_GRAY}}>{Strings.Perks}</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={[JobsStyles.bodyContainer, {width:'100%',backgroundColor:APP_BACKGROUND}]}>
                        {this.state.currentTabContent}
                    </View>

                </View>
                {this.getProgressView()}
            </View>
        );
    }
}

