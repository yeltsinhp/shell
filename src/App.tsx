import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import AppRouter from "./router/AppRouter";

const App = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
