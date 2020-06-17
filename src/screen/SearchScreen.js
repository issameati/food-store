import React,{useState, useEffect} from 'react'
import {Text,StyleSheet, View,ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import BusnessesList from '../components/BusinessesList'
import useBusnesses from '../hooks/useBusineses'


const SearchScreen =  () => {

  const [term,setTerm] = useState('');
  const [searchApi,businesses,errorMessag] = useBusnesses();

  const filterBusinesses = (price)=> businesses.filter(item => item.price === price)
  
  

  return (
    <>
      <SearchBar 
        term={term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term) }  /> 
        {errorMessag ? <Text>{errorMessag}</Text>:null}
        <ScrollView>
          <BusnessesList 
            title={'Cost Effective'}
            businesses={filterBusinesses('$')}
          />
          <BusnessesList 
            title={'Bit Pricier'}
            businesses={filterBusinesses('$$')}
          />
          <BusnessesList 
            title={'Big Spender'}
            businesses={filterBusinesses('$$$')}
          />   
        </ScrollView>

        
    </>
  )
}

const styles = StyleSheet.create({
  SearchScreen:{
    fontSize:14
  }
})
export default SearchScreen