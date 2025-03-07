import { useQuery } from "@tanstack/react-query";
import {
  getPokemonByNameOrId,
  getPokemonColor,
  getPokemonList,
} from "../api/api-pokemon";

export const usePokemonList = (
  page: number,
  limit: number = 20,
) => {
  return useQuery({
    queryKey: ["pokemonList", page],
    queryFn: () => getPokemonList(page, limit),
    staleTime: 5000,
  });
};

export const usePokemonDetail = (nameOrId: string | number) => {
  return useQuery({
    queryKey: ["pokemonDetail", nameOrId],
    queryFn: () => getPokemonByNameOrId(nameOrId),
    enabled: !!nameOrId,
    staleTime: 5000,
  });
};

export const usePokemonColor = (nameOrId: string | number) => {
  return useQuery({
    queryKey: ["pokemonColor", nameOrId],
    queryFn: () => getPokemonColor(nameOrId),
    enabled: !!nameOrId,
  });
};
