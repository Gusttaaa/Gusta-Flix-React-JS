
import './header.css';

import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link to='/' className='logo'>Gusta Flix</Link>
            <Link to='/favoritos' className='favoritos'>Meus Filmes</Link>
        </header>

    );
}

export default Header;