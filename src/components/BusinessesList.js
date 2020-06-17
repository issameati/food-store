import React from 'react'
import BusinessesDetails from './BusinessesDetails'
import {Text, StyleSheet, FlatList, View, TouchableOpacity} from 'react-native'
import {withNavigation} from 'react-navigation'

const BusinessesList = ({title,businesses,navigation}) => {

  if (!businesses.length ) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal
        data={businesses}
        keyExtractor={(item) => item.id}
        scrollinde 
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={()=> {navigation.navigate('Business',{'id':item.id})}}>
              <BusinessesDetails data={item} />
            </TouchableOpacity>

          )
        }}
      />
    </View>
    
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize:20,
    marginLeft:15,
    marginBottom:5,
    fontWeight:'bold'
  }
})
export default withNavigation(BusinessesList) 