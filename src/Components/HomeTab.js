import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import HomeStyle from '../styles/HomePageStyle';
const TopTab = createMaterialTopTabNavigator();
import { NavigationContainer } from '@react-navigation/native';

export default function HomeTab() {
    return (<>
        <SafeAreaView>
            <View style={{backgroundColor:'#232F3E'}}>
                <Text style={HomeStyle.PMImage}>prime video</Text>
                <Image style={HomeStyle.logoStyle} source={require('../assets/images/MoviesImages/MenuIcons/smile.png')}></Image>
            </View>
        </SafeAreaView>
        <TopTab.Navigator screenOptions={{swipeEnabled:false}}
       
        >
            <TopTab.Screen name='Home' component={Home} />
            <TopTab.Screen name='TVShows' component={Home} />
            <TopTab.Screen name='Movies' component={Home} />
            <TopTab.Screen name='Kids' component={Home} />
        </TopTab.Navigator>
    </>






    )
}