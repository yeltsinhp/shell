import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/user";
import { setTheme } from "../store/slices/theme";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  Card,
  Title,
  Input,
  Button,
  ToggleContainer,
  ToggleSwitch,
  SwitchInput,
  SwitchSlider,
} from "../components/styles/StyledLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleLogin = () => {
    if (username.trim() !== "") {
      dispatch(setUser(username)); // Guarda el usuario en Redux y LocalStorage
      navigate("/home"); // Redirige a Home
    }
  };

  return (
    <LoginContainer>
      <Card>
        {/* Toggle para cambiar entre Light/Dark Mode */}
        <ToggleContainer>
          <ToggleSwitch>
            <SwitchInput
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => dispatch(setTheme(theme === "dark" ? "light" : "dark"))}
            />
            <SwitchSlider />
          </ToggleSwitch>
        </ToggleContainer>

        <Title>Bienvenido</Title>
        <Input
          type="text"
          placeholder="Ingresa tu usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={handleLogin}>Ingresar</Button>
      </Card>
    </LoginContainer>
  );
};

export default Login;
