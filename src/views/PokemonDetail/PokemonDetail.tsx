import { useParams } from "react-router-dom";
import { Text, Flex, Wrap, WrapItem, Badge } from "@chakra-ui/react";
import { usePokemonColor, usePokemonDetail } from "../../hooks/usePokemonList";
import { FaStar } from "react-icons/fa";
import Header from "../../components/Header";
import Card from "../../components/Card";
import SkeletonCard from "../../components/SkeletonCard";

interface PokemonType {
  type: { name: string };
}

interface PokemonAbility {
  ability: { name: string };
}

const PokemonDetail = () => {
  const { nameOrId } = useParams<{ nameOrId: string }>();
  const { data, isLoading, isError } = usePokemonDetail(nameOrId || "");
  const { data: color } = usePokemonColor(nameOrId || "");

  if (isError) return <Text>Error al cargar el Pokémon</Text>;

  return (
    <Flex flexDir="column" gap={5}>
      <Header />

      <Flex p={2} justifyContent="center">
        {isLoading && <SkeletonCard />}
        <Card
          name={data?.name}
          image={
            data?.sprites?.front_default ||
            "https://i.postimg.cc/bNTsb8qK/pokeball.png"
          }
          styles={{ minHeight: 500 }}
        >
          <Text>Height: {data?.height}</Text>
          <Text>Weight: {data?.weight}</Text>
          <Text>
            Types:{" "}
            {data?.types?.map((t: PokemonType) => t.type.name).join(", ")}
          </Text>
          <Text>Abilities:</Text>
          <Wrap gap={2}>
            {data?.abilities?.map((a: PokemonAbility, index: number) => (
              <WrapItem key={index}>
                <Badge p={2} colorPalette={color || "green"} borderRadius="lg">
                  <FaStar style={{ marginRight: "4px" }} /> {a.ability.name}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        </Card>
      </Flex>
    </Flex>
  );
};

export default PokemonDetail;
