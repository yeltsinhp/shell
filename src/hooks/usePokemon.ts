import { useState, useEffect } from "react";
import { getPokemonList, getPokemonByType, getPokemonImage } from "../services/pokemonService";

interface Pokemon {
  name: string;
  url: string;
  image: string | null;
}

const usePokemon = (selectedType: string | null, searchQuery: string) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const fetchPokemon = async (reset = false) => {
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

      setPokemonList((prev) => {
        // Evitar duplicados
        const uniquePokemons = new Map(prev.map((p) => [p.name, p]));
        pokemonWithImages.forEach((p) => uniquePokemons.set(p.name, p));
        return reset ? pokemonWithImages : Array.from(uniquePokemons.values());
      });

    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
    setLoading(false);
  };

  // 🚀 **Nuevo efecto para filtrar Pokémon cuando se escribe en el buscador**
  useEffect(() => {
    if (searchQuery) {
      const filtered = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPokemon(filtered);
    } else {
      setFilteredPokemon(pokemonList);
    }
  }, [searchQuery, pokemonList]);

  useEffect(() => {
    // Reiniciar lista cuando cambia el tipo o la búsqueda
    setPokemonList([]);
    setPage(0);
    fetchPokemon(true);
  }, [selectedType]);

  useEffect(() => {
    if (page > 0) fetchPokemon();
  }, [page]);

  return { pokemonList: filteredPokemon, loading, setPage };
};

export default usePokemon;
