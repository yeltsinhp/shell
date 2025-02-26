import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Login from "../views/Login";
import Home from "../views/Home";
import { lazy, Suspense } from "react";

const PokemonDetail = lazy(() => import("pokemonMicrofront/PokemonDetail"));

const AppRouter = () => {
  const user = useSelector((state: RootState) => state.user.username);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/pokemon/:name" element={
          <Suspense fallback={<p>Cargando...</p>}>
            <PokemonDetail />
          </Suspense>
        } />
        <Route path="*" element={<Navigate to={user ? "/home" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
