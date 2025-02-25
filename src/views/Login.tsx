import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/slices/theme";
import { RootState } from "../store";
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
} from "../components/StyledLogin";

const Login = ({ onLogin }: { onLogin: (username: string) => void }) => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <LoginContainer>
      <Card>
        {/* Toggle dentro del Card, alineado a la derecha */}
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
        <Button onClick={() => onLogin(username)}>Ingresar</Button>
      </Card>
    </LoginContainer>
  );
};

export default Login;
