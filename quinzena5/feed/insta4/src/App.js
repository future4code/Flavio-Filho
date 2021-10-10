import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        
        <Post
        nomeUsuario={'Silvia'}
        fotoUsuario={'https://picsum.photos/51/51'}
        fotoPost={'https://picsum.photos/200/151'} 
        />

        <Post
        nomeUsuario={'Suzy'}
        fotoUsuario={'https://picsum.photos/50/51'}
        fotoPost={'https://picsum.photos/200/149'} 
        />

      </MainContainer>
    );
  }
}

export default App;
