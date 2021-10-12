import React from "react"
import TelaCadastro from "./components/TelaCadastro"
import TelaListaUsuarios from "./components/TelaListaUsuarios"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  

`

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro} />
      default:
        return <div> Erro! Página não encontrada :( </div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})

  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})

  }


  render () {
    return (
      <Container>
        {this.escolheTela()}
      </Container>
    );
  }
  
}

