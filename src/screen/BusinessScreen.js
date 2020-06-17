import React,{useState,useEffect} from 'react'
import {Text, StyleSheet, Image, ScrollView,FlatList, View} from 'react-native'
import yelp from '../api/yelp'


const BusinessScreen =  ({navigation}) => {

  const [business,setBusiness] = useState(null)
  const id = navigation.getParam('id');
  
  const getBusiness = async (id)=>{
    const res = await yelp.get(`/${id}`);
    setBusiness(res.data);
  }

  useEffect(()=>{ getBusiness(id)},[])

  if(!business) return null

  return (
    <View style={styles.businessScreen}>
      <Text style={styles.title}>{business.name}</Text>
      <FlatList 
        data={business.photos}
        keyExtractor={(item)=>item.id}
        renderItem={({item}) =>{
         return <Image style={styles.image} source={{uri:item}} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  businessScreen:{
    alignItems:'center'
  },
  image:{
    width:350,
    height:300,
    borderRadius:8,
    marginBottom:8
    
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  }
})
export default BusinessScreen