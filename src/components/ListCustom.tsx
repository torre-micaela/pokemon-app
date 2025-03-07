import { Flex } from "@chakra-ui/react";
import { POKEMON_IMAGES } from "../constants/pokemon-images";
import Paginator from "./Paginator";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import InputSearch from "./InputSearch";

interface ListCustomProps {
  data?: PokeProsp[];
  page?: number;
  count: number;
  onHandlerPage: (e: { page: number; pageSize?: number }) => void;
  disabledPaginator?: boolean;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PokeProsp {
  name: string;
  url: string;
}

const ListCustom = ({
  data,
  count,
  page = 1,
  onHandlerPage,
  disabledPaginator,
  onChangeInput,
}: ListCustomProps) => {
  const navigate = useNavigate();
  const navigateToPokemon = (name: string) => {
    navigate(`/pokemon/${name}`);
  };
  return (
    <>
      <Flex justifyContent="flex-end" mr={10}>
        <InputSearch onChangeInput={onChangeInput} />
      </Flex>
      <Flex
        gap={6}
        p={2}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        {data?.map((poke: PokeProsp) => (
          <Card
            key={`pokemon-${poke.name}`}
            name={poke.name}
            image={
              POKEMON_IMAGES[poke.name] ||
              "https://i.postimg.cc/bNTsb8qK/pokeball.png"
            }
            onHandlerClick={() => navigateToPokemon(poke.name)}
          />
        ))}
      </Flex>
      {!disabledPaginator && (
        <Flex alignItems="center" justifyContent="center">
          <Paginator
            handlerPagination={onHandlerPage}
            count={count}
            pageSize={page}
          />
        </Flex>
      )}
    </>
  );
};
export default ListCustom;
