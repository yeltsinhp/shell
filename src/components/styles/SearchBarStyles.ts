import styled from "styled-components";

export const SearchCard = styled.div`
  width: 90%;
  max-width: 90%;
  background: rgba(255, 255, 255, 0.2); /* Fondo semitransparente */
  backdrop-filter: blur(10px); /* Efecto de desenfoque */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  padding: 12px 15px;
  background: ${(props) => props.theme.button};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
`;
