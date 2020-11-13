import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

import { parent } from '../../styles/styles';
import {PRIMARY_COLOR, LIGHT_GRAY} from '../../styles/colors';
import * as Progress from 'react-native-progress';
import { youRAShramikStyles, signUpScreensBg } from '../../styles/styles';
import SignUpHeader from '../../components/SignUpHeader';
import SignUpFooter from '../../components/SignUpFooter';
import { SECONDARY_COLOR } from '../../styles/colors';
import { Strings } from '../../config/Languages';

export default class YouAreAShramikView extends Component {

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
				<View style={{ flex: 1, flexDirection: 'column' }}>

					<View style={{ flex: 2 }}>
						<SignUpHeader showBackButton={false} title={Strings.You_Are_A} />
					</View>
					<View style={{ flex: 20 }}>
						<ScrollView showsVerticalScrollIndicator={false}>
							<View style={{ alignItems: 'center', alignSelf: 'center', flex: 1, width: '45%' }}>
								<TouchableOpacity onPress={() => this.props.selectIt(1, 'Shramik')} style={youRAShramikStyles.chooseCategoryBox}>
									<Image
										style={youRAShramikStyles.image}
										source={require('../../assets/images/shramik.png')}
									/>

									<Text style={[youRAShramikStyles.textInsideBox, this.props.selectedTab == 1 ? { color: PRIMARY_COLOR } : { color: LIGHT_GRAY }]}>{Strings.Shramik}</Text>
								</TouchableOpacity>


								<TouchableOpacity onPress={() => this.props.selectIt(2, 'EMPLOYER')} style={youRAShramikStyles.chooseCategoryBox}>
									<Image
										style={youRAShramikStyles.image}
										source={require('../../assets/images/employer.jpeg')}
									/>

									<Text style={[youRAShramikStyles.textInsideBox, this.props.selectedTab == 2 ? { color: PRIMARY_COLOR } : { color: LIGHT_GRAY }]}>{Strings.Employer}</Text>
								</TouchableOpacity>


								<TouchableOpacity onPress={() => this.props.selectIt(3, 'MANPOWER CONSULTANT')} style={youRAShramikStyles.chooseCategoryBox}>
									<Image
										style={youRAShramikStyles.image}
										source={require('../../assets/images/manpower.jpeg')}
									/>

									<Text style={[youRAShramikStyles.textInsideBox, this.props.selectedTab == 3 ? { color: PRIMARY_COLOR } : { color: LIGHT_GRAY }]}>{Strings.Manpower_Consultant}</Text>
								</TouchableOpacity>
							</View>
						</ScrollView>
					</View>

					<View style={{ flex: 2 }}>
						<SignUpFooter language={Strings} navigateTo={'Industry'} navigation={this.props.navigation} onclick={this.props.skip} />
					</View>
					{this.getProgressView()}
				</View>
			</View>
		);
	}
}

