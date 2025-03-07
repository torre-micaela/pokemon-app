import { Box, Heading, VStack } from "@chakra-ui/react";
import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header from "../../components/Header";
import { useRating } from "../../context/RatingContext";
import TableRanking from "../../components/TableRanking";

const Dashboard = () => {
  const { ratings } = useRating();
  const ratingsAdapted =
    useMemo(
      () =>
        ratings &&
        Object.entries(ratings).map(([name, value]) => ({
          name,
          rating: value,
        })),
      [ratings]
    ) || [];
  const ratingCounts = Array.from({ length: 5 }, (_, i) => ({
    stars: `${i + 1} ⭐`,
    count: ratingsAdapted.filter((p) => p.rating === i + 1).length,
  }));
  const sortedPokemon = ratingsAdapted
    ?.sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  return (
    <>
      <Header />
      <VStack gap={8} p={6}>
        <TableRanking
          title="Top 10 Best Pokémon sortedPokemon"
          data={sortedPokemon}
          columns={["Pokémon", "Rating"]}
        />
        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
          <Heading size="md" mb={4}>
            Pokémon Count by Rating
          </Heading>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ratingCounts} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="stars" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="count" fill="#be95be" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </VStack>
    </>
  );
};

export default Dashboard;
