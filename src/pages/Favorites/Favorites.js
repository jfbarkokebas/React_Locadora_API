import './Favorites.css'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Favorites = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        const myList = localStorage.getItem("@primeflix")
        setMovies(JSON.parse(myList) || [])

    }, [])


    return (
        <div className='my-movies'>
            <h1>Meus Filmes</h1>
            <ul>
                {movies.map(item => (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/movie/${item.id}`}>Ver detahes</Link>
                            <button>Excluir</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites