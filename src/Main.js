import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const Main = () => {
    return (
       <NavigationContainer>
<Router></Router>

       </NavigationContainer>
    )
}

export default Main
