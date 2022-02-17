import React, {Component} from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component{
  render () {
  const {pokemon} = this.props;
  const {id, name, type, image, averageWeight} = pokemon;
  const {value, measurementUnit} = averageWeight;

  return (
    <section className="card" key={id}>
      <div className="text-information">
        <p> {name} </p>
        <p> {type} </p>
        <p> Average weight: {value} {measurementUnit}</p>
      </div>
      <div className="pokemon-gif">
        <img src={image} alt={`${name} gif`}/>
      </div>
    </section>
  )}
};

Pokemon.propTypes = {
  pokemon:PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape( {
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })
};

export default Pokemon;