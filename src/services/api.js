import axios from 'axios'
//base da url: https://api.themoviedb.org/3

//https://api.themoviedb.org/3/movie/now_playing?api_key=90d6ea616ca99198ac773904c66275c4&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api