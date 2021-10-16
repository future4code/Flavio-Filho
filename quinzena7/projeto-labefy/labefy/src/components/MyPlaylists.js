import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardMyPlaylists = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`



export default class MyPlaylists extends React.Component { 

    state = {
        playlists: []
    };

    componentDidMount = () => {
        this.fetchPlaylists()
    }

    fetchPlaylists = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const headers = {headers: {Authorization: 'flavio-fonseca-banu'}}
        axios.get(url, headers)    
        .then(response => {
            this.setState({playlists: response.data.result.list})
        }).catch(err => {
            console.log(err)
        })
    };

    deletePlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
        const headers = {headers: {Authorization: 'flavio-fonseca-banu'}}
        axios.delete(url, headers)
        .then(response => {
            this.fetchPlaylists()
        }).catch(err => {
            alert('Ocorreu um erro. Tente novamente.')
            console.log(err)
        });
    };



    render () {
        const allplaylists = this.state.playlists.map((playlist) => {
            return (
                <CardMyPlaylists key={playlist.id}>
                    {playlist.name}
                    <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
                </CardMyPlaylists>
            )
        })


        return(<div> {allplaylists} </div>    )

    }

}