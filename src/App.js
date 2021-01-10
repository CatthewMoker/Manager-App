import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyAHi7yK8TB9p-RMV-4kWaV3Qj4PYzvBAfg',
        authDomain: 'manager-ab63c.firebaseapp.com',
        projectId: 'manager-ab63c',
        storageBucket: 'manager-ab63c.appspot.com',
        messagingSenderId: '1076645605237',
        appId: '1:1076645605237:web:d717cf1028c7c590c5ad3c',
      });
    } else {
      firebase.app(); // if already initialized, use that one
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
