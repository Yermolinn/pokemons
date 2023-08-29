import axios from "axios";

export const fetchAllPokemon = async (limit, offset) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`, {
      params: {
        limit,
        offset,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const searchPokemonByName = async (name) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};