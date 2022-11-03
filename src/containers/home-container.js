import axios from 'axios';
import React, { Component } from 'react';

class HomeContainer extends Component{
    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/3').then(result=>{
            console.log(result)
            let response = result
        }).catch(
            console.log
        )
    }
    render(response){
        return(
            <>
            <h1>Poke App</h1>
            response
            </>
        );
    }
}

export default HomeContainer;