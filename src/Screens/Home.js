import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import HomeStyle from '../styles/homePageStyle';
import Adds from '../Components/Adds';
import ContinueWatching from '../Components/ContinueWatching';
import RecommendedMovies from '../Components/RecommendedMovies';
import MostPopular from '../Components/MostPopular';
import SelectLanguage from '../Components/SelectLanguage';
import Grid from '../Components/GridView';
import TopRated from '../Components/TopRated';

const Home = () => {
  return (
    
    <SafeAreaView style={HomeStyle.mainViewStyle}>
    
         <View  style={HomeStyle.addDiv}>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom:100}}>
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
