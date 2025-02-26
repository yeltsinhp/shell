import { useState } from "react";
import { SearchCard, SearchInput, SearchButton } from "./styles/SearchBarStyles";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchCard>
      <SearchInput
        type="text"
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchButton onClick={() => onSearch(search)}>Buscar</SearchButton>
    </SearchCard>
  );
};

export default SearchBar;
