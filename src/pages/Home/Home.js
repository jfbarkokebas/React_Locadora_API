import {useEffect, useState} from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        async function loadFilmes(){

            const response = await api.get('movie/now_playing',{
                params:{
                    api_key: '90d6ea616ca99198ac773904c66275c4',
                    language:'pt-BR',
                    page:1,

                }
            })

            console.log(response);
            setFilmes(response.data.results.slice(0,10))
            
        }

        loadFilmes()

    }, [])
    

    return (
        <div className='container'>
            <div className="lista-filmes">
                {filmes && filmes.map(f=>(
                    <article key={f.id}>
                        <strong>{f.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${f.poster_path}`} alt="imagem do poster do filme" />
                        <Link to={`/film/${f.id}`}>Acessar</Link>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Home