import { useState } from "react";
import { TypeContainer, TypeButton, ResetButton } from "./styles/TypeFilterStyles";
import { FaTimes } from "react-icons/fa";

const types = [
  "fire", "water", "electric", "grass", "ice", "fighting",
  "poison", "ground", "flying", "ghost", "rock", "bug",
  "dragon", "dark", "steel", "fairy", "normal", "psychic"
];

interface TypeFilterProps {
  onSelectType: (type: string | null) => void;
}

const TypeFilter: React.FC<TypeFilterProps> = ({ onSelectType }) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSelectType = (type: string | null) => {
    setSelectedType(type);
    onSelectType(type);
  };

  return (
    <TypeContainer>
      {types.map((type) => (
        <TypeButton
          key={type}
          $typeName={type} 
          $isSelected={selectedType === type}
          onClick={() => handleSelectType(type)}
        >
          {type.toUpperCase()}
        </TypeButton>
      ))}
      <ResetButton onClick={() => handleSelectType(null)}>
        <FaTimes size={20} />
      </ResetButton>
    </TypeContainer>
  );
};

export default TypeFilter;
