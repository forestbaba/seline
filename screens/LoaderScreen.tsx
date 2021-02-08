import React, { Component } from 'react'
import { View, Text} from 'react-native';
// import SplashScreen from 'react-native-splash-screen'

export default class LoaderScreen extends Component {

    componentWillMount(){
        // SplashScreen.hide();

    }
    render() {
        return (
            <View>
                <Text>Call me</Text>
            </View>
        )
    }
}
