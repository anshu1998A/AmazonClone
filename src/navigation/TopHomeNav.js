import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../Screens/Home';
import HomeStyle from '../styles/homePageStyle';
const TopTab = createMaterialTopTabNavigator();
export default function HomeTab() {
    return (
        <>
            <View>
                <View style={HomeStyle.mainViewStyle}>
                    <Text style={HomeStyle.PMImage}>prime video</Text>
                    <Image style={HomeStyle.logoStyle} source={require('../assets/images/MoviesImages/MenuIcons/smile.png')}></Image>
                </View>
            </View>
            <TopTab.Navigator screenOptions={{ swipeEnabled: false }} style={HomeStyle.mainViewStyle} >
                <TopTab.Screen name='Home' component={Home} />
                <TopTab.Screen name='TVShows' component={Home} />
                <TopTab.Screen name='Movies' component={Home} />
                <TopTab.Screen name='Kids' component={Home} />
            </TopTab.Navigator>
        </>

    )
}