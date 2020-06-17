import React from 'react'
import {Text,StyleSheet,FlatList,Image, View} from 'react-native'

const BusinessesDetails = ({data}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:`${data.image_url}`}} />
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.rating}>{`${data.rating} Stars, ${data.review_count} Reviews`}</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    marginLeft:15,
    marginTop:5
  },
  title:{
    fontWeight:"bold"
  },
  rating:{
    color:'gray'
  },
  image:{
    width:250,
    height:150,
    borderRadius:8
  }
})
export default BusinessesDetails