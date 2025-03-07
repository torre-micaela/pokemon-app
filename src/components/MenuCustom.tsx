import { Button } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { useNavigate, useLocation } from "react-router-dom";
import { POKEMON_ROUTES } from "../routes/routes";
import React from "react";

const MenuCustom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routeList = [POKEMON_ROUTES.HOME, POKEMON_ROUTES.DASHBOARD];
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    navigate(target.id);
  };

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <AiOutlineMenu />
        </Button>
      </MenuTrigger>
      <MenuContent p={2}>
        {routeList.map((route) => (
          <MenuItem
            key={route}
            value={route}
            onClick={handleClick}
            disabled={[route].includes(location.pathname)}
            style={{
              backgroundColor: [route].includes(location.pathname)
                ? "#e0e0e0"
                : "transparent",
            }}
          >
            {route.replace("/", "").toUpperCase() || "HOME"}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};
export default MenuCustom;
