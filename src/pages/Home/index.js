import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css'
// URL DA API movie/now_playing?api_key=9a6d675b997318f24de14e6fc0cd68a7&language=pt-BR

function Home(){
    
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    //API SENDO CARREGADA AO ABRIR A PÁGINA
    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key:'9a6d675b997318f24de14e6fc0cd68a7',
                    language: 'pt-BR',
                    page: 1
                }
            })

            //console.log(response.data.results.slice(0, 10));

            setFilmes(response.data.results.slice(0, 10));
        };

        loadFilmes();
        setLoading(false);
    }, []);

    //CASO TENHA INTERNET LENTA
    if(loading){
        return(
            <h2 className='loading'>Carregando filmes...</h2>
        );
    }

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></img>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;