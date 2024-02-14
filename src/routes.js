import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './component/Header';
import Home from './pages/Home'
import Filmes from './pages/Filme'
import Favoritos from './pages/Favoritos';

import Erro from './pages/Erro';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header></Header>

            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/filme/:id' element={<Filmes></Filmes>}></Route>
                <Route path='/favoritos' element={<Favoritos></Favoritos>}></Route>

                <Route path='*' element={<Erro></Erro>}></Route>

            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;