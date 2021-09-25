import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware,  } from "redux";
import { Provider } from "react-redux";
import reducer from './store/reducer/reducer';
import thunk from 'redux-thunk';
import Index from './components/Main/Index';

export default function App() {
  
  const store = createStore(reducer, applyMiddleware(thunk));
  
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Index />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
