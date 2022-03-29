import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  Text,
  useColorScheme,
  StatusBar,
  View,
} from 'react-native';
import HomeStyle from '../styles/homePageStyle';
// import Data from './DataDetails/Data';
import Adds from './Adds';
import ContinueWatching from './ContinueWatching';
import RecommendedMovies from './RecommendedMovies';
import MostPopular from './MostPopular';


import SelectLanguage from './SelectLanguage';
import Grid from './GridView';
// import SearchBar from './Components/SearchBar';
import TopRated from './TopRated';

const Home = () => {
  return (

    
    <SafeAreaView style={{backgroundColor:'#232F3E'}}>
    
         <View  style={HomeStyle.addDiv}>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom:50}}>
         {/* <SearchBar/> */}
         <Adds/>
        <ContinueWatching/>
        <RecommendedMovies/>
        <MostPopular/>
        <SelectLanguage/>
        <Grid/>
        <TopRated/>
        </View>
        </ScrollView>
        </SafeAreaView>
    
      
    
    
  )
};
export default Home;
