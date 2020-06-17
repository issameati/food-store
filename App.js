import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screen/SearchScreen'
import BusinessScreen from './src/screen/BusinessScreen'


const Navigator = createStackNavigator({
  Search:SearchScreen,
  Business:BusinessScreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Business Search'
  }
})

export default createAppContainer(Navigator)
