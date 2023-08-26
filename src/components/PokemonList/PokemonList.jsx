import PropTypes from "prop-types";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { List, LinkCard } from "./PokemonList.styled";
import { Loader } from "../Loader/Loader";

const PokemonList = ({
  pokeData,
  loading,
  currentPage,
  searchTerm,
  itemsPerPage,
  selectedType,
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visiblePokemon = pokeData
    .filter(
      (pokemon) =>
        selectedType === "" ||
        pokemon.types.some((type) => type.type.name === selectedType)
    )
    .slice(startIndex, endIndex);

  return (
    <div>
      <List>
        {loading ? (
          <Loader />
        ) : (
          visiblePokemon.map((pokemon) => (
            <li key={pokemon.id}>
              <LinkCard to={`/pokemon/${pokemon.id}`}>
                <PokemonCard pokemon={pokemon} />{" "}
              </LinkCard>
            </li>
          ))
        )}
      </List>
    </div>
  );
};

PokemonList.propTypes = {
  pokeData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  searchTerm: PropTypes.string.isRequired,
  selectedType: PropTypes.string.isRequired,
};

export default PokemonList;
