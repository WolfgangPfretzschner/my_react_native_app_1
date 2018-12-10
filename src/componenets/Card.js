import React from 'react'
import { View } from 'react-native'

const Card = (props) => {
   const {containerStyle} = styles
   return (
      <View style={containerStyle} >
         {props.children}
      </View>
   )
}

console.log("%ctestq","color:red;font-size:18px",)
const styles = {
   containerStyle: {
      // flexDirection: 'row',
      fill: '#ddd',
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      marginBottom:0,

   }
}

export default Card