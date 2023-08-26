import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
// import usePokemonData from "././services/usePokemonData";
import { BtnGroup } from "./components/BtnGroup/BtnGroup";
import { Pagin } from "./components/Pagination/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import { Title, Container } from "./App.styled";

const App = () => {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(`${baseUrl}?limit=250&offset=0`);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const fetchPokeData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        params: {
          limit: itemsPerPage,
          offset: (currentPage - 1) * itemsPerPage,
        },
      });
      getPokemon(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const getPokemon = async (res) => {
    const pokemonData = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url);
        const formattedName =
          item.name.charAt(0).toUpperCase() + item.name.slice(1);
        return { ...result.data, name: formattedName };
      })
    );

    setPokeData(pokemonData);
  };

  useEffect(() => {
    fetchPokeData();
  }, [url]);

  useEffect(() => {
    fetchPokeData();
    setCurrentPage(1);
  }, [itemsPerPage]);

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
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Title>Catch pokemons</Title>
              <BtnGroup
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedType={selectedType}
                handleTypeChange={handleTypeChange}
                itemsPerPage={itemsPerPage}
                handleItemsPerPageChange={handleItemsPerPageChange}
              />
              <PokemonList
                searchTerm={searchTerm}
                pokeData={pokeData}
                loading={loading}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                itemsPerPage={itemsPerPage}
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
    </Router>
  );
};

export default App;
