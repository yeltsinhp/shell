import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { logoutUser } from "../store/slices/user";
import { setTheme } from "../store/slices/theme";
import { 
  NavbarContainer, 
  Username, 
  LogoutButton, 
  ToggleSwitch, 
  SwitchInput, 
  SwitchSlider, 
  NavbarRight, 
  HistoryButton 
} from "./styles/NavbarStyles";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user.username);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <NavbarContainer>
      <Username>Bienvenido, {user}!</Username>
      <NavbarRight>
        {/* 🔹 Botón para ver el historial de Pokémon */}
        <HistoryButton onClick={() => navigate(`/history`)}>Ver Historial</HistoryButton>
        
        {/* 🔹 Switch de Tema */}
        <ToggleSwitch>
          <SwitchInput
            type="checkbox"
            checked={theme === "dark"}
            onChange={() => dispatch(setTheme(theme === "dark" ? "light" : "dark"))}
          />
          <SwitchSlider />
        </ToggleSwitch>

        {/* 🔹 Botón de Cerrar Sesión */}
        <LogoutButton onClick={() => dispatch(logoutUser())}>Cerrar Sesión</LogoutButton>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
