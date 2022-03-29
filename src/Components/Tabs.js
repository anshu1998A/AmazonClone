import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import {Image} from 'react-native';
// import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Search from './Search'
import Channel from './Channel'
import Downloads from './Downloads'
import MyStuff from './MyStuff'
import HeaderStackScreen from '../MyStuff/Header';
import HomeTab from './HomeTab';
import{View,Text} from 'react-native'
import HomeStyle from '../styles/HomePageStyle';

function Tabs() {
const Tab = createBottomTabNavigator()

  return (
     
    <Tab.Navigator 
    tabBarOptions={{
       activeBackgroundColor: 'black',
       inactiveBackgroundColor: 'black',
           style: {
                //  backgroundColor: 'black',
                 paddingBottom: 3
           }
    }}>
        <Tab.Screen  name="Home" component={HomeTab} options={{ tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../MenuIcons/home.png')} style={{ height:25,width:25, tintColor:focused?'#00A8E1':'grey',}}/>
        )
      }} />
        <Tab.Screen name="Channel" component={Channel} options={{tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../MenuIcons/menu.png')} style={{ height:25,width:25, tintColor:focused?'#00A8E1':'grey'}}/>
        )
      }}/>
        <Tab.Screen name="Find" component={Search} options={{ tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../MenuIcons/search.png')} style={{ height:25,width:25, tintColor:focused?'#00A8E1':'grey'}}/>
        )}}/>
        <Tab.Screen name="Downoads" component={Downloads} options={{ tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../MenuIcons/download.png')} style={{ height:25,width:25, tintColor:focused?'#00A8E1':'grey'}}/>
        )}}/>
        <Tab.Screen name="My Stuff" component={HeaderStackScreen} options={{ tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../MenuIcons/profile.png')} style={{ height:25,width:25, }}/>
        )}}/>
    </Tab.Navigator>
 
  )
}

export default Tabs