import { ButtonContainer, Container, HomeContainer } from "./styles"



export const Home = () => {

    return (<Container>
            <HomeContainer> 
                <img src="https://picsum.photos/300/200" alt="" />
                <h1>Chijo</h1>
                <p>Oi! Eu sou a Chijo. No futuro, aqui teremos dados que virão da API</p>
                <ButtonContainer>
                    <button>❌</button>
                    <button>💚</button>
                </ButtonContainer>
            </HomeContainer>
            </Container>                   
    )
    
}