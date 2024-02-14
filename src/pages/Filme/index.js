import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css'
import { toast } from 'react-toastify';


function Filme(){

    const { id } = useParams();

    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
        await api.get(`/movie/${id}`, {
            params:{
                api_key:'9a6d675b997318f24de14e6fc0cd68a7',
                language: 'pt-BR',
            }
        })
        .then((response) => {
            setFilme(response.data);
            setLoading(false);
        })
        .catch(()=>{
            navigate('/', { replace: true});
            return;
        })
        }
        loadFilme();


    }, [navigate, id])

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }



    function salvarFilme(){
        const minhaLista = localStorage.getItem('@gustaflix');
        
        let filmesSalvos = JSON.parse(minhaLista) || [];


        //VERIFICANDO SE O FILME JÁ ESTÁ NA LISTA
        const temFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id);

        if(temFilme){
            toast.warn('Esse filme já está na sua lista!')
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('@gustaflix', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!')

    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}></img>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <br></br>
            <strong>Avaliação: {filme.vote_average}/10</strong>

            <div className='area-btn'>
                <button onClick={salvarFilme}>Salvar</button>

                <button>
                    <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title + ' Trailer'}`}>Trailer</a>
                </button>

            </div>

        </div>
    );

}

export default Filme;