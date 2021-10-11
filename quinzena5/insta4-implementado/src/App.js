import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = { 
    posts: [
      {
        nome: 'Paulinha',
        foto: <img src='https://picsum.photos/50/50'></img>,
        fotoPost: <img src='https://picsum.photos/200/150'></img>
      },
      {
        nome: 'João',
        foto: <img src='https://picsum.photos/50/53'></img>,
        fotoPost: <img src='https://picsum.photos/200/151'></img>
      },
      {
        nome: 'Amanda',
        foto: <img src='https://picsum.photos/50/52'></img>,
        fotoPost: <img src='https://picsum.photos/200/152'></img>
      }

    ],

    valorInputNome: "", 
    valorInputfoto: "", 
    valorInputFotoPost: ""

  };

  adicionaPost = () => {
    const novoPost = {
      nome: this.state.valorInputNome,
      foto: this.state.valorInputfoto,
      fotoPost: this.state.valorInputFotoPost
    }; 

    const novoPosts = [...this.state.posts, novoPost];
    this.setState({ posts: novoPosts })
  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value })
  } 

  onChangeInputFoto = (event) => {
    this.setState({valorInputfoto: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }

  

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <div>
          
          <div className={'posts-nome'}>{post.nome}</div> 
          <div className={'posts-imagem'}>{post.foto}</div> 
          <div className={'foto-posts'}>{post.fotoPost}</div>
                           
        </div>
        
      )

    }) 

  
    return (
      <div className={'app-container'}> 
       <div>{listaDePosts}</div> 
       <div className = {'adiciona-post'}>
       <input 
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder={"Nome"}
       />
       <input
       value={this.state.valorInputfoto}
       onChange={this.onChangeInputFoto}
       placeholder={"Título da postagem"}       
       />
       <input 
       value={this.state.valorInputFotoPost} 
       onChange={this.onChangeInputFotoPost}
       placeholder={"Mensagem"}      
       />
       <button onClick={this.adicionaPost}>Postar</button>
       
       </div>
              
      </div>
    );
  }
  
}

export default App;
