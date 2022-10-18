//hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import Home from './pages/Home/Home'
import Movie from './pages/Movie/Movie'
import Error from './pages/Error/Error'
//comṕonents
import Headers from './components/Header/Header'




const RoutesApp = () => {
    return (
        <BrowserRouter>
        <Headers />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/film/:id' element={<Movie />} />


                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp