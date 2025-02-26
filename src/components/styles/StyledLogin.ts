import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  overflow: hidden; /* Evita el scroll */
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.2); /* Hacerlo semitransparente */
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  position: relative; /* Para posicionar el toggle */
`;

export const ToggleContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${(props) => props.theme.text};
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  background: ${(props) => props.theme.button};
  color: white;
  border: none;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
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
