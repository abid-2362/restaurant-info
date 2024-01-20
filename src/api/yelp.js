import axios from 'axios';
import Config from 'react-native-config';

const yelp = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${Config.YELP_API_KEY}`,
  },
});

export default yelp;
