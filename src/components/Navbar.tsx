import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { logoutUser } from "../store/slices/user";
import { setTheme } from "../store/slices/theme";
import { NavbarContainer, Username, LogoutButton, ToggleSwitch, SwitchInput, SwitchSlider, NavbarRight } from "./styles/NavbarStyles";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user.username);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <NavbarContainer>
      <Username>Bienvenido, {user}!</Username>
      <NavbarRight>
        <ToggleSwitch>
          <SwitchInput
            type="checkbox"
            checked={theme === "dark"}
            onChange={() => dispatch(setTheme(theme === "dark" ? "light" : "dark"))}
          />
          <SwitchSlider />
        </ToggleSwitch>
        <LogoutButton onClick={() => dispatch(logoutUser())}>Cerrar Sesión</LogoutButton>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
