import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import {  profileImage, parent } from '../../styles/styles';
import SignUpHeader from '../../components/SignUpHeader';
import { margin, cardContainer } from './../../styles/styles';
import Button from '../../components/Button';
import ImagePicker from 'react-native-image-picker';
import * as AppConstants from '../../config/AppConstants';
import Toast from 'react-native-simple-toast';
import {
	TextField
} from '@softmedialab/react-native-material-textfield';
import * as Progress from 'react-native-progress';
import { Strings } from '../../config/Languages';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/colors';

export default class NameAndAddressView extends Component {

	constructor(props) {
		super(props);
		this.state = ({
			uri: null,
			path:'',
			name: '',
			pincode: '',
			email: '',
			btnEnable: false

		})
	}

	onChooseButtonClick() {
		this.selectImageFromDevice();
	}

	async selectImageFromDevice() {
		const options = {
			title: 'Video Picker',
			mediaType: 'image',
			storageOptions: {
				skipBackup: true,
				path: 'images'
			}
		};

		ImagePicker.launchImageLibrary(options, (response) => {
			if (response.didCancel) {
				return;
			}
			if (response.error) {
				return;
			}
			const uri = { uri: response.uri };
			this.setState({ uri: uri, path: response.path });
		});
	}

	onNameTextChanged(value) {
		this.setState({
			name: value
		});
		this.enableDisableBtn(value, this.state.email, this.state.pincode);
	}

	onEmailTextChanged(value) {
		this.enableDisableBtn(this.state.name, value, this.state.pincode);
		this.setState({
			email: value
		});
	}

	onPincodeTextChanged(value) {
		var regex = AppConstants.ONLY_INT_REGEX;
		if (value.length == 0) {
			this.setState({
				pincode: value
			});
		} else if (regex.test(value)) {
			this.enableDisableBtn(this.state.name, this.state.email, value);
			this.setState({
				pincode: value
			});
		}
	}

	enableDisableBtn(name, email, pincode) {

		if (name.length > 0 && email.length > 0 && pincode.length == 6) {
			var regex = AppConstants.EMAIL_REGEX;
			if (regex.test(email)) {
				this.setState({ btnEnable: true })

			} else {
				// Toast.show('Enter a valid email id');
				this.setState({ btnEnable: false })
			}
		} else {
			this.setState({ btnEnable: false })
		}
	}

	onClick() {
		this.props.continue(this.state.name, this.state.email, this.state.pincode, this.state.path)
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

		let view =
			(<View style={{ backgroundColor: '#979797', flex: 1, justifyContent: 'center', overflow: "hidden" }}>
				<Text style={{ alignSelf: 'center', textAlign: 'center' }}> {Strings.Add_A_Photo}</Text>
			</View>)

		if (this.state.uri) {
			view = <Image style={[profileImage.img]} source={this.state.uri} />
			console.log('' + this.state.uri)
		}

		return (
			<View style={{ flex: 1, backgroundColor: SECONDARY_COLOR, }}>
				<SignUpHeader showBackButton={true} title={Strings.Your_Details} navigation={this.props.navigation} />
				<ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<TouchableWithoutFeedback onPress={this.onChooseButtonClick.bind(this)}>
							<View style={[cardContainer.card, margin.marginTop_10, { height: 100, width: 100, flex: 1, justifyContent: 'center' }]}>
								{view}
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={{ marginTop: 20 }}>
						<View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
							<Image style={{ marginBottom: 10, }} source={require('../../assets/images/name.png')} resizeMode='contain' />
							<View style={{ flex: 1, marginStart: 10, }}>
								<TextField
									label={Strings.Enter_Name}
									keyboardType='default'
									containerStyle={{ backgroundColor: SECONDARY_COLOR }}
									baseColor='#171717'
									tintColor= {PRIMARY_COLOR}
									multiline={false}
									maxLength={30}
									onChangeText={value => this.onNameTextChanged(value)}
									value={this.state.name}
								/>
							</View>
						</View>

						<View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
							<Image style={{ marginBottom: 10, }} source={require('../../assets/images/mail.png')} resizeMode='contain' />
							<View style={{ flex: 1, marginStart: 10, }}>
								<TextField
									label={Strings.Enter_Email}
									keyboardType='email-address'
									containerStyle={{ backgroundColor: SECONDARY_COLOR }}
									baseColor='#171717'
									tintColor={PRIMARY_COLOR}
									multiline={false}
									maxLength={30}
									onChangeText={value => this.onEmailTextChanged(value)}
									value={this.state.email}
								/>
							</View>
						</View>

						<View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
							<Image style={{ marginBottom: 10, }} source={require('../../assets/images/pincode.png')} resizeMode='contain' />
							<View style={{ flex: 1, marginStart: 10, }}>
								<TextField
									label={Strings.Enter_Pincode}
									keyboardType='phone-pad'
									containerStyle={{ backgroundColor: SECONDARY_COLOR }}
									baseColor='#171717'
									tintColor={PRIMARY_COLOR}
									multiline={false}
									maxLength={6}
									onChangeText={value => this.onPincodeTextChanged(value)}
									value={this.state.pincode}
								/>
							</View>
						</View>
					</View>
					<Button onClick={this.onClick.bind(this)} text={Strings.Next} enable={this.state.btnEnable} />
				</ScrollView>
				{this.getProgressView()}
			</View>
		);
	}
}

