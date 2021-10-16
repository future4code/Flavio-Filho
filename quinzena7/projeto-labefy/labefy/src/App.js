import React from "react";
import CreatePlaylist from "./components/CreatePlaylist";
import MyPlaylists from "./components/MyPlaylists";
import styled from "styled-components";




class App extends React.Component {

  
  criaPlaylist = <CreatePlaylist/>
  litaPlaylists = <MyPlaylists />




  render () {

  return (
  
  <div>
    <div> {this.criaPlaylist} </div>
    <div> {this.litaPlaylists} </div>
  </div>


  )}
}

export default App;
