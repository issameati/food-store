import React from 'react'
import {TextInput,StyleSheet, View} from 'react-native'
import { Feather } from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.searchBarStyle}>
      <Feather style={styles.iconStyle} name='search' size={30} color='black' />
      <TextInput 
        value={term} 
        onChangeText={onTermChange} 
        onEndEditing={onTermSubmit}
        style={styles.inputStyle} 
        placeholder="Search..." />
    </View>
    
  )
}

const styles = StyleSheet.create({
  searchBarStyle:{
    backgroundColor:'#DADEE3',
    flexDirection:'row',
    borderRadius:5,
    height:50,
    marginHorizontal:15,
    marginTop:15,
    marginBottom:10
  },
  inputStyle:{
    flex:1,
    fontSize:18
  },
  iconStyle:{
    marginHorizontal:10,
    alignSelf:"center",

  }
})
export default SearchBar