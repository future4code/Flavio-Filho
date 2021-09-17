import React from 'react';
import styled from 'styled-components';

const SmallcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
`;

const SmallcardImagem = styled.img`
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
`;

function CardPequeno(props) {
    return (
        <SmallcardContainer>
            <SmallcardImagem src= { props.imagem } />
            <p>{ props.texto }</p>
        </SmallcardContainer>
    ) 
}

export default CardPequeno;
