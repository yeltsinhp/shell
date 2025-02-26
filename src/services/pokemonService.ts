import api from "./api";

export const getPokemonList = async (offset: number = 0, limit: number = 30) => {
  try {
    const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    return [];
  }
};

export const getPokemonByType = async (type: string) => {
  try {
    const response = await api.get(`type/${type}`);
    return response.data.pokemon.map((p: any) => p.pokemon);
  } catch (error) {
    console.error("Error fetching Pokémon by type:", error);
    return [];
  }
};

export const getPokemonImage = async (pokemonName: string) => {
  try {
    const response = await api.get(`pokemon/${pokemonName}`);
    
    return response.data.sprites.other["official-artwork"].front_default;
  } catch (error) {
    console.error(`Error fetching image for ${pokemonName}:`, error);
    return null;
  }
};

