import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.button};
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
`;


export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;
