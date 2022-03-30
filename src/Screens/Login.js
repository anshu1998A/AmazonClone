import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/secondStyle';

export default function Login() {
  return (
    <View>
      <LinearGradient
      colors={['#1CB5E0', '#000046']}
      start={{ x: -0.9, y: 0.2 }}
      end={{ x: 0.5, y: 0.7 }}
      style={Styles.linearGradient}>
      </LinearGradient>
    </View>
  )
}