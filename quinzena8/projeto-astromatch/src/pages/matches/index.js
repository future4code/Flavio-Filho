import {
    PageContainer,
    CandidateContainer,
    ListItem,
} from './styles';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/baseUrl';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';



export const MatchesPage = () => {
    const [matches, setMatches] = useState([]);

    const getMatches = () => {
        const URL = `${BASE_URL}/matches`

        axios.get(URL)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const MapMatches = () => {
        const list = matches.map((match) => {
            return (
                <ListItem>
                    <Avatar src={match.photo} />
                    <h4>{match.name}</h4>
                </ListItem>
            )
        })
        return list
    }

    useEffect(() => {
        getMatches()
    }, []) // com o MapMatches como dependência ainda estava em loop infinito, 
    // para resolver retirei ele e na função de limpar matches redirecionei para a página home


    return (
        <PageContainer>
            <CandidateContainer>
                { matches.length ? <MapMatches/> : <p> Nada para ver aqui </p>}
            </CandidateContainer>
        </PageContainer>
    )

}