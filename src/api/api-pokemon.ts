import callApi from "../helpers/callApi";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemonList = async (page: number, limit: number) => {
  const offset = (page - 1) * limit;
  return await callApi({
    url: `${API_URL}?offset=${offset}&limit=${limit}`,
  });
};
export const getPokemonByNameOrId = (nameOrId: string | number) => {
  return callApi({ url: `${API_URL}/${nameOrId}` });
};

export const getPokemonColor = async (nameOrId: string | number) => {
  const data = await callApi({ url: `${API_URL}-species/${nameOrId}` });
  return data.color.name || "";
};
