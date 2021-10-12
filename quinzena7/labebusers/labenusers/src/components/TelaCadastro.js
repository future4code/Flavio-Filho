import axios from "axios";
import React from "react";
import styled from "styled-components";

const ConatinerCadastro = styled.div`
    display: flex;
    flex-direction: column;
`


export default class TelaCadastro extends React.Component {
    state = {
        nome: '',
        email: ''
    }

    handleName = (e) => {
        this.setState({nome: e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    fazerCadastro = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "flavio-fonseca-banu"
            }

        })
        .then((resposta) => {
            alert('Usuário(a) cadastrado(a) com sucesso!')
            this.setState({name:'', email:''})
        }) 
        .catch((error) => {
            alert(error.response.data.message)

        })

    }


    render() {
        return( 
            <ConatinerCadastro>
                <button onClick={this.props.irParaLista} > LISTA DE USUÁRIOS </button>
                <h2>Cadastro</h2>
                <input 
                    placeholder={"Nome"}
                    value={this.state.name}
                    onChange={this.handleName}
                />
                <input 
                    placeholder={'Email'} 
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro} >Cadastrar</button>
            </ConatinerCadastro>  
    
        ) 
    } 


}