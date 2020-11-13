import React from 'react';
import {
    Alert,
    AsyncStorage,
    Linking,
    Platform,
    View,
    StyleSheet,
    Text,
    PermissionsAndroid,
    NativeModules
} from 'react-native';
import DeviceSettings from 'react-native-device-settings';
import NetInfo from "@react-native-community/netinfo";

export async function getNetInfo() {
    if (Platform.OS === "ios") {
        try {
            const res = await fetch("https://www.google.com");
            if (res.status === 200) {
                return true;
            }
        } catch (e) {
            return false;
        }
        return false;
    } else {

          return  NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            if(state.isConnected){
                return true;
            }
            return false;
        });

    }
}

export function openSettings() {
    if (Platform.OS === 'ios') {
        Linking.canOpenURL('app-settings:').then(supported => {
            if (!supported) {
                console.warn('Can\'t handle settings url');
            } else {
                return Linking.openURL('app-settings:');
            }
        }).catch(err => console.warn('An error occurred', err));
    } else {
        DeviceSettings.open();
    }
}

export function showNoInternetDialog() {
    Alert.alert('No Internet', "This feature requires internet connection. Please check your internet settings and try again.", [
        {
            text: 'Settings',
            onPress: () => {
                openSettings();
            }
        }, {
            text: 'OK',
            onPress: () => { }
        }
    ], { cancelable: true });
}