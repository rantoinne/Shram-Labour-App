import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

import { industryStyles, signUpScreensBg,parent } from '../../styles/styles';
import SignUpHeader from '../../components/SignUpHeader';
import SignUpFooter from '../../components/SignUpFooter';
import * as Progress from 'react-native-progress';
import { Strings } from '../../config/Languages';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/colors';

export default class ConstructionView extends Component {

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
						<SignUpHeader showBackButton={true} title={this.props.title} navigation={this.props.navigation} />
					</View>

					<View style={{ flex: 20 }}>
						<ScrollView style={{ marginTop: 20 }} showsVerticalScrollIndicator={false}>
							<View style={industryStyles.bodyContainer}>
								<View style={{ flexDirection: 'row' }}>
									<TouchableOpacity
										onPress={() => this.props.selectIt('Mason')}
										style={[industryStyles.chooseCategoryBox, this.props.selectedTab == 'Mason' ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: '#f9f8f6' }]}>
										<Image
											style={industryStyles.image}
											source={this.props.selectedTab == 'Mason' ? require('../../assets/images/mason-light.png') : require('../../assets/images/mason-dark.png')}
										/>
										<Text style={[industryStyles.textInsideBox, this.props.selectedTab == 'Mason' ? { color: SECONDARY_COLOR } : { color: '#dfdfdf' }]}>{Strings.Mason}</Text>
									</TouchableOpacity>

									<TouchableOpacity
										onPress={() => this.props.selectIt('Plumber')}
										style={[industryStyles.chooseCategoryBox, this.props.selectedTab == 'Plumber' ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: '#f9f8f6' }]}>
										<Image
											style={industryStyles.image}
											source={this.props.selectedTab == 'Plumber' ? require('../../assets/images/plumber-light.png') : require('../../assets/images/plumber-dark.png')}
										/>

										<Text style={[industryStyles.textInsideBox, this.props.selectedTab == 'Plumber' ? { color: SECONDARY_COLOR } : { color: '#dfdfdf' }]}>{Strings.Plumber}</Text>
									</TouchableOpacity>

									<TouchableOpacity
										onPress={() => this.props.selectIt('Scaffolder')}
										style={[industryStyles.chooseCategoryBox, this.props.selectedTab == 'Scaffolder' ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: '#f9f8f6' }]}>
										<Image
											style={industryStyles.image}
											source={this.props.selectedTab == 'Scaffolder' ? require('../../assets/images/scaffolder-light.png') : require('../../assets/images/scaffolder-dark.png')}
										/>

										<Text style={[industryStyles.textInsideBox, this.props.selectedTab == 'Scaffolder' ? { color: SECONDARY_COLOR } : { color: '#dfdfdf' }]}>{Strings.Scaffolder}</Text>
									</TouchableOpacity>

								</View>
								<View style={{ flexDirection: 'row' }}>
									<TouchableOpacity
										onPress={() => this.props.selectIt('Welder')}
										style={[industryStyles.chooseCategoryBox, this.props.selectedTab == 'Welder' ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: '#f9f8f6' }]}>
										<Image
											style={industryStyles.image}
											source={this.props.selectedTab == 'Welder' ? require('../../assets/images/welder-light.png') : require('../../assets/images/welder-dark.png')}
										/>

										<Text style={[industryStyles.textInsideBox, this.props.selectedTab == 'Welder' ? { color: SECONDARY_COLOR } : { color: '#dfdfdf' }]}>{Strings.Welder}</Text>
									</TouchableOpacity>

									<TouchableOpacity
										onPress={() => this.props.selectIt('Carpender')}
										style={[industryStyles.chooseCategoryBox, this.props.selectedTab == 'Carpender' ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: '#f9f8f6' }]}>
										<Image
											style={industryStyles.image}
											source={this.props.selectedTab == 'Carpender' ? require('../../assets/images/carpenter-light.png') : require('../../assets/images/carpenter-dark.png')}
										/>

										<Text style={[industryStyles.textInsideBox, this.props.selectedTab == 'Carpender' ? { color: SECONDARY_COLOR } : { color: '#dfdfdf' }]}>{Strings.Carpenter}</Text>
									</TouchableOpacity>

									<TouchableOpacity
										onPress={() => this.props.selectIt('Bar Bender')}
										style={[industryStyles.chooseCategoryBox, this.props.selectedTab == 'Bar Bender' ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: '#f9f8f6' }]}>
										<Image
											style={industryStyles.image}
											source={this.props.selectedTab == 'Bar Bender' ? require('../../assets/images/barBender-light.png') : require('../../assets/images/barBender-dark.png')}
										/>

										<Text style={[industryStyles.textInsideBox, this.props.selectedTab == 'Bar Bender' ? { color: SECONDARY_COLOR } : { color: '#dfdfdf' }]}>{Strings.Bar_Bender}</Text>
									</TouchableOpacity>

								</View>

								<View style={{ flexDirection: 'row' }}>

									<TouchableOpacity
										onPress={() => this.props.selectIt('Water Proofer')}
										style={[industryStyles.chooseCategoryBox, this.props.selectedTab == 'Water Proofer' ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: '#f9f8f6' }]}>
										<Image
											style={industryStyles.image}
											source={this.props.selectedTab == 'Water Proofer' ? require('../../assets/images/waterProofer-light.png') : require('../../assets/images/waterProofer-dark.png')}
										/>

										<Text style={[industryStyles.textInsideBox, this.props.selectedTab == 'Water Proofer' ? { color: SECONDARY_COLOR } : { color: '#dfdfdf' }]}>{Strings.Water_Proofer}</Text>
									</TouchableOpacity>

									<TouchableOpacity
										onPress={() => this.props.selectIt('Electrician')}
										style={[industryStyles.chooseCategoryBox, this.props.selectedTab == 'Electrician' ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: '#f9f8f6' }]}>
										<Image
											style={industryStyles.image}
											source={this.props.selectedTab == 'Electrician' ? require('../../assets/images/electrician-light.png') : require('../../assets/images/electrician-dark.png')}
										/>
										<Text style={[industryStyles.textInsideBox, this.props.selectedTab == 'Electrician' ? { color: SECONDARY_COLOR } : { color: '#dfdfdf' }]}>{Strings.Electrician}</Text>
									</TouchableOpacity>
									<View style={{ flex: 1 }}></View>

								</View>
							</View>
						</ScrollView>
					</View>

					<View style={{ flex: 2 }}>
						<SignUpFooter language={Strings} navigateTo={'Construction'} title={this.props.selectedTab} navigation={this.props.navigation} onclick={this.props.skip} />
					</View>
					{this.getProgressView()}
				</View>
			</View>
		);
	}
}

