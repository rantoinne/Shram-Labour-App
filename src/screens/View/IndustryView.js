import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { industryStyles, signUpScreensBg,parent } from '../../styles/styles';
import SignUpHeader from '../../components/SignUpHeader';
import SignUpFooter from '../../components/SignUpFooter';
import * as Progress from 'react-native-progress';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/colors';
import { Strings } from '../../config/Languages';

export default class IndustryView extends Component {

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
      <View style={signUpScreensBg.container}>
      	<View style={{flex:1, flexDirection : 'column'}}>

	    	<View style={{flex:2}}>
		        <SignUpHeader showBackButton={true} title={Strings.Industry} navigation={this.props.navigation}/>
	    	</View>

		    <View style={{flex:20}}>
	          <ScrollView style={{marginTop:20}} showsVerticalScrollIndicator = {false}>
	            <View style={industryStyles.bodyContainer}>
	            	<View style={{flexDirection:'row'}}>
		            	<TouchableOpacity 
		            		onPress = {() => this.props.selectIt('Construction')} 
		            		style={[industryStyles.chooseCategoryBox,this.props.selectedTab == 'Construction' ? {backgroundColor: PRIMARY_COLOR} : {backgroundColor:'#f9f8f6'}]}>
					        <Image
				              style={industryStyles.image}
				              source={this.props.selectedTab == 'Construction' ? require('../../assets/images/construction-light.png') : require('../../assets/images/construction-dark.png') }
				            />	
				          <Text style={[industryStyles.textInsideBox,this.props.selectedTab == 'Construction' ? {color: SECONDARY_COLOR} : {color:'#dfdfdf'}]}>{Strings.Construction}</Text>
				      	</TouchableOpacity>

				      	<TouchableOpacity 
				      		onPress = {() => this.props.selectIt('Manufacturing')} 
				      		style={[industryStyles.chooseCategoryBox,this.props.selectedTab == 'Manufacturing' ? {backgroundColor: PRIMARY_COLOR} : {backgroundColor:'#f9f8f6'}]}>
				      		<Image
				              style={industryStyles.image}
				              source={this.props.selectedTab == 'Manufacturing' ? require('../../assets/images/manufacturing-light.png') : require('../../assets/images/manufacturing-dark.png')}
				            />

				          <Text style={[industryStyles.textInsideBox,this.props.selectedTab == 'Manufacturing' ? {color: SECONDARY_COLOR} : {color:'#dfdfdf'}]}>{Strings.Manufacturing}</Text>
				      	</TouchableOpacity>

				      	<TouchableOpacity 
				      		onPress = {() => this.props.selectIt('Hotel')} 
				      		style={[industryStyles.chooseCategoryBox,this.props.selectedTab == 'Hotel' ? {backgroundColor: PRIMARY_COLOR} : {backgroundColor:'#f9f8f6'}]}>
				      		<Image
				              style={industryStyles.image}
				              source={this.props.selectedTab == 'Hotel' ? require('../../assets/images/hotel-light.png') : require('../../assets/images/hotel-dark.png')}
				            />

				          <Text style={[industryStyles.textInsideBox,this.props.selectedTab == 'Hotel' ? {color: SECONDARY_COLOR} : {color:'#dfdfdf'}]}>{Strings.Hotel}</Text>
				      	</TouchableOpacity>

				    </View>
				    <View style={{flexDirection:'row'}}>
		            	<TouchableOpacity 
		            		onPress = {() => this.props.selectIt('Delivery')} 
		            		style={[industryStyles.chooseCategoryBox,this.props.selectedTab == 'Delivery' ? {backgroundColor: PRIMARY_COLOR} : {backgroundColor:'#f9f8f6'}]}>
					        <Image
				              style={industryStyles.image}
				              source={this.props.selectedTab == 'Delivery' ? require('../../assets/images/delivery-light.png') : require('../../assets/images/delivery-dark.png')}
				            />	

				          <Text style={[industryStyles.textInsideBox,this.props.selectedTab == 'Delivery' ? {color: SECONDARY_COLOR} : {color:'#dfdfdf'}]}>{Strings.Delivery}</Text>
				      	</TouchableOpacity>

				      	<TouchableOpacity 
				      		onPress = {() => this.props.selectIt('Domestic')} 
				      		style={[industryStyles.chooseCategoryBox,this.props.selectedTab == 'Domestic' ? {backgroundColor: PRIMARY_COLOR} : {backgroundColor:'#f9f8f6'}]}>			      		
				        	<View style={{ width:70,height:70, backgroundColor:'#dfdfdf'}}></View>

				          <Text style={[industryStyles.textInsideBox,this.props.selectedTab == 'Domestic' ? {color: SECONDARY_COLOR} : {color:'#dfdfdf'}]}>{Strings.Domestic}</Text>
				      	</TouchableOpacity>

				      	<TouchableOpacity 
				      		onPress = {() => this.props.selectIt('Agriculture')} 
				      		style={[industryStyles.chooseCategoryBox,this.props.selectedTab == 'Agriculture' ? {backgroundColor: PRIMARY_COLOR} : {backgroundColor:'#f9f8f6'}]}>
				      		<Image
				              style={industryStyles.image}
				              source={this.props.selectedTab == 'Agriculture' ? require('../../assets/images/agriculture-light.png') : require('../../assets/images/agriculture-dark.png')}
				            />

				          <Text style={[industryStyles.textInsideBox,this.props.selectedTab == 'Agriculture' ? {color: SECONDARY_COLOR} : {color:'#dfdfdf'}]}>{Strings.Agriculture}</Text>
				      	</TouchableOpacity>

				    </View>

				    <View style={{flexDirection:'row'}}>
		            	<TouchableOpacity 
		            		onPress = {() => this.props.selectIt('Airlines')} 
		            		style={[industryStyles.chooseCategoryBox,this.props.selectedTab == 'Airlines' ? {backgroundColor: PRIMARY_COLOR} : {backgroundColor:'#f9f8f6'}]}>
					    	<Image
				              style={industryStyles.image}
				              source={this.props.selectedTab == 'Airlines' ? require('../../assets/images/airlines-light.png') : require('../../assets/images/airlines-dark.png')}
				            />  	

				          	<Text style={[industryStyles.textInsideBox,this.props.selectedTab == 'Airlines' ? {color: SECONDARY_COLOR} : {color:'#dfdfdf'}]}>{Strings.Airlines}</Text>
				      	</TouchableOpacity>

				      	<TouchableOpacity 
				      		onPress = {() => this.props.selectIt('Transport')} 
				      		style={[industryStyles.chooseCategoryBox,this.props.selectedTab == 'Transport' ? {backgroundColor: PRIMARY_COLOR} : {backgroundColor:'#f9f8f6'}]}>
				      		<Image
				              style={industryStyles.image}
				              source={this.props.selectedTab == 'Transport' ? require('../../assets/images/transport-light.png') : require('../../assets/images/transport-dark.png')}
				            />

				          <Text style={[industryStyles.textInsideBox,this.props.selectedTab == 'Transport' ? {color: SECONDARY_COLOR} : {color:'#dfdfdf'}]}>{Strings.Transport}</Text>
				      	</TouchableOpacity>

				      	<View style={{flex:1}}></View>

				    </View>
	            </View>
				    </ScrollView>  	
		    	</View>

		    	<View style={{flex:2}}>
		    		<SignUpFooter language={Strings} navigateTo={'Construction'} title={this.props.selectedTab} navigation={this.props.navigation} onclick={ this.props.skip}/>
		    	</View>	
				{this.getProgressView()}
		    </View>  	
	    </View>
    );
  }
}    

