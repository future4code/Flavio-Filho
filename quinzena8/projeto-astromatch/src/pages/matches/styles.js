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

export const ListItem = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: space-between; 
    width: 50%;
    margin: 0.1em;
    padding: 15px;
`;

