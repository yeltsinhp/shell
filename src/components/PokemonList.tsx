import { useEffect } from "react";
import usePokemon from "../hooks/usePokemon";
import { PokemonContainer, PokemonCard, PokemonImage } from "./styles/PokemonListStyles";

const PokemonList = ({ selectedType, searchQuery }: { selectedType: string | null; searchQuery: string }) => {
  const { pokemonList, loading, setPage } = usePokemon(selectedType, searchQuery);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 50 && !loading) {
        console.log("Cargando más Pokémon...");
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, setPage]);

  return (
    <PokemonContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name}>
          {pokemon.image ? (
            <PokemonImage src={pokemon.image} alt={pokemon.name} />
          ) : (
            <p>Cargando imagen...</p>
          )}
          <p>{pokemon.name.toUpperCase()}</p>
        </PokemonCard>
      ))}
      {loading && <p>Cargando más Pokémon...</p>}
    </PokemonContainer>
  );
};

export default PokemonList;
