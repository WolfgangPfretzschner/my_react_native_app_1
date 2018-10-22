import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/componenets/header'

const App = () => (
   <Header />
)



AppRegistry.registerComponent("albums", () => App);
