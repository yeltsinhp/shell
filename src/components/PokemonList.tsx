import { useEffect } from "react";
import usePokemon from "../hooks/usePokemon";
import { PokemonContainer, PokemonCard, PokemonImage } from "./styles/PokemonListStyles";

const PokemonList = ({ selectedType, searchQuery }: { selectedType: string | null; searchQuery: string }) => {
  const { pokemonList, loading, setPage } = usePokemon(selectedType, searchQuery);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

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
