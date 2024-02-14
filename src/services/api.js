import axios from 'axios';

// BASE DA URL: https://api.themoviedb.org/3/
// URL DA API movie/now_playing?api_key=9a6d675b997318f24de14e6fc0cd68a7&language=pt-BR




const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;