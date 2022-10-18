import { useEffect, useState, useRef } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {

    const [movies, setMovies] = useState([])
    const carousel = useRef(null)

    useEffect(() => {
        async function loadMovies(){

            //setIsLoading(true)

            const response = await api.get('movie/now_playing',{
                params:{
                    api_key: '90d6ea616ca99198ac773904c66275c4',
                    language:'pt-BR',
                    page:1,

                }
            })

            console.log(response);
            setMovies(response.data.results)
            //setIsLoading(false)
            
        }

        loadMovies()

    }, [])

    if (!movies || movies.length === 0) return null

    function handleRigth(e) {
        e.preventDefault()
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth

    }

    function handleLeft(e) {
        e.preventDefault()
        console.log(carousel.current);
        carousel.current.scrollLeft += carousel.current.offsetWidth

    }

    return (
        <div className="container">

            

            <button id="left-btn" onClick={handleRigth}><img src="/static/images/216151_right_chevron_icon.png" alt="botão-direita" />
                </button>

           
            
            <div className="carousel" ref={carousel}>
                {movies && movies.map(item =>
                    <div className="item" key={item.id}>
                       <strong>{item.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="imagem do poster do filme" />
                        <Link to={`/movie/${item.id}`}>Acessar</Link>
                    </div>
                )}
            </div>
            
                <button id="rigth-btn" onClick={handleLeft}><img src="/static/images/216151_right_chevron_icon.png" alt="botão-esquerda" />
                </button>
            

        </div>
    );
}

/*
const Home = () => {
    const [filmes, setFilmes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function loadMovies(){

            setIsLoading(true)

            const response = await api.get('movie/now_playing',{
                params:{
                    api_key: '90d6ea616ca99198ac773904c66275c4',
                    language:'pt-BR',
                    page:1,

                }
            })

            console.log(response);
            setFilmes(response.movie.results)
            setIsLoading(false)
            
        }

        loadMovies()

    }, []) 

    if(isLoading){
        return(
            <div className="loading">
                <h3>Carregando filmes...</h3>
            </div>
        )
    }
    

    return (
        <div className='container'>
           
            <div className="lista-filmes">
                {filmes && filmes.map(f=>(
                    <article key={f.id}>
                        <strong>{f.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${f.backdrop_path}`} alt="imagem do poster do filme" />
                        <Link to={`/movie/${f.id}`}>Acessar</Link>
                    </article>
                ))}
                </div>
        </div>
    )
} */

export default Home