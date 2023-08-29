import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import { BtnGroup } from "./components/BtnGroup/BtnGroup";
import { Pagin } from "./components/Pagination/Pagination";
import { fetchAllPokemon, searchPokemonByName } from "./services/Api";

import { Title, Container } from "./App.styled";

const App = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const data = await fetchAllPokemon(1281, 0);
      const pokemonData = await Promise.all(
        data.map(async (item) => {
          const pokemonDetails = await searchPokemonByName(item.name);
          return pokemonDetails;
        })
      );

      setPokeData(pokemonData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = event.target.value;
    setItemsPerPage(newItemsPerPage);

    const newTotalPages = Math.ceil(pokeData.length / newItemsPerPage);
    const newCurrentPage = Math.min(currentPage, newTotalPages);
    setCurrentPage(newCurrentPage);
  };

  const filteredPokemon = pokeData.filter(
    (pokemon) =>
      selectedType === "" ||
      pokemon.types.some((type) => type.type.name === selectedType)
  );

  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Container>
            <Title>Catch pokemons</Title>
            <BtnGroup
              search={search}
              setSearch={setSearch}
              selectedType={selectedType}
              handleTypeChange={handleTypeChange}
              itemsPerPage={itemsPerPage}
              handleItemsPerPageChange={handleItemsPerPageChange}
            />
            <PokemonList
              search={search}
              pokeData={pokeData}
              loading={loading}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              itemsPerPage={itemsPerPage}
              selectedType={selectedType}
            />
            <Pagin
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </Container>
        }
      />
      <Route
        path="/pokemon/:id"
        element={<PokemonInfo pokeData={pokeData} />}
      />
    </Routes>
  );
};

export default App;
