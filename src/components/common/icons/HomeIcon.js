
import React, {Component} from 'react';
import Ionicons from "@expo/vector-icons/MaterialIcons";
import {TouchableNativeFeedback, View} from "react-native";

export default class HomeIcon extends Component {

    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}
                background={TouchableNativeFeedback.Ripple()}
            >
                <View style={{padding: 5, margin: 10}}>
                    <Ionicons name='home' size={32} color="black" />
                </View>
            </TouchableNativeFeedback>
        );
    }
}