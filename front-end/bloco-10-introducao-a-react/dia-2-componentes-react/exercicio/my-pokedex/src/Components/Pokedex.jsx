import React, {Component} from  "react";
import Pokemon from "./Pokemon";

class Pokedex extends Component{
  render() {
    const {pokemonList} = this.props;
    
    return(
      pokemonList.map((elemento) => <Pokemon pokemon={elemento} />)
    )
  }
}

export default Pokedex;