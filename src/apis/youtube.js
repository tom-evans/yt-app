import axios from 'axios';

const KEY = 'AIzaSyATJkwmrG6rgLylZEX6WY3_oPpN18fZAyk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
