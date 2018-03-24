import React, {Component} from 'react';
import {View, Text , Button} from 'react-native';

import startTabs from './../Main Tabs/startMainTabs.js'


export default class AuthScreen extends Component{
    
    loginHandler = () => {
        startTabs();
    }
    
    render(){
        return(
            <View>
                <Text> Auth Screen </Text>
                <Button title = "Login" onPress = {this.loginHandler} /> 
            </View>
        );
    }
}

