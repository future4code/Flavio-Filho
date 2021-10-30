import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    height: 80vh;
    padding-top: 20px;
`;

export const CandidateContainer = styled.div`
    border: 1px solid black;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    height: 100%;
    background-color: powderblue;
    

`;

export const CandidateName = styled.h2`
    text-align: center;
`;

export const CandidateDescription = styled.p``;

export const CandidateImage = styled.img`
    width: 50%;
    height: 50%;
`;

export const ChooseButton = styled.button``;