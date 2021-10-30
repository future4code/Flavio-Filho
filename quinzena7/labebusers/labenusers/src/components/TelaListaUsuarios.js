import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
    border: 2px solid blue;
    background-color: black;
    color: azure;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;

`

export default class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

        axios.get(url, { headers: { Authorization: 'flavio-fonseca-banu'}})
        .then((res) => {
            this.setState({usuarios: res.data})            
        })
        .catch((err) => {
            alert('Ocorreu um erro, tente novamente.')
        })

    }

    deletarUsuarios = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {headers: {Authorization: 'flavio-fonseca-banu'}})
        .then((res) => {
            alert('Usuário deletado como sucesso!')
            this.pegarUsuarios()
        })
        .catch((err)=>{alert('Ocorreu um erro, tente novamente.')})

    }


    render () {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
            <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuarios(user.id)} >X</button>                
            </CardUsuario>)
        })
        

        return (
            <div>
                <button onClick={this.props.irParaCadastro} > VOLTAR </button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }


   
}