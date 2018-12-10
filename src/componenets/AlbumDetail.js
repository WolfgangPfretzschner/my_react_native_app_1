import React from 'react';
import { Text, View, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import { Avatar } from 'react-native-elements'

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image} = album
  return (
    <Card>
      <CardSection>
      <View style={styles.thumbnailContainerStyle}>
      <Avatar
        medium
        rounded
        source={{uri: thumbnail_image}}
        onPress={() => console.log(`Works with ${title} Fucker `)}
        activeOpacity={0.7}
      />
      </View>
        {/* <Image 
        style={styles.imgStyle}
        source={{ uri: thumbnail_image}}/> */}
      
      <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}> {title} </Text>
        <Text> {artist} </Text>
      </View>
     <Image style={styles.iconStyle} source={require("../../assets/path.png")}/>
      
      </CardSection>
    
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle:{
    fontSize: 18,
  },
  imgStyle:{
    width:90,
    height: 90,
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  iconStyle: {
    float: 'right',
    marginTop:10,
    marginLeft: 20,
    // paddingTop:10,
    // backgroundColor: '#42d872',
    justifyContent:'center',
    width: 20,
    height: 20,
  }
}
export default AlbumDetail