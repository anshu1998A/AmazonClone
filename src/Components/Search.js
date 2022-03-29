import {
    SafeAreaView,
    Text,
    ScrollView,
    View
  } from 'react-native';
  import React from 'react';
  import Styles from '../styles/secondStyle'
  import SearchBar from '../Screens/SearchScreen/SearchBar';
  import Browse from '../Screens/SearchScreen/Browse';
  import List from '../Screens/SearchScreen/List';
  import Language from '../Screens/SearchScreen/Language';
  import { StatusBar } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  const Search = () => {
    return (  
            <LinearGradient
            colors={['#1CB5E0', '#000046']}
            start={{ x: -0.9, y: 0.2 }}
            end={{ x: 0.5, y: 0.7 }}
            style={Styles.linearGradient}>
              <StatusBar barStyle='light-content' backgroundColor={"black"}> </StatusBar>
              {/* <StatusBar backgroundColor={'black'}/> */}
              <SafeAreaView style={{ flex: 1}}>
              <ScrollView >
            <SearchBar />
            <Browse />
            <List />
            <Language/>
            </ScrollView>
            </SafeAreaView>
            </LinearGradient>
           
           
     
    
    );
  };
  export default Search;
  
  