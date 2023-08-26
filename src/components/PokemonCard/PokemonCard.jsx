import PropTypes from "prop-types";
import { Card } from "./PokemonCard.styled";

export const PokemonCard = ({ pokemon }) => {
  return (
    <Card onClick={() => pokemon}>
      <b>#{pokemon.id}</b>
      <img src={pokemon.sprites.front_default} alt="" width={40} height={40} />
      <p>{pokemon.name}</p>
    </Card>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
