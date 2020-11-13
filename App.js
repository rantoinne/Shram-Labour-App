import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Image, Dimensions } from 'react-native';
import Video from './src/screens/Video';
import Search from './src/screens/Search';

import Splash from './src/screens/Splash';
import YouAreAShramik from './src/screens/YouAreAShramik';
import Industry from './src/screens/Industry';
import Construction from './src/screens/Construction';

import Login from './src/screens/Login';
import HomeHeader from './src/components/HomeHeader';
import Popular from './src/screens/Popular';
import Follow from './src/screens/Follow';
import Recommended from './src/screens/Recommended';
import Profile from './src/screens/Profile';
import { header, bottomTab } from './src/styles/styles'
import Camera from './src/screens/Camera';
import UploadVideo from './src/screens/UploadVideo';
import UploadVideoThankYou from './src/screens/UploadThankYou';
import Language from './src/screens/Language';
import MobileNumber from './src/screens/MobileNumber';
import OTPVerification from './src/screens/OTPVerification';
import GenderAge from './src/screens/GenderAge';
import NameAndAddress from './src/screens/NameAndAddress';

import Home from './src/screens/Home';
import Jobs from './src/screens/Jobs';
import CreatePost from './src/screens/CreatePost';
import Feeds from './src/screens/Feeds';
import Chats from './src/screens/Chats';
import JobsDescription from './src/screens/JobsDescription';
import AppHeader from './src/components/AppHeader';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './src/styles/colors';
import { Strings } from './src/config/Languages';
import AsyncStorage from '@react-native-community/async-storage';
import { LANGUAGE } from './src/util/Constants';
const { width, height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
export default class App extends React.Component {
  async componentDidMount() {
    const language = await AsyncStorage.getItem(LANGUAGE);
    Strings.setLanguage(language);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Language" component={Language} />
          <Stack.Screen name="MobileNumber" component={MobileNumber} />
          <Stack.Screen name="OTPVerification" component={OTPVerification} />
          <Stack.Screen name="YouAreAShramik" component={YouAreAShramik} />
          <Stack.Screen name="NameAndAddress" component={NameAndAddress} />
          <Stack.Screen name="GenderAge" component={GenderAge} />
          <Stack.Screen name="Industry" component={Industry} />
          <Stack.Screen name="Construction" component={Construction} />
          <Stack.Screen name="MainScreenNavigator" component={MainScreenNavigator} />
          <Stack.Screen name="JobsDescription" component={JobsDescription} />
          <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
          <Stack.Screen name="AuthenticationNavigator" component={AuthenticationNavigator} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Video" component={Video} />
          <Stack.Screen name="UploadVideo" component={UploadVideo} />
          <Stack.Screen name="UploadVideoThankYou" component={UploadVideoThankYou} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function MainScreenNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <View>
                {focused ? <View style={{ height: 4, width: 80, position: 'absolute', bottom: 32, left: -35, backgroundColor: PRIMARY_COLOR }}></View> : <View></View>}
                <Image
                  source={
                    focused
                      ? require('./src/assets/images/home_tab.png')
                      : require('./src/assets/images/home_tab.png')
                  }
                  style={bottomTab.tabImage}
                />
              </View>
            );
          } else if (route.name === 'Jobs') {
            return (
              <View>
                {focused ? <View style={{ height: 4, width: 80, position: 'absolute', bottom: 32, left: -35, backgroundColor: PRIMARY_COLOR }}></View> : <View></View>}
                <Image
                  source={
                    focused
                      ? require('./src/assets/images/jobs.png')
                      : require('./src/assets/images/jobs.png')
                  }
                  style={bottomTab.tabImage}
                />
              </View>
            )
          } else if (route.name === 'CreatePost') {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', width: 55, height: 55, borderRadius: 40, alignSelf: 'center', backgroundColor: PRIMARY_COLOR, marginBottom: 25, elevation: 3, shadowColor: '#000', }}>
                <Image
                  source={
                    focused
                      ? require('./src/assets/images/shram_splash.png')
                      : require('./src/assets/images/shram_splash.png')
                  }
                  style={{ width: 35, height: 35 }}
                />
              </View>
            )
          } else if (route.name === 'Feeds') {
            return (
              <View>
                {focused ? <View style={{ height: 4, width: 80, position: 'absolute', bottom: 32, left: -28, backgroundColor: PRIMARY_COLOR }}></View> : <View></View>}
                <Image
                  source={
                    focused
                      ? require('./src/assets/images/feeds.png')
                      : require('./src/assets/images/feeds.png')
                  }
                  style={bottomTab.tabImage}
                />
              </View>
            )
          } else if (route.name === 'Chats') {
            return (
              <View>
                {focused ? <View style={{ height: 4, width: 80, position: 'absolute', bottom: 32, left: -25, backgroundColor: PRIMARY_COLOR }}></View> : <View></View>}
                <Image
                  source={
                    focused
                      ? require('./src/assets/images/chats.png')
                      : require('./src/assets/images/chats.png')
                  }
                  style={bottomTab.tabImage}
                />
              </View>
            )
          }
        }
      })}
      tabBarOptions={{
        inactiveTintColor: 'gray',
        showLabel: false
      }}
    >
      <Tab.Screen name="Home" component={HomeTopNavigator} />
      <Tab.Screen name="Jobs" component={Jobs} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
      <Tab.Screen name="Feeds" component={Feeds} />
      <Tab.Screen name="Chats" component={Chats} />
    </Tab.Navigator>
  );
}

function HomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'HomeTopNavigator') {
            return (
              <Image
                source={
                  focused
                    ? require('./src/assets/images/home_tab.png')
                    : require('./src/assets/images/home_non_selected_tab.png')
                }
                style={bottomTab.tabImage}
              />
            );
          } else if (route.name === 'Camera') {
            return (
              <Image
                source={
                  focused
                    ? require('./src/assets/images/video_tab.png')
                    : require('./src/assets/images/video_non_selected_tab.png')
                }
                style={bottomTab.tabImage}
              />
            )
          } else if (route.name === 'Search') {
            return (
              <Image
                source={
                  focused
                    ? require('./src/assets/images/search_tab.png')
                    : require('./src/assets/images/search_non_selected_tab.png')
                }
                style={bottomTab.tabImage}
              />
            )
          }
        },
      })}
      tabBarOptions={{
        inactiveTintColor: 'gray',
        showLabel: false
      }}
    >
      <Tab.Screen name="HomeTopNavigator" component={HomeTopNavigator} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

const HomeTopNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name="TopNavigator" component={TopNavigator} options={({ navigation, route }) => ({
        header: ({ scene, navigation }) => {
          return (
            <AppHeader title={Strings.Shram} navigation={navigation} />
          )
        }
      })}
      />
    </Stack.Navigator>
  )
}

function TopNavigator() {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: SECONDARY_COLOR,
        },
        style: {
          elevation: 4,
          height: height / 14,

          backgroundColor: PRIMARY_COLOR,
        },
        labelStyle: {
          fontSize: 12,
          textTransform: 'none'
        },
        showLabel: false,
        showIcon: true
      }}>
      <TopTab.Screen
        options={{
          tabBarLabel: 'Popular',
          tabBarOptions: {
            tabStyle: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }
          },
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 25, height: 25, resizeMode: 'contain' }}
                source={require('./src/assets/images/Home.png')} />
            )
          }
        }}
        name="Popular"
        component={Popular}
      />
      <TopTab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 25, height: 25, resizeMode: 'contain' }}
                source={require('./src/assets/images/FollowTab.png')} />
            )
          }
        }}
        name="Follow"
        component={Follow} />
      <TopTab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 25, height: 25, resizeMode: 'contain' }}
                source={require('./src/assets/images/GroupTab.png')} />
            )
          }
        }}
        name="Recommended"
        component={Recommended} />
    </TopTab.Navigator>
  )
}

function AuthenticationNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )

}