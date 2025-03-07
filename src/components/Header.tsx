import { Flex, Image } from "@chakra-ui/react";
import Logo from "../assets/pokemon-logo.png";
import { useNavigate } from "react-router-dom";
import { POKEMON_ROUTES } from "../routes/routes";
import MenuCustom from "./MenuCustom";


const Header = () => {
  const navigate = useNavigate();
  return (
    <Flex justifyContent="space-between" alignItems="center" maxH={150} mx={10}>
      <Image
        w={200}
        h={100}
        src={Logo}
        alt="pokemon-logo"
        onClick={() => navigate(POKEMON_ROUTES.HOME)}
        cursor="pointer"
      />
      <MenuCustom />
    </Flex>
  );
};

export default Header;
