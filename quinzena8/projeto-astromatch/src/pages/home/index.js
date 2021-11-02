import {
    PageContainer,
    CandidateContainer,
    CandidateImage,
    CandidateName,
    CandidateDescription,
    ChooseButton
} from './styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/baseUrl';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';


export const HomePage = () => {
    const [profile, setProfile] = useState({})

    const getProfile = () => {
        const URL = `${BASE_URL}/person`

        axios.get(URL)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const choosePerson = (boolean) => {
        const URL = `${BASE_URL}/choose-person`
        const body = {
            "id": profile.id,
            "choice": boolean
        }

        axios.post(URL, body)
            .then((res) => {
               getProfile()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <PageContainer>
            <CandidateContainer>
                <CandidateImage src={profile.photo} />
                <CandidateName>{profile.name}, {profile.age}</CandidateName>
                <CandidateDescription>{profile.bio}</CandidateDescription>
                <div>
                    <ChooseButton onClick={()=> choosePerson(false)}> <DeleteForeverRoundedIcon /> </ChooseButton>
                    <ChooseButton onClick={()=> choosePerson(true)}> <FavoriteRoundedIcon/>  </ChooseButton>
                </div>
            </CandidateContainer>
        </PageContainer>
    );
}