import axios from 'axios';

const KEY = 'AIzaSyDhi1lQzroIdi8FK8N9g6HqwkH-hhJ2v9k';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

