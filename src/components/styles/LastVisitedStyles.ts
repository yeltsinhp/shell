import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.modalBackground};
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); 
  border: 3px solid ${({ theme }) => theme.borderColor}; 
  max-width: 400px;
  width: 90%;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out; 
  opacity: 1;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  animation: fadeIn 0.3s ease-in-out;
`;

export const PokemonImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 10px; 
`;

export const PokemonName = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 10px;
`;

export const CloseButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 12px 20px;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  transition: background 0.2s ease-in-out, transform 0.1s ease-in-out;

  &:hover {
    background: darkred;
    transform: scale(1.05);
  }
`;
