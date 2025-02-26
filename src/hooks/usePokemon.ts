import { useState, useEffect } from "react";
import { getPokemonList, getPokemonByType, getPokemonImage } from "../services/pokemonService";

interface Pokemon {
  name: string;
  url: string;
  image: string | null; // Nueva propiedad para la imagen
}

const usePokemon = (selectedType: string | null, searchQuery: string) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      let results: Pokemon[] = [];

      if (selectedType) {
        results = await getPokemonByType(selectedType);
      } else {
        results = await getPokemonList(page * 30, 30);
      }

      // Obtener imágenes SVG para cada Pokémon
      const pokemonWithImages = await Promise.all(
        results.map(async (pokemon) => {
          const image = await getPokemonImage(pokemon.name);
          return { ...pokemon, image };
        })
      );

      setPokemonList((prev) => (page === 0 ? pokemonWithImages : [...prev, ...pokemonWithImages]));
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setPokemonList([]); // Reiniciar lista al cambiar de tipo o búsqueda
    setPage(0);
    fetchPokemon();
  }, [selectedType, searchQuery]);

  useEffect(() => {
    if (page > 0) fetchPokemon();
  }, [page]);

  return { pokemonList, loading, setPage };
};

export default usePokemon;
