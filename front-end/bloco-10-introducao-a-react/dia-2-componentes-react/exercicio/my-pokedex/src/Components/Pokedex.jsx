import React, {Component} from  "react";
import Pokemon from "./Pokemon";

class Pokedex extends Component{
  render() {
    const {pokemonList} = this.props;
    
    return(
      <main>
        {pokemonList.map((elemento) => <Pokemon pokemon={elemento} />)}
      </main>
    )
  }
}

export default Pokedex;