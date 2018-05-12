import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, AppLoading } from "expo";
import Routes from './src/Routes';
import { Root } from 'native-base';
import { Actions } from 'react-native-router-flux';
import store from './src/store/configureStore';
import config from './firebase.config';
import { SIGN_IN_SUCCESS } from './src/store/actions/auth.actions';

// ignore firebase warn
console.ignoredYellowBox = [
  'Setting a timer'
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
    //firebase
    firebase.initializeApp(config);
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        store.dispatch({ type: SIGN_IN_SUCCESS, payload: user });
      }
    });
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    return (
      <Root>
        {this.state.loading ? <AppLoading /> : <Routes />}
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
