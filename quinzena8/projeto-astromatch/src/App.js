import {
  HomePage,
  MatchesPage
} from './pages';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './constants/baseUrl';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';


const Container = styled.div`
display: flex;
flex-direction: column;
background-color: blueviolet;
height: 100vh;
`
const ButtonContainer = styled.button`
margin-left: 38%;
background-color: blueviolet;
align-items: center;
width: fit-content;

`

function App() {

  const [pageName, setPageName] = useState("home");

  const getPagina = () => {
    switch (pageName) {
      case "home":
        return <HomePage />
      case "matches":
        return <MatchesPage />
      default:
        return <HomePage />
    }
  };

  const changePage = () => {
    if (pageName === "home") {
      setPageName("matches");
    } else {
      setPageName("home");
    }
  }

  const clearMatches = () => {
    const URL = `${BASE_URL}/clear`

    axios.put(URL)
      .then(() => {
        alert("limpeza feita")
        setPageName("home")
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  return (
    <Container>
      {getPagina()}
      <ButtonContainer>
      <Button variant="contained" color="primary" onClick={changePage}  >{pageName === "home" ? "Ir para Matches" : "Ir para Home"}</Button>
      <Button  variant="contained" color="secondary"  onClick={clearMatches}>Limpar Matches</Button>
      </ButtonContainer>
    </Container>
  );
}

export default App;
