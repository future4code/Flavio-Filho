import React from 'react'
import axios from 'axios'
import styled from 'styled-components';


export default class CreatePlaylist extends React.Component {

    state = {
        name: ''
    };

    handleName = (e) => {
        this.setState({name: e.target.value})
    };

    criarPlaylist = (e) => {
        e.preventDefault();
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const headers = {headers: {Authorization: 'flavio-fonseca-banu'}}
        const body = {
            name: this.state.name
        }
        
        axios.post (url, body, headers)
        .then((res) => {
            alert('Playlist criada com sucesso. Que tal adicionar algumas músicas agora ;-)')
            
            
        })
        .catch((err) => {
            alert('Ocorreu um erro, tente novamente. :-(')
        })
        this.setState({nome: ''})


    };



    render(){
        return(
            <div>
                <input 
                    placeholder={'Nome da playlist'}
                    value={this.state.name}
                    onChange={this.handleName}
                />
                <button onClick={this.criarPlaylist} >Criar Playlist</button>


            </div>

        )
    };




}