import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {
  Container,
  Description,
  Abilities,
  Types,
  BaseStat,
  Btn,
} from "./PokemonInfo.styled";

export const PokemonInfo = ({ pokeData }) => {
  const { id } = useParams();
  const pokemonId = parseInt(id, 10);
  const pokemon = pokeData.find((poke) => poke.id === pokemonId);

  return (
    <>
      <Container>
        {!pokemon ? (
          ""
        ) : (
          <Description>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt="photo"
              width={120}
              height={120}
            />
            <h2>{pokemon.name}</h2>

            <Abilities>
              {pokemon.abilities.map((ability) => (
                <div key={ability.ability.name}>
                  <h3>{ability.ability.name}</h3>
                </div>
              ))}
            </Abilities>

            <BaseStat>
              {pokemon.stats.map((stat) => (
                <p key={stat.stat.name}>
                  <b>{stat.stat.name}</b> / {stat.base_stat}
                </p>
              ))}
            </BaseStat>

            <Types>
              {pokemon.types.map((type) => (
                <div key={type.type.name}>
                  <h3>{type.type.name}</h3>
                </div>
              ))}
            </Types>
          </Description>
        )}
        <Btn to="/">Back</Btn>
      </Container>
    </>
  );
};

PokemonInfo.propTypes = {
  pokeData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      abilities: PropTypes.arrayOf(
        PropTypes.shape({
          ability: PropTypes.shape({
            name: PropTypes.string.isRequired,
          }).isRequired,
        })
      ).isRequired,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          stat: PropTypes.shape({
            name: PropTypes.string.isRequired,
          }).isRequired,
          base_stat: PropTypes.number.isRequired,
        })
      ).isRequired,
      types: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.shape({
            name: PropTypes.string.isRequired,
          }).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default PokemonInfo;
