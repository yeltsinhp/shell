import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.4); /* Más translúcido */
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Espacio entre toggle y botón */
`;

export const Username = styled.h1`
  font-size: 20px;
`;

export const LogoutButton = styled.button`
  padding: 8px 12px;
  background: ${(props) => props.theme.button}; /* Cambia según el theme */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => (props.theme.button === "#FF5722" ? "#D84315" : "#0F5CBF")}; /* Oscurecer color */
  }
`;

export const ToggleSwitch = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SwitchInput = styled.input`
  display: none;
`;

export const SwitchSlider = styled.span`
  position: relative;
  width: 40px;
  height: 20px;
  background: ${(props) => (props.theme.text === "#fff" ? "#ccc" : "#333")};
  border-radius: 15px;
  display: inline-block;
  transition: background 0.3s;

  &:before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    transition: left 0.3s;
  }
  
  ${SwitchInput}:checked + & {
    background: ${(props) => props.theme.button};

    &:before {
      left: 20px;
    }
  }
`;
