import { useState, useEffect } from "react";
import { useTheme } from "styled-components"; // 🔹 Obtener tema
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { Container } from "../components/styles/HomeStyles";
import TypeFilter from "../components/TypeFilter";
import PokemonList from "../components/PokemonList";
import { getPokemonImage } from "../services/pokemonService";
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  PokemonImage,
  PokemonName, // 🔹 Nuevo componente de estilo
} from "../components/styles/LastVisitedStyles";

const Home = () => {
  const theme = useTheme(); // 🔹 Obtener el tema actual
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [lastVisited, setLastVisited] = useState<{ name: string; image: string } | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("pokemonHistory") || "[]");

    if (history.length > 0) {
      const lastPokemon = history[0]; // Ahora tomamos el PRIMERO como el último visitado

      getPokemonImage(lastPokemon).then((image) => {
        if (image) {
          setLastVisited({ name: lastPokemon, image });
          setIsOpen(true);
        }
      });
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Navbar />
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <TypeFilter onSelectType={(type) => setSelectedType(type)} />
      <PokemonList selectedType={selectedType} searchQuery={searchQuery} />

      {isOpen && lastVisited && (
        <ModalContainer>
          <ModalContent>
            <h2>Último Pokémon Visitado</h2>
            {lastVisited.image ? (
              <PokemonImage src={lastVisited.image} alt={lastVisited.name} />
            ) : (
              <p>Cargando imagen...</p>
            )}
            <PokemonName theme={theme}>
              {lastVisited.name.charAt(0).toUpperCase() + lastVisited.name.slice(1)}
            </PokemonName>
            <CloseButton onClick={closeModal}>Cerrar</CloseButton>
          </ModalContent>
        </ModalContainer>
      )}
    </Container>
  );
};

export default Home;
