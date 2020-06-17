import axios from 'axios'

export default axios.create({
  baseURL:'https://api.yelp.com/v3/businesses',
  headers:{
    Authorization:'Bearer StCG5af8XKeWNWvLSOFtvHK-PzYUq0ghcNef5KEHOnMA1jNxo7mn-AiG717gqJgZ2L7FLFeXCX3P1gkzxgKYLJfa7lfQ390iJN2AQR1N1RHkXqyGEX4X0h-Wfv7jXnYx'
  }
});