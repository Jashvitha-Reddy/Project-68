
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import FB from './screens/FB';
import IN from './screens/IN';


export default class App extends React.Component {
  render(){
    return(
        <AppContainer/>
    )
  }
}
const tabnavigator=createBottomTabNavigator({
  FB:{screen:FB},
 IN:{screen:IN}

})

const AppContainer=createAppContainer(tabnavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
