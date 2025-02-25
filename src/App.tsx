import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./components/GlobalStyles";
import Login from "./views/Login";

const App = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Login onLogin={(username) => console.log(username)} />
    </ThemeProvider>
  );
};

export default App;
