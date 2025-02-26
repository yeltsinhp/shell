import { useState } from "react";
import { SearchContainer, SearchInput } from "./styles/SearchBarStyles";

const Search = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Buscar Pokémon..."
        value={query}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};

export default Search;
