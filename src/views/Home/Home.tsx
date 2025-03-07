import { Flex, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import { usePokemonList } from "../../hooks/usePokemonList";
import React, { useState, useCallback } from "react";
import SkeletonGrid from "../../components/SkeletonGrid";
import ListCustom from "../../components/ListCustom";
import { debounce } from "lodash";

interface PokemonItem {
  name: string;
  url: string;
}

const Home = () => {
  const [page, setPage] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const limit = 10;
  const { data, isLoading } = usePokemonList(page, limit);
  const totalPages = Math.ceil(data?.count / limit);

  const debouncedHandler = useCallback(
    debounce((value: string) => {
      setDebouncedSearch(value.toLowerCase().trim());
    }, 500),
    []
  );

  const onHandlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase().trim();
    debouncedHandler(inputValue);
  };

  const filteredData = data?.results?.filter((poke: PokemonItem) =>
    poke.name.toLowerCase().includes(debouncedSearch)
  );

  return (
    <Flex flexDir="column" gap={5}>
      <Header />
      {isLoading && <SkeletonGrid length={10} />}

      <ListCustom
        data={filteredData}
        count={totalPages}
        onHandlerPage={(e) => setPage(e.page)}
        disabledPaginator={!!debouncedSearch}
        onChangeInput={onHandlerSearch}
      />
      {filteredData?.length === 0 && (
        <Flex p={5}>
          <Text>No pokemons found 😣</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Home;
