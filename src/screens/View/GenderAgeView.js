import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { youRAShramikStyles, parent } from '../../styles/styles';
import SignUpHeader from '../../components/SignUpHeader';
import { margin, fontSize, cardContainer } from './../../styles/styles';
import { Picker } from '@react-native-community/picker';
import Button from '../../components/Button';
import * as Progress from 'react-native-progress';

import SignUpFooter from '../../components/SignUpFooter';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/colors';
import { Strings } from '../../config/Languages';

export default class GenderAgeView extends Component {

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

		let pickers = this.props.age.map((data, index) => {
			return (
				<Picker.Item label={data} value={data} key={index} />
			)
		});
		return (
			<View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#e6e6e6', }}>
				<SignUpHeader showBackButton={true} title={Strings.Gender_And_Age} navigation={this.props.navigation} />
				<View style={{ flex: 20 }}>
					<ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>

						<View style={{ flexDirection: 'row' }}>
							<View style={[cardContainer.card, { flex: 1, marginEnd: 5, padding: 8 }, this.props.selectedTab == 1 ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: SECONDARY_COLOR }]}>
								<TouchableOpacity onPress={() => this.props.selectIt(1, 'M')}>

								<View style={cardContainer.cardContent}>
									<Image
										style={youRAShramikStyles.image}
										source={this.props.selectedTab == 1 ? require('../../assets/images/non_male.png') : require('../../assets/images/male.png')}
									/>
									<Text style={[youRAShramikStyles.textInsideBox, this.props.selectedTab == 1 ? { color: SECONDARY_COLOR } : { color: '#dfdfdf' }]}>{Strings.Male}</Text>
								</View>
							</TouchableOpacity>

							</View>
							<View style={[cardContainer.card, { flex: 1, marginStart: 5, padding: 8 }, this.props.selectedTab == 2 ? { backgroundColor: PRIMARY_COLOR } : { backgroundColor: SECONDARY_COLOR }]}>
								<TouchableOpacity onPress={() => this.props.selectIt(2, "F")}>

								<View style={cardContainer.cardContent}>
									<Image
										style={youRAShramikStyles.image}
										source={this.props.selectedTab == 2 ? require('../../assets/images/non_female.png') : require('../../assets/images/female.png')}
									/>
									<Text style={[youRAShramikStyles.textInsideBox, this.props.selectedTab == 2 ? { color: SECONDARY_COLOR } : { color: '#dfdfdf' }]}>{Strings.Female}</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					<View style={[{ flexDirection: 'row', marginTop: 8, justifyContent: 'space-between' }, cardContainer.card]}>
						<Text style={{ color: 'black', fontSize: 14, padding: 13 }}>{Strings.Age}</Text>
						<Picker
							selectedValue={this.props.selectedAge}
							style={{ height: 50, width: 100 }}
							onValueChange={(itemValue, itemIndex) =>
								this.props.selectAge(itemValue)
							}>
							{pickers}
						</Picker>
					</View>
					<Button onClick={this.props.continue} text={Strings.Next} enable={this.props.btnEnable} />
				</ScrollView>
				</View>
				<View style={{ flex: 2 }}>
						<SignUpFooter language={Strings} navigateTo={'Industry'} navigation={this.props.navigation} onclick={ this.props.skip}/>
					</View>
				{this.getProgressView()}
			</View>
		);
	}
}

