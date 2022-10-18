import './Movie.css'

import { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import api from '../../services/api'

const Movie = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    async function loadFilm() {

      setIsLoading(true)

      await api.get(`movie/${id}`, {
        params: {
          api_key: '90d6ea616ca99198ac773904c66275c4',
          language: 'pt-BR'
        }
      }).then(response => {

        setMovie(response.data);
        console.log(response.data);
        setIsLoading(false)

      }).catch((error) => {
        console.log(error);
        navigate('/', {replace: true})
      })


    }

    loadFilm()

    return() =>{
      console.log('COMPONENTE DESMONTADO');
    }

  }, [])

  if(isLoading){
    return(
      <div className="movie-info">
        <h2>Carregando detalhes...</h2>
      </div>
    )
  }

  return (
    <div className="movie-info">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="imagem do poster do filme" />

      <h3>Sinopse</h3>
      <span>{movie.overview}</span>
      <strong>Avaliação: {movie.vote_average} / 10</strong>
      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

export default Movie