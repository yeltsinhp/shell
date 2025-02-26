import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { Container } from "../components/styles/HomeStyles";
import TypeFilter from "../components/TypeFilter";
import PokemonList from "../components/PokemonList";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <Container>
      <Navbar />
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <TypeFilter onSelectType={(type) => setSelectedType(type)} />
      <PokemonList selectedType={selectedType} searchQuery={searchQuery} />
    </Container>
  );
};

export default Home;
