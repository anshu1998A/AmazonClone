import React from 'react'
import { Text, View, SafeAreaView, Image, ImageBackground } from 'react-native'

import Header from '../Screens/MyStuff/Header';
import DownloadedV from '../Screens/MyStuff/DownloadedV';

function MyStuff({navigation}) {
  return (
    
<View style={{backgroundColor:'black'}}>
  <Header navigation={navigation}/>
  <DownloadedV/>
</View>
      
    
  )
}

export default MyStuff
