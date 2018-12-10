import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/componenets/header'
import AlbumList from './src/componenets/AlbumList'

const App = () => (
   <View>
      <Header headerText={'Albums'} />
      <AlbumList />
   </View>
)



AppRegistry.registerComponent("albums", () => App);
