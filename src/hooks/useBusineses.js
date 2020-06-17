import React,{useState, useEffect} from 'react'
import yelp from '../api/yelp.js'

export default () =>{
  const [businesses,setBusineses] = useState([]);
  const [errorMessag,setErrorMessag] = useState('');
  
  const searchApi = async (Searchterm) => {
    try {
      
      const res = await yelp.get('/search',{
        params:{
          limit:40,
          term:Searchterm,
          location: 'san jose'
        }
      });
      setBusineses(res.data.businesses);
      setErrorMessag('')
    } catch (error) {
      setErrorMessag('something went wrong!!!')
    }
  }

  useEffect(()=> { searchApi('')},[])

  return[searchApi,businesses,errorMessag];

}