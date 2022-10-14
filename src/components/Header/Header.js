import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link className='logo' to='/'>PrimeFlix</Link>
      <Link className='favorites' to='/favorites'>Meus Filmes</Link>

    </header>
  )
}

export default Header