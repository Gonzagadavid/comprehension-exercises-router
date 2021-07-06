import React from 'react';
import './pokemon.css';

class PokemonDetails extends React.Component {
  render() {
    const { pokemons, match } = this.props
    const pokemon = pokemons.find( pkm => pkm.id === +match.params.id)
    const { name, type, averageWeight, image, moreInfo} = pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        <a href={moreInfo}>More Information</a>
      </div>
    );
  }
}

export default PokemonDetails;
