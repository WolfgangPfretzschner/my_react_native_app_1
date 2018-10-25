import React from 'react';
import { Text, View } from 'react-native'

const AlbumDetail = (props) => {
   return (
      <View>
         <Text>
            Album = {props.album.title}
         </Text>
      </View>
   )
}

export default AlbumDetail