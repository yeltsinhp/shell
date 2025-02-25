import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { GlobalStyles } from "./components/GlobalStyles";
import Login from "./views/Login";

const App = () => {
  const [user, setUser] = useState<string | null>(null);
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      {user ? <h1>Bienvenido {user}</h1> : <Login onLogin={setUser} />}
    </ThemeProvider>
  );
};

export default App;
