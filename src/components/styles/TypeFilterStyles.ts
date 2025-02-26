import styled from "styled-components";

// Mapeo de colores según el tipo de Pokémon
const typeColors: Record<string, string> = {
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  ghost: "#735797",
  rock: "#B6A136",
  bug: "#A6B91A",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
  normal: "#A8A77A",
  psychic: "#F95587"
};

export const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  width: 90%;
`;

export const TypeButton = styled.button<{ $typeName: string; $isSelected?: boolean }>` 
  padding: 10px 15px;
  background: ${(props) => typeColors[props.$typeName]};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  font-weight: bold;

  &:hover {
    background: ${(props) => typeColors[props.$typeName] + "99"};
    transform: scale(1.05);
  }

  ${(props) =>
    props.$isSelected &&
    `
    background: ${typeColors[props.$typeName] + "CC"}; 
  `}
`;

// Botón Reset como icono
export const ResetButton = styled.button`
  padding: 10px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 40px;
  height: 40px;

  &:hover {
    background: darkred;
    transform: scale(1.1);
  }
`;
