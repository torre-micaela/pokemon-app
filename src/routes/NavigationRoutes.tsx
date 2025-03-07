import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { POKEMON_ROUTES } from "./routes";
import AuthGuard from "./auth.guard";

const NavigationRoutes = () => {
  const Home = lazy(() => import("../views/Home/Home"));
  const Dashboard = lazy(() => import("../views/Dashboard/Dashboard"));
  const Detail = lazy(() => import("../views/PokemonDetail/PokemonDetail"));

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard />}>
          <Route index path={POKEMON_ROUTES.HOME} element={<Home />} />
          <Route
            path={`${POKEMON_ROUTES.POKEMON}/:id?/*`}
            element={<Detail />}
          />
          <Route
            path={POKEMON_ROUTES.DASHBOARD}
            element={<Dashboard />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationRoutes;
