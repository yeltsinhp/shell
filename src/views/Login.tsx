import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../store/slices/theme";
import { LoginContainer, Button, Input } from "../components/StyledLogin";
// import { RootState } from "../store";

const Login = ({ onLogin }: { onLogin: (username: string) => void }) => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
//   const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <LoginContainer>
      <h1>Bienvenido</h1>
      <Input
        type="text"
        placeholder="Ingresa tu usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={() => onLogin(username)}>Ingresar</Button>
      <Button onClick={() => dispatch(setTheme("dark"))}>🌙 Dark Mode</Button>
      <Button onClick={() => dispatch(setTheme("light"))}>☀️ Light Mode</Button>
    </LoginContainer>
  );
};

export default Login;
